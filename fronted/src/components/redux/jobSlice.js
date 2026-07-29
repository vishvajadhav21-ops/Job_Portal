import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name : "job",
    initialState : {
        allJobs : [],
        allAdminJob : [],
        singleJob : null,
        searchJobByText : ""
    },
    reducers : {
        // actions
        setAllJobs : (state , action ) =>{
            state.allJobs = action.payload
        },
        setSingleJob : (state , action) =>{
            state.singleJob = action.payload
        },
        setAdminAllJobs : (state , action) =>{
            state.allAdminJob = action.payload
        },
        setSearchJobByText : (state , action) =>{
            state.searchJobByText = action.payload
        }
    }
})

export const {setAllJobs , setSingleJob , setAdminAllJobs , setSearchJobByText} = jobSlice.actions;
export default jobSlice.reducer;