import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Card, CardContent, Box, Link, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminLogin() {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      const response = await axios.post('/api/admin/login', loginData);
      alert('Login successful!');
      navigate('/admin/dashboard'); // Redirect to admin dashboard
    } catch (error) {
      setErrorMessage('Login failed. Please check your username and password.');
    }
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
      }}
    >
      <Card sx={{ width: '400px', boxShadow: 3, borderRadius: '12px' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center" color="primary">
            Admin Login
          </Typography>
          {errorMessage && (
            <Typography variant="body2" color="error" align="center">
              {errorMessage}
            </Typography>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              name="username"
              value={loginData.username}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
              sx={{ bgcolor: 'white', borderRadius: '5px' }}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={loginData.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
              sx={{ bgcolor: 'white', borderRadius: '5px' }}
            />
            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <Button variant="contained" color="primary" type="submit" fullWidth sx={{ borderRadius: '5px' }}>
                Login
              </Button>
            </Box>
          </form>
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Typography variant="body2">
              Forgot your password?{' '}
              <Link component="button" variant="body2" color="primary" onClick={() => navigate('/admin/reset-password')}>
                Reset it here
              </Link>
            </Typography>
          </Box>
          {/* <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Typography variant="body2">
              Don't have an account?{' '}
              <Link component="button" variant="body2" color="primary" onClick={() => navigate('/admin/register')}>
                Register here
              </Link>
            </Typography>
          </Box> */}
        </CardContent>
      </Card>
    </Container>
  );
}

export default AdminLogin;
