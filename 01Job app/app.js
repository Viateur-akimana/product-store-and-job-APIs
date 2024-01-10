require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require("./db/connect")
const authenticationMiddleware = require("./middlewares/authentication")
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit")

const authRouter = require("./routes/auth");
const jobRouter = require("./routes/job");

app.set('trust proxy',1)
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(rateLimit());


app.use("/api/v1/auth",authRouter);
 app.use("/api/v1/job",authenticationMiddleware,jobRouter);

app.get("/",(req,res)=>{
    res.send("welcome to homepage")
})

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