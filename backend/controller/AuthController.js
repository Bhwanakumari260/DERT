const db = require("../config/db");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {

    const [existingUser] = await db.query("SELECT * FROM user WHERE email = ?", [email]);
    if (existingUser.length){
         return res.status(400).json({ message: "Email already exists" });

    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO user (name,email,password,role) VALUES (? ,? ,? ,?)'
    await db.query(sql,
      [name, email, hashedPassword, role || 'admin']
    );
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const [users] = await db.query("SELECT * FROM user WHERE email = ?", [email]);
    if (!users.length) return res.status(400).json({ message: "User not found" });

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Incorrect password" });

    const token = jwt.sign({ id: user.id,email:user.email, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {register,login};