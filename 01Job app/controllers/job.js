const getAllJobs = (req,res)=>{
    res.send("Get all jobs")
}
const getJob = (req,res) =>{
    res.send("get a job")
}
const createJob = (req,res) =>{
    res.send("creating a job in the database")
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