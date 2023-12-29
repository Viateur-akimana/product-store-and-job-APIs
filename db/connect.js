const mongoose = require('mongoose')
const url = 'mongodb://atlas-sql-647820beabf8cc5c13133383-x7ftt.a.query.mongodb.net/freecodecamp?ssl=true&authSource=admin'
const connectDB = () => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
