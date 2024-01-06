const express = require('express');
const app = express();
const connectDB = require("./db/connect")

const authRouter = require("./routes/auth");
const jobRouter = require("./routes/job");

app.use("api/v1/auth",authRouter);
app.use("api/v1/job",jobRouter);

const port = process.env.PORT || 8080;
const start=async()=>{
    try {
        
        app.listen(port,(req,res)=>console.log(`Successfully server is running on port ${port}`));
        await connectDB()
    } catch (error) {
       console.log(error); 
    }
}
start();