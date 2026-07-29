import Navbar from "../shared/Navbar"
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { USER_API_END_POINT } from "../utils/constant";
import axios from "axios";

import {toast} from 'sonner'

const Signup = () => {

  const [input , setInput] = useState({
    fullname : "",
    email :"",
    phoneNumber : "",
    password :"",
    role : "",
    file : ""
  })

const navigate = useNavigate();

  const changeEventHandler = (e) =>{
    setInput({...input , [e.target.name] : e.target.value});
  }

  const changeFileHandler = (e) =>{
    setInput({...input , file : e.target.files?.[0]});
  }

  const submitHandler = async (e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname" , input.fullname);
    formData.append("email" , input.email);
    formData.append("phoneNumber" , input.phoneNumber);
    formData.append("password" , input.password);
    formData.append("role" , input.role);
    if(input.file){
      formData.append("file" , input.file);
    }

    try {
      const res = await axios.post(`${USER_API_END_POINT}/register` , formData, {
          headers :{
            "Content-Type" : "multipart/form-data"
          },
          withCredentials : true 
      })

      if(res.data.success){
       navigate("/login");
       toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className="bg-slate-100 min-h-screen">
      <Navbar />

      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form onSubmit={submitHandler} className="w-1/2 border border-gray-300 rounded-md p-6 my-6 bg-white shadow">

          <h1 className="font-bold text-2xl mb-3 text-center">Sign Up</h1>

          <div className="mb-3 ">
            <Label>Full Name</Label>
            <Input
              className="w-full mt-2 p-2 border rounded-1"
              type="text"
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
              placeholder="Patel"
            />
          </div>

          <div className="mb-3">
            <Label>Email</Label>
            <Input
              className="w-full mt-2 p-2 border rounded-1"
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="patel123@gmail.com"
            />
          </div>

          <div className="mb-3">
            <Label>Phone No</Label>
            <Input
              className="w-full mt-2  p-2 border rounded-1 "
              type="number"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              placeholder="9856445362"
            />
          </div>

          <div className="mb-3">
            <Label>Password</Label>
            <Input
              className="w-full mt-2  p-2 border rounded-1"
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="Patel@123"
            />
          </div>

          {/* Radio + Profile in one row */}
          <div className="flex items-center justify-between mt-6">

            {/* Radio Buttons */}
            <div>
              <Label className="block mb-2">Register As</Label>

              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="student"
                    checked ={input.role === 'student'}
                    onChange={changeEventHandler}
                    className="accent-blue-600 w-4 h-4"
                  />
                  Student
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="recruiter"
                      checked ={input.role === 'recruiter'}
                    onChange={changeEventHandler}
                    className="accent-blue-600 w-4 h-4"
                  />
                  Recruiter
                </label>
              </div>
            </div>

            {/* Profile Upload */}
            <div className="flex items-center gap-3 mt-7">
              <Label>Profile</Label>
              <input
                type="file"
                accept="image/*"
                onChange={changeFileHandler}
                className="cursor-pointer "
              />
            </div>

          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full mt-6 bg-black text-white hover:bg-gray-800  p-2 border rounded-1"
          >
            Sign Up
          </Button>
          <span>Already have an account? <Link to= "/login" className="text-blue-700 pt-2">Login</Link></span>

        </form>
      </div>

    </div>
  )
}

export default Signup