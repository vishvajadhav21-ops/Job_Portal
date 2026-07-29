import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

export const applyJob = async (req, res) => {
    try {
        
        const userId = req.id;
        const jobId  = req.params.id;
        if(!jobId){
            return res.status(400).json({
                success : false,
                message : "Job ID is required"});
        }

        // Check if the user has already applied for the job
        const existingApplication = await Application.findOne({
            job : jobId,
            applicant : userId
        });

        if(existingApplication){
            return res.status(400).json({
                success : false,
                message : "You have already applied for this job"
            });
        }
        // check if job exists
        const job = await Job.findById(jobId);
        if(!job){
            return res.status(404).json({
                success : false,
                message : "Job not found"
            });
        }

        // create a new application
        const newApplication = await Application.create({
            job : jobId,
            applicant : userId
        });

        job.applications.push(newApplication._id);
        await job.save();

        return res.status(200).json({
            success : true,
            message : "Job application successful"
        });

    } catch (error) {
        console.log(error);   
    }
};

// get applied jobs for a user
export const getAppliedJobs = async (req, res) => {
    try {
        
const userId = req.id;

        const application = await Application.find({applicant : userId}).sort({createdAt : -1}).populate({
            path : 'job',
            options : {sort : {createdAt : -1}},
            populate : {
                path : 'company',
                options : {sort : {createdAt : -1}}
            }
        })
        
        if(!application){
            return res.status(404).json({
                success : false,
                message : "No applications found"
            });
        }
    
        return res.status(200).json({
            success : true,
            application
        });

    } catch (error) {
        console.log(error);
        
    }
};

export const getApplicants = async (req, res) => {
 try {
      console.log("REQ PARAMS:", req.params)  // ✅ Add this
        console.log("JOB ID:", req.params.id) 
const jobId = req.params.id;
const job = await Job.findById(jobId).populate({
    path : 'applications',
    options:{sort : {createdAt : -1}},
    populate : {
        path : 'applicant',
    }
});

if(!job){
    return res.status(404).json({
        success : false,
        message : "Job not found"
    });
}
return res.status(200).json({
    success : true,
    job
});

 } catch (error) {
    console.log(error);
    
 }
};

export const updateApplicationStatus = async (req, res) => {
    try {
        const {status} = req.body;
        const applicationId = req.params.id;
if(!status){
    return res.status(400).json({
        success : false,
        message : "Status is required"
    });
}
// find application by applicationId
const application = await Application.findone({_id : applicationId});
if(!application){
    return res.status(404).json({
        success : false,
        message : "Application not found"
    });
}
// update application status
application.status = status.toLowerCase;
await application.save();

return res.status(200).json({
    success : true,
    message : "Application status updated successfully",
    application
});

    } catch (error) {
        console.log(error);
        
    }
};