const BadRequestError = require("../errors/badRequestError");
const UnauthenticatedError = require("../errors/unauthenticated");
const User = require("../models/auth");
const register  = async(req,res) =>{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
       throw new  BadRequestError("please provide name, email and password") 
    }

    const user = await User.create({...req.body});
    const token = user.createJWT();

    res.status(201).json({user:{userId:user._id, name:user.name},token})
}
const login =async(req,res) =>{
    const {email,password}=req.body;
    if(!email || !password){
        throw new BadRequestError("please provide email and password")
    }
    const user = await User.findOne({email});
    if(!user){
    throw new UnauthenticatedError("please provide valid credentials")
    }
    const isPassword = await comparePassword(password);
    if(!isPassword){
        throw new UnauthenticatedError("please provide valid credentials")
        }
    res.status(200).json({user:{userId:user._id,name:user.name}})

}
module.exports ={
    register,
    login
}
