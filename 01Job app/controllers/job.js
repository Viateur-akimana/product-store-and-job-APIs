const NotFoundError = require('../errors/not-found');
const Job = require('../models/job')

const getAllJobs = async(req,res)=>{
    const jobs = await Job.find({createdBy:req.user.userId}).sort('createdAt');
    res.status(200).json({jobs:jobs,count:jobs.length()})
}
const getJob = async(req,res) =>{
    const {user:userId,params:{id:jobId}} = req
    const job = await Job.findOne({jobId:_id,createdBy:userId});
    if(!job){
        throw new NotFoundError(`No job with  id ${jobId}`)
    }
    res.status(200).json({job})
}
const createJob = async(req,res) =>{
    req.body.createdBy=req.user.userId;
    const job = await Job.create(req.body);
    res.status(201).json({job});
}

const updateJob =(req,res) =>{
    res.send("updating the job")
}
const deleteJob  = (req,res) =>{
    res.send("deleting a job")
}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}