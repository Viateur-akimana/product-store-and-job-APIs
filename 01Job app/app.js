const express = require('express');
const app = express();
const authRouter = require("./routes/auth");
const jobRouter = require("./routes/job");


app.get("/",(req,res)=>{
    res.send("home page");
})

app.use("api/v1/auth",authRouter);
app.use("api/v1/job",jobRouter);

const port = process.env.PORT || 8080;
const start=async()=>{
    try {
        
        app.listen(port,(req,res)=>console.log(`Successfully server is running on port ${port}`));
    } catch (error) {
       console.log(error); 
    }
}
start();