import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Card, CardContent, Box, Autocomplete } from '@mui/material';
import AdminHeader from './AdminHeader';

const mockEmails = [
  'user1@example.com',
  'user2@example.com',
  'user3@example.com',
  'admin@example.com',
  'support@example.com'
];

function TelecomBill() {
  const [billData, setBillData] = useState({
    description: '',
    amount: '',
    dueDate: '',
    userEmail: ''
  });

  const handleChange = (e) => {
    setBillData({ ...billData, [e.target.name]: e.target.value });
  };

  const handleEmailChange = (event, newValue) => {
    setBillData({ ...billData, userEmail: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Bill Data:', billData);
    alert('Bill submitted successfully!');
    setBillData({ description: '', amount: '', dueDate: '', userEmail: '' }); // Clear form
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        backgroundColor: 'transparent', // Light background color
      }}
    >
      <Card sx={{ width: '800px', boxShadow: 3, borderRadius: '12px' }}>
      <AdminHeader/>
        <CardContent>
          <Typography variant="h5" gutterBottom align="center" color="primary">
            Telecom Bill
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Description"
              name="description"
              value={billData.description}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
              sx={{ bgcolor: 'white', borderRadius: '5px' }}
            />
            <TextField
              label="Amount"
              name="amount"
              type="number"
              value={billData.amount}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
              sx={{ bgcolor: 'white', borderRadius: '5px' }}
            />
            <TextField
              label="Due Date"
              name="dueDate"
              type="date"
              value={billData.dueDate}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
              sx={{ bgcolor: 'white', borderRadius: '5px' }}
            />
            <Autocomplete
              options={mockEmails}
              onChange={handleEmailChange}
              renderInput={(params) => (
                <TextField {...params} label="User Email" variant="outlined" required sx={{ bgcolor: 'white', borderRadius: '5px' }} />
              )}
            />
            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <Button variant="contained" color="primary" type="submit" fullWidth sx={{ borderRadius: '5px' }}>
                Submit Bill
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default TelecomBill;
