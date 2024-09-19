import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import axios from 'axios';
import Header from './Header';

const sampleBills = [
  { id: 1, description: 'January 2024 Bill', amount: 50.0, dueDate: '2024-02-01', status: 'Paid' },
  { id: 2, description: 'February 2024 Bill', amount: 60.0, dueDate: '2024-03-01', status: 'Unpaid' },
  { id: 3, description: 'March 2024 Bill', amount: 55.0, dueDate: '2024-04-01', status: 'Unpaid' },
  { id: 4, description: 'December 2023 Bill', amount: 40.0, dueDate: '2024-01-01', status: 'Paid' },
  { id: 5, description: 'November 2023 Bill', amount: 45.0, dueDate: '2023-12-01', status: 'Unpaid' },
  { id: 6, description: 'October 2023 Bill', amount: 38.0, dueDate: '2023-11-01', status: 'Paid' },
  { id: 7, description: 'September 2023 Bill', amount: 42.0, dueDate: '2023-10-01', status: 'Unpaid' },
];

function Bills() {
  const [bills, setBills] = useState(sampleBills);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const response = await axios.get('/api/billing/bills/1'); // Assuming userId = 1
        setBills(response.data || sampleBills);
      } catch (error) {
        console.error('Error fetching bills', error);
      }
    };
    fetchBills();
  }, []);

  const handlePayBill = async (billId) => {
    try {
      await axios.post('/api/billing/pay', { billId });
      alert('Bill paid successfully!');
      setBills((prevBills) =>
        prevBills.map((bill) =>
          bill.id === billId ? { ...bill, status: 'Paid' } : bill
        )
      );
    } catch (error) {
      console.error('Error paying bill', error);
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Header />
      <Typography variant="h4" gutterBottom align="left" color="primary" mt={2}>
        My Bills
      </Typography>
      <TableContainer component={Paper} sx={{ maxHeight: '400px' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell><Typography variant="h6">Bill ID</Typography></TableCell>
              <TableCell><Typography variant="h6">Description</Typography></TableCell>
              <TableCell><Typography variant="h6">Amount</Typography></TableCell>
              <TableCell><Typography variant="h6">Due Date</Typography></TableCell>
              <TableCell><Typography variant="h6">Status</Typography></TableCell>
              <TableCell align="center"><Typography variant="h6">Action</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bills.map((bill) => (
              <TableRow
                key={bill.id}
                sx={{
                  '&:hover': {
                    backgroundColor: '#f5f5f5', // Light grey on hover
                    cursor: 'pointer',
                  },
                }}
              >
                <TableCell>{bill.id}</TableCell>
                <TableCell>{bill.description}</TableCell>
                <TableCell>{`$${bill.amount.toFixed(2)}`}</TableCell>
                <TableCell>{bill.dueDate}</TableCell>
                <TableCell>
                  <Typography color={bill.status === 'Paid' ? 'success.main' : 'error.main'}>
                    {bill.status}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handlePayBill(bill.id)}
                    disabled={bill.status === 'Paid'}
                  >
                    {bill.status === 'Paid' ? 'Paid' : 'Pay Now'}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Bills;
