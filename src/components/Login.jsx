import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Card, CardContent, Box, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/users/login', loginData);
      alert('Login successful!');
    } catch (error) {
      alert('Login failed.');
    }
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        backgroundColor: 'transparent', // Light background color for the page
      }}
    >
      <Card sx={{ width: '400px', padding: '20px'}}>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center" color="primary">
            Login
          </Typography>
          <TextField
            label="Username"
            name="username"
            value={loginData.username}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
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
          />
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
              Login
            </Button>
          </Box>
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Typography variant="body1">
              Don't have an account?{' '}
              <Link
                component="button"
                variant="body1"
                color="primary"
                onClick={() => navigate('/register')}
              >
                Register here
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Login;
