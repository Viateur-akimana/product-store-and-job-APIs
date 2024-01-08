const User = require("../models/auth");
const jwt = require("jsonwebtoken");
const register  = async(req,res) =>{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        res.status(404).json("please provide name, email and password")
    }

    const user = await User.create({...req.body});
    const token = jwt.sign(user,process.env.SECRET,{expiresIn:"1d"})

    res.status(201).json({user:user,token})
}
const login =(req,res) =>{
    res.send("login page")
}
module.exports ={
    register,
    login
}
