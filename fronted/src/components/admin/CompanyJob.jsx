import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import AdminJobTables from './AdminJobTables'
import useGetAdminAllJob from '../../hooks/useGetAdminAllJob'
import { setSearchJobByText } from '../redux/jobSlice'

const CompanyJob = () => {
    useGetAdminAllJob();
 
  const[input , setInput] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() =>{
    dispatch(setSearchJobByText(input))
    }, [input])
  return (
    <div>
      <Navbar/>
      <div className="max-w-6xl mx-auto my-10">
        <div className="flex item-center justify-between">
            <Input
            className='w-fit p-2 text-slate-950 border border-black'
            placeholder='Filter by name'
            onChange={(e)=>setInput(e.target.value)}
            />
            <Button className='p-2 bg-slate-700 text-white border-none' onClick={() => navigate("/admin/jobs/post")}>New Jobs</Button>
        </div>
        <AdminJobTables/>
      </div>
    </div>
  )
}

export default CompanyJob
