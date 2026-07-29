import React, { useState } from 'react'

import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpadateProfileDialog from './UpadateProfileDialog'
import { useSelector } from 'react-redux'


// const skills = ["java", "html", "css", "nodejs", "mongodb"];
 
const Profile = () => {
const {user} = useSelector(store => store.auth)

    const[open , setOpen] = useState(false);

    return (
        <>
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="https://static.vecteezy.com/system/resources/thumbnails/008/214/517/small_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg" />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>{user?.fullname}</h1>
                            <p>{user?.profile?.bio}</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} className="text-right" variant="outline"><Pen /></Button>
                </div>
                <div>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail />
                        <span>{user?.email}</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span>{user?.phoneNumber}</span>
                    </div>
                </div>
                <div className="my-5">
                    <h1>Skills</h1>
                    <div className="flex items-center gap-1">
                        {
                            user?.profile?.skills.length != 0 ? user?.profile?.skills.map((items, index) => <Badge key={index}>{items}</Badge>) : <span>NA</span>
                        }
                    </div>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1">
    <Label className='text-md font-bold'>Resume</Label>
    {
       <a 
    target='_blank' 
    href={`https://docs.google.com/viewer?url=${encodeURIComponent(user?.profile?.resume)}`} 
    className='text-blue-500 hover:underline cursor-pointer'
>
    {user?.profile?.resumeOriginalName || "View Resume"}
</a>
    }
</div>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl">
                <h1 className='text-bold text-lg'>Applied Jobs</h1>
                {/* Application table */}
                <hr className='mt-4 mb-3'/>
                <AppliedJobTable/>
            </div>
            <UpadateProfileDialog open={open} setOpen={setOpen}/>
        </div>
        
        </>
    )
}

export default Profile
