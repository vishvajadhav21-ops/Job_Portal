import Navbar from "../shared/Navbar"
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";

import { toast } from 'sonner'
import { useDispatch, useSelector } from "react-redux";
import { setLoading  , setUser} from "../redux/authSlice";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    role: "",
    password: ""
  })

  const { loading } = useSelector(store => store.auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })

      if (res.data.success) {
             dispatch(setUser(res.data.user))
        toast.success(res.data.message)
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    } finally {
      dispatch(setLoading(false));
    }
  }
  return (
    <div className="bg-slate-100 min-h-screen">
      <Navbar />

      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form onSubmit={submitHandler} className="w-1/2 border border-gray-300 rounded-md p-6 my-6 bg-white shadow">

          <h1 className="font-bold text-2xl mb-3 text-center">Login</h1>

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
                    checked={input.role === 'student'}
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
                    checked={input.role === 'recruiter'}
                    onChange={changeEventHandler}
                    className="accent-blue-600 w-4 h-4"
                  />
                  Recruiter
                </label>
              </div> 
            </div>

          </div>

          {/* Submit Button */}

          {
    loading 
    ? (
        <Button 
            type="button"
            disabled
            className="w-full mt-6 bg-black text-white hover:bg-gray-800 p-2"
        >
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait...
        </Button>
    ) 
    : (
        <Button
            type="submit"
            className="w-full mt-6 bg-black text-white hover:bg-gray-800 p-2"
        >
            Login
        </Button>
    )
}


          <span>Don't have an account? <Link to="/signup" className="text-blue-700 pt-2">SignUp</Link></span>

        </form>
      </div>

    </div>
  )
}

export default Login;