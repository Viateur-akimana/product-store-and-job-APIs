const User = require("../models/auth")
const register  = async(req,res) =>{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        res.status(404).json("please provide name, email and password")
    }
    const user = await User.create({...req.body});
    res.status(201).json({user:user})
}
const login =(req,res) =>{
    res.send("login page")
}
module.exports ={
    register,
    login
}
