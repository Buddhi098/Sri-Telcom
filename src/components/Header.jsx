import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2', padding: '5px' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          USER DASHBOARD
        </Typography>
        <Box>
          <Button
            color="inherit"
            onClick={() => navigate('/services')}
            sx={{ marginRight: '15px', fontWeight: 'bold' }}
          >
            Service
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate('/bills')}
            sx={{ fontWeight: 'bold' }}
          >
            Bill
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate('/chat/user')}
            sx={{ fontWeight: 'bold' }}
          >
            Chat
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
