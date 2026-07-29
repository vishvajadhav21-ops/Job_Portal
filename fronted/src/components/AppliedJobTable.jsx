import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Badge } from './ui/badge'

const AppliedJobTable = () => {
    return (
        <div>
            <Table>
                {/* <TableCaption>A list of your applied jobs</TableCaption> */}
                <TableHeader>
                    <TableRow className='mt-2'>
                        <TableHead className="text-left ">Date</TableHead>
                        <TableHead className="text-left">Job Role</TableHead>
                        <TableHead className='text-left'>Company</TableHead>
                        <TableHead className="text-left">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        [1, 2].map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className='text-left'>17-07-2024</TableCell>
                                <TableCell className='text-left'>Frontend Developer</TableCell>
                                <TableCell className='text-left'>TCS</TableCell>
                                <TableCell className="text-left"><Badge>Selected</Badge></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AppliedJobTable