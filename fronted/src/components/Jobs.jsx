import React from 'react'
import Navbar from './shared/Navbar'
import FilterCard from "./FilterCard"
import Job from './Job'
import { useSelector } from 'react-redux'

// const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8]

const Jobs = () => {
const {allJobs} = useSelector(store => store.job);

    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto mt-5 px-4">

                {/* ✅ KEY FIX: items-start prevents children from stretching */}
                <div className="flex gap-5 items-start">

                    {/* ✅ shrink-0 prevents sidebar from collapsing */}
                    <div className='w-[250px] shrink-0'>
                        <FilterCard/>
                    </div>

                    {/* ✅ min-h-screen gives jobs section enough height */}
                    <div className='flex-1 min-h-screen'>
                        {
                            allJobs.length <= 0
                            ? <span>Job Not Found</span>
                            : (
                                <div className="grid grid-cols-3 gap-4">
                                    {
                                        allJobs.map((job) => (
                                            <div key={job?._id}>
                                                <Job  job={job}/>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Jobs
