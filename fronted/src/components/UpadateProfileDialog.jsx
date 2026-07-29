import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Loader2, X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from './utils/constant'
import { setUser } from './redux/authSlice'
import { toast } from 'sonner'

const UpadateProfileDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    const { user } = useSelector(store => store.auth)
    const dispatch = useDispatch()

    const [input, setInput] = useState({
        fullname: user?.fullname,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
        bio: user?.profile?.bio,
        skills: user?.profile?.skills?.map(skill => skill),
        file: user?.profile?.resume
    })

    const eventChangeHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const fileChangeHandler = (e) => {
        const file = e.target.files?.[0];
        setInput({ ...input, file })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        
        setLoading(true)  // ✅ Bug 3 Fixed

        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("bio", input.bio);
        formData.append("skills", input.skills);
        if (input.file) {
            formData.append("file", input.file)
        }

        try {
            const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                withCredentials: true
            })
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                toast.success(res.data.message)
                setOpen(false)  // ✅ Only close on success
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)  // ✅ Bug 2 Fixed
        } finally {
            setLoading(false)  // ✅ Bug 3 Fixed
            console.log(input);
            
        }
    }

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black bg-opacity-50"
                onClick={() => setOpen(false)}
            />
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-6 z-10">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Update Profile</h2>
                    <button
                        onClick={() => setOpen(false)}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <X size={20} />
                    </button>
                </div>

                <hr className="mb-4" />

                <form onSubmit={submitHandler}>
                    <div className="grid gap-4">

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right">Name</Label>
                            <Input
                                name="fullname"  // ✅ Bug 1 Fixed
                                className="col-span-3"
                                placeholder="Your name"
                                value={input.fullname}
                                onChange={eventChangeHandler}
                            />
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right">Email</Label>
                            <Input
                                name="email"
                                type="email"
                                className="col-span-3"
                                placeholder="Your email"
                                value={input.email}
                                onChange={eventChangeHandler}
                            />
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right">Number</Label>
                            <Input
                                name="phoneNumber"  // ✅ Bug 1 Fixed
                                className="col-span-3"
                                placeholder="Your number"
                                value={input.phoneNumber}
                                onChange={eventChangeHandler}
                            />
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right">Bio</Label>
                            <Input
                                name="bio"
                                className="col-span-3"
                                placeholder="Your bio"
                                value={input.bio}
                                onChange={eventChangeHandler}
                            />
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right">Skills</Label>
                            <Input
                                name="skills"
                                className="col-span-3"
                                placeholder="e.g. React, Node"
                                value={input.skills}
                                onChange={eventChangeHandler}
                            />
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right">Resume</Label>
                            <Input
                                name="file"
                                type="file"
                                accept="application/pdf"
                                className="col-span-3"
                                onChange={fileChangeHandler}
                            />
                        </div>

                    </div>

                    <div className="mt-6">
                        {loading ? (
                            <Button type="button" disabled className="w-full bg-black text-white">
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Please wait...
                            </Button>
                        ) : (
                            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                                Update
                            </Button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpadateProfileDialog