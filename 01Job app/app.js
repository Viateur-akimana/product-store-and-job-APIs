const express = require('express');
const connectDB = require('../db/connect');
const app = express();
app.get('/',(req,res)=>{
    res.send("home page")
})
const port = process.env.PORT || 8080;
const start=async()=>{
    try {
        
        app.listen(port,(req,res)=>console.log(`Successfully server is running on port ${port}`));
        await connectDB();
    } catch (error) {
       console.log(error); 
    }
}
start();