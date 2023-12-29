const mongoose = require("mongoose");
const connectDB = ()=>{
return new mongoose.connect('mongodb://atlas-sql-647820beabf8cc5c13133383-x7ftt.a.query.mongodb.net/freecodecamp?ssl=true&authSource=admin',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,

})
}

module.exports = connectDB;
