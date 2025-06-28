const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const authRoute = require("./routes/Authroute");
dotenv.config();





app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

app.use("/api/auth",authRoute);

app.listen(8080,(req,res)=>{
    console.log("server is runnig on port 8080");
});