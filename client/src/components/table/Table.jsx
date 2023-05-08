import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Table.css"
function createData(name, roomnumber, price, checkin, checkout, status) {
    return { name, roomnumber, price, checkin, checkout, status };
}

const rows = [
  createData('La Vela Saigon Hotel', 159, 1000, "11/1/2023", "11/1/2023", "success"),
  createData('La Vela Saigon Hotel', 159, 1000, "11/1/2023", "11/1/2023", "success"),
  createData('La Vela Saigon Hotel', 159, 1000, "11/1/2023", "11/1/2023", "success"),
  createData('La Vela Saigon Hotel', 159, 1000, "11/1/2023", "11/1/2023", "success"),
  createData('La Vela Saigon Hotel', 159, 1000, "11/1/2023", "11/1/2023", "success"),
];

export default function BasicTable() {
  return (
    <div className='BookingTable'>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}              >Hotel Name</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }} align="center">Room Number</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }} align="middle">Price</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }} align="middle">Check in</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }} align="middle">Check out</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }} align="center">Status</TableCell>
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
                        <TableCell align="center">{row.roomnumber}</TableCell>
                        <TableCell align="middle">{row.price}</TableCell>
                        <TableCell align="middle">{row.checkin}</TableCell>
                        <TableCell align="center">{row.checkout}</TableCell>
                        <TableCell className='Status' sx={{ fontWeight: 'bold', bgcolor: 'success.main', color: 'primary.contrastText' }} align="right">{row.status}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  );
}