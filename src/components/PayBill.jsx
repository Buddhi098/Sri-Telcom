// PayBill.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

function PayBill() {
  const [paymentData, setPaymentData] = useState({ billId: '', amount: '', paymentMethod: '' });

  const handleChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    try {
      await axios.post('/api/billing/pay', paymentData);
      alert('Payment successful!');
    } catch (error) {
      alert('Payment failed.');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Pay Bill
      </Typography>
      <TextField
        label="Bill ID"
        name="billId"
        value={paymentData.billId}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Amount"
        name="amount"
        value={paymentData.amount}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Payment Method"
        name="paymentMethod"
        value={paymentData.paymentMethod}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handlePayment}>
        Pay Bill
      </Button>
    </Container>
  );
}

export default PayBill;
