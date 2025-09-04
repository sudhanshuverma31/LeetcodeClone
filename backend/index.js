const express = require('express');
const mongoose = require('mongoose');
const userRegister = require('./models/register.js')
const cors = require('cors');
const dbConnect = require('./db');
require("dotenv").config();

dbConnect();
const app = express();  

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
   res.send("hello world")
})

app.post('/register',async (req,res)=>{
    try{
    const {username,password} = req.body;
    const newUser = new userRegister({username,password});
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
})

app.listen(process.env.PORT || 5000 ,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})