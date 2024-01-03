const mongoose = require("mongoose");
const connectDB = (url)=>{
return new mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,

})
}

module.exports = connectDB;
