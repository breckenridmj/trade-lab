import React from 'react'
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';

function createData(TIMESTAMP: string, PRICE: number, SIZE: number, SENTIMENT: string, VALUE: string) {
    return { TIMESTAMP, PRICE, SIZE, SENTIMENT, VALUE };
  }

const DarkPool = () => {
    
    
    const rows = [
        createData('09:48:15 AM', 438.86, 2544413, 'Above Ask', '$111,576,993.52'),
        createData('09:48:15 AM', 438.86, 2544413, 'Above Ask', '$111,576,993.52'),
        createData('09:48:15 AM', 438.86, 2544413, 'Above Ask', '$111,576,993.52'),
        createData('09:48:15 AM', 438.86, 2544413, 'Above Ask', '$111,576,993.52'),
        createData('09:48:15 AM', 438.86, 2544413, 'Above Ask', '$111,576,993.52'),
      ];


    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>TIMESTAMP</TableCell>
                            <TableCell align="right">PRICE</TableCell>
                            <TableCell align="right">SIZE&nbsp;</TableCell>
                            <TableCell align="right">SENTIMENT&nbsp;</TableCell>
                            <TableCell align="right">VALUE&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.TIMESTAMP}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.TIMESTAMP}
                                </TableCell>
                                <TableCell align="right">{row.PRICE}</TableCell>
                                <TableCell align="right">{row.SIZE}</TableCell>
                                <TableCell align="right">{row.SENTIMENT}</TableCell>
                                <TableCell align="right">{row.VALUE}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default DarkPool;