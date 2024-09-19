import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Card, CardContent, Box, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (userData.password !== userData.confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    try {
      await axios.post('/api/users/register', {
        username: userData.username,
        email: userData.email,
        password: userData.password,
      });
      alert('User registered successfully!');
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      alert('Error registering user.');
    }
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '78vh',

        backgroundColor: 'transparent', 
      }}
    >
      <Card sx={{ width: '400px', padding: '20px' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center" color="primary">
            Register
          </Typography>
          <TextField
            label="Username"
            name="username"
            value={userData.username}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={userData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={userData.confirmPassword}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
              Register
            </Button>
          </Box>
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Typography variant="body1">
              Already have an account?{' '}
              <Link
                component="button"
                variant="body1"
                color="primary"
                onClick={() => navigate('/login')}
              >
                Login here
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Register;
