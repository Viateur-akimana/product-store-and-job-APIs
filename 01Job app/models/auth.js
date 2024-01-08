const mongoose =  require("mongoose");
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter the name for the user"],
        minLength:6,
        maxLength:50
    },
    email:{
        type: String,
        required:[true,"please enter the email for the user"],
        minlength:6,
        maxLength:50,
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"please provide a valid email"]
        
    },
    password:{
        type:String,
        required:[true,"please provide a valid email"],
        minLength:6,

    }

})
userSchema.pre('save',async function(next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next()
})


userSchema.methods.createJWT = function() {
    return jwt.sign(user,process.env.SECRET,{expiresIn:process.env.LIFETIME})
}
userSchema.methods.comparePassword = async function(candidatePassword){
    const isMatch = await bcrypt.compare(candidatePassword,this.password);
    return isMatch
}
const user = mongoose.model('user',userSchema);
module.exports = user;