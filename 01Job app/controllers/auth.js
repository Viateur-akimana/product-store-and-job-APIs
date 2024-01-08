const BadRequestError = require("../errors/badRequestError");
const UnauthenticatedError = require("../errors/unauthenticated");
const User = require("../models/auth");
const jwt = require("jsonwebtoken");
const register  = async(req,res) =>{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
       throw new  BadRequestError("please provide name, email and password")
    }

    const user = await User.create({...req.body});
    const token = user.createJWT();

    res.status(201).json({user:user,token})
}
const login =async(req,res) =>{
    const {email,password}=req.body;
    if(!email || !password){
        throw new BadRequestError("please provide credential")
    }
    const user = await User.findOne({email});
    if(!user){
    throw new UnauthenticatedError("please provide valid credentials")
    }

}
module.exports ={
    register,
    login
}
