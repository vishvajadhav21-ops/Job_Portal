
import { Edit, Eye, MoreHorizontal } from 'lucide-react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Job from '../Job'

const CompaniesTable = () => {
    const { companies, searchCompanyByText } = useSelector(store => store.company);
    const [filterCompany, setFiterCompany] = useState(companies);
    const navigate = useNavigate();

    useEffect(() => {
        const filteredCompany = companies.length >= 0 && companies.filter((company) => {
            if (!searchCompanyByText) {
                return true
            }
            return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
        });

        setFiterCompany(filteredCompany);

    }, [companies, searchCompanyByText])
    return (
        <div>
            <Table>

                <TableCaption className='pt-4 '>A List of your recent registered</TableCaption>

                <TableHeader className='mt-4 pt-3'>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className='text-right'>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {

                        filterCompany?.map((company) => (
                            <tr>

                                <Avatar>
                                    <AvatarImage className='h-12 w-12 ' src={company.logo} />
                                </Avatar>

                                <TableCell className='text-left'>
                                    {company.name}
                                </TableCell>
                                <TableCell>
                                    {company.createdAt.split("T")[0]}
                                </TableCell>
                                <TableCell className='text-right cursor-pointer'>
                                    <Popover>
                                        <PopoverTrigger>< MoreHorizontal /></PopoverTrigger>
                                        <PopoverContent className='w-32'>
                                            <div onClick={() => navigate(`/admin/companies/${company._id}`)} className="flex items-center gap-2 w-fit cursor-pointer">
                                                <Edit className='w-4' />
                                                <span>Edit</span>
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

export default CompaniesTable
