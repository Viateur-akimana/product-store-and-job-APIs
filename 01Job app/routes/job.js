const express = require("express");
const { getAllJobs, getJob, createJob, updateJob, deleteJob } = require("../controllers/job");
const router = express.Router();


router.get("/getAllJobs",getAllJobs);
router.get("/getJob",getJob);
router.post("/createJOb",createJob);
router.put("/updateJob",updateJob)
router.delete("/deleteJob",deleteJob);
module.exports = router;