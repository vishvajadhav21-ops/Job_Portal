import {Job} from "../models/job.model.js";

// for admin to post a job
export const postJob = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body;
        const userId = req.id; // Assuming user ID is available in req.id after authentication middleware

        if (!title || !description || !salary || !location || !jobType || !experience || !position || !companyId) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,
            created_by: userId
        })

        return res.status(201).json({
            success: true,
            message: "Job posted successfully",
            job
        });

    } catch (error) {
        console.log(error);

    }
};


// for getting all jobs with keyword search
export const getAllJobs = async (req, res) => {
    try {
        const keywords = req.query.keywords || "";
        const query = {
            $or: [
                { title: { $regex: keywords, $options: "i" } },
                { description: { $regex: keywords, $options: "i" } },]

        };
        
        const jobs = await Job.find(query).populate({
            path: 'company'
        }).sort({ createdAt: -1 });

        if (!jobs) {
            return res.status(404).json({
                success: false,
                message: "No jobs found"
            });
        }

        return res.status(200).json({
            success: true,
            jobs
        });

    } catch (error) {
        console.log(error);
    }
}

// for getting a single job by id
export const getAllJobsById = async (req, res) => {
  try {
    
const jobId = req.params.id;
const job = await Job.findById(jobId).populate({
    path : "applications"
});  
if(!job){
    return res.status(404).json({
        success: false,
        message: "Job not found"
    });
}

return res.status(200).json({
    success: true,
    job
});

  } catch (error) {
    console.log(error);
  }
}

// how many jobs posted by a company
export const getAdminJobs = async (req, res) => {
try {
    
    const adminId = req.id; 
  
    // Assuming user ID is available in req.id after authentication middleware
    const jobs = await Job.find({ created_by: adminId }).populate('company');
     

    if(!jobs){
        return res.status(404).json({
            success: false,
            message: "No jobs found for this admin"
        });
    };
    return res.status(200).json({
        success: true,
        jobs
    }); 

} catch (error) {
    console.log(error);
    
}
}