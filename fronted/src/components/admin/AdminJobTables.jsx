
    import { Edit, Eye, MoreHorizontal } from 'lucide-react'
    import { Avatar, AvatarImage } from '../ui/avatar'
    import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
    import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
    import { useSelector } from 'react-redux'
    import { useEffect, useState } from 'react'
    import { useNavigate } from 'react-router-dom'
    import Job from '../Job'

    const AdminJobTables = () => {

        const { allAdminJob, searchJobByText } = useSelector(store => store.job)
        const [filterJobs, setFiterJobs] = useState(allAdminJob);
        const navigate = useNavigate();

        useEffect(() => {
            const filteredCompany = allAdminJob.length >= 0 && allAdminJob.filter((job) => {
                if (!searchJobByText) {
                    return true
                }
                return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase());
            });

            setFiterJobs(filteredCompany);

        }, [allAdminJob, searchJobByText])
        return (
            <div>
                <Table>

                    <TableCaption className='pt-4 '>A List of your recent posted jobs </TableCaption>

                    <TableHeader className='mt-4 pt-3'>
                        <TableRow>
                            <TableHead>Company Name</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className='text-right'>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {

                            filterJobs?.map((job) => (
                                <tr>

                                    <TableCell className='text-left'>
                                        {job?.company?.name}
                                    </TableCell>
                                    <TableCell className='text-left'>
                                        {job?.title}
                                    </TableCell>
                                    <TableCell>
                                        {job?.createdAt.split("T")[0]}
                                    </TableCell>
                                    <TableCell className='text-right cursor-pointer'>
                                        <Popover>
                                            <PopoverTrigger>< MoreHorizontal /></PopoverTrigger>
                                            <PopoverContent className='w-32'>
                                                <div onClick={() => navigate(`/admin/companies/${job._id}`)} className="flex items-center gap-2 w-fit cursor-pointer">
                                                    <Edit className='w-4' />
                                                    <span>Edit</span>
                                                </div>
                                                <div onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)} className='flex items-center w-fit gap-2 cursor-pointer'>
                                                    <Eye />
                                                    <span>Applicants</span>
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    </TableCell>
                                </tr>

                            ))
                        }


                    </TableBody>
                </Table>
            </div>
        )
    }

    export default AdminJobTables
