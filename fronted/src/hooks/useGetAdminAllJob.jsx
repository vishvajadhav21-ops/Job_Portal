import axios from "axios"
import { useEffect } from "react"
import { JOB_API_END_POINT } from "../components/utils/constant";
import { useDispatch } from "react-redux";
import { setAdminAllJobs,  } from "../components/redux/jobSlice";

const useGetAdminAllJob = () => {
const dispatch = useDispatch();

   useEffect(() => {
    const fetchAllJobs = async ()=>{
        try {
           const res  = await axios.get(`${JOB_API_END_POINT}/getadminjobs` , {withCredentials : true})
           console.log("COMPANIES RESPONSE:", res.data) 
           if(res.data.success){
            dispatch(setAdminAllJobs(res.data.jobs))
           } 
        } catch (error) {
            console.log(error);
            
        }
    }

    fetchAllJobs();

   }, [])
}

export default useGetAdminAllJob
