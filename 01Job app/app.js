require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require("./db/connect")
const authenticationMiddleware = require("./middlewares/authentication")

const authRouter = require("./routes/auth");
const jobRouter = require("./routes/job");


app.use(express.json());

app.use("/api/v1/auth",authRouter);
 app.use("/api/v1/job",authenticationMiddleware,jobRouter);



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