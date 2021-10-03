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

function createData(id, itemname, itemimage) {
  return { id, itemname,itemimage };
}

const rows = [
  createData('1', 'Sample 1', 'N/A'),
  createData('2', 'Sample 2', 'N/A'),
  createData('3', 'Sample 3', 'N/A'),
  createData('4', 'Sample 4', 'N/A'),
  createData('5', 'Sample 5', 'N/A'),
];

const ItemTypes=(props)=>{
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
  <Typography color="text.primary">Items</Typography>
</Breadcrumbs>

    <div>
        <form>
            <div style={{marginTop: 8}}>
                <label>Item Type Name</label>
                <input type="text" placeholder="Item Name" style={{
                    color: 'black',
                    borderColor: '#ccc'
                }}></input>
            </div>
            <div style={{marginTop: 8}}> 
            <label>Item Type Image</label><br />
            <input type="file" placeholder="Item Image" style={{
                color: 'black',
                borderColor: '#ccc'
            }}></input><br />
            </div>

            <div style={{marginTop: 8, marginBottom: 20}}>
            <button>Save</button>
            </div>
        </form>
    </div>

            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Item Type Name</TableCell>
            <TableCell align="right">Item Type Image</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.itemname}</TableCell>
              <TableCell align="right">{row.itemimage}</TableCell>
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

export default ItemTypes;