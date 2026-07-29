import axios from "axios"
import { useEffect } from "react"
import { COMPANY_API_END_POINT} from "../components/utils/constant";
import { useDispatch } from "react-redux";

import { setCompanies } from "../components/redux/companySlice";

const useGetAllCompany= () => {
const dispatch = useDispatch();

   useEffect(() => {
    const fetchAllJobs = async ()=>{
        try {
           const res  = await axios.get(`${COMPANY_API_END_POINT}/get` , {withCredentials : true})
             
           if(res.data.success){
            dispatch(setCompanies(res.data.company))
           } 
        } catch (error) {
            console.log(error);
            console.log("COMPANIES ERROR:", error)
        }
    }

    fetchAllJobs();

   }, [dispatch])
}

export default useGetAllCompany
