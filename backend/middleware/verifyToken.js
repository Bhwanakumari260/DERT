const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1]; // Format: Bearer <token>

  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Add user info to req
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
}

module.exports = verifyToken;
