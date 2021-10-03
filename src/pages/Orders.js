import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import TextField from '@mui/material/TextField';

function createData(name, itemtypename, itemtypeimage, itemcount) {
  return { name, itemtypename, itemtypeimage, itemcount };
}

const rows = [
  createData('1', 'Sample 1', 'N/A', '5'),
  createData('2', 'Sample 2', 'N/A', '9'),
  createData('3', 'Sample 3', 'N/A', '1'),
  createData('4', 'Sample 4', 'N/A', '4'),
  createData('5', 'Sample 5', 'N/A', '8'),
];

const Orders=(props)=>{
    return (
        <DashboardLayout>
            <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    underline="hover"
                    color="inherit"
                >
                    Dashboard
                </Link>
                <Typography color="text.primary">Orders</Typography>
            3</Breadcrumbs>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">Item Type Name</TableCell>
                        <TableCell align="right">Item Type Image</TableCell>
                        <TableCell align="right">Item Count</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.itemtypename}</TableCell>
                        <TableCell align="right">{row.itemtypeimage}</TableCell>
                        <TableCell align="right">{row.itemcount}</TableCell>
                        <TableCell align="right">
                            <button>Edit</button>
                            <button>Delete</button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        </DashboardLayout>
    );
}

export default Orders;