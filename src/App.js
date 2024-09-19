// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ActivateService from './components/ActivateService';
import Bills from './components/Bills.jsx';
import PayBill from './components/PayBill';
import { ThemeProvider } from '@emotion/react';
import theme from './components/theme.jsx';
import { CssBaseline, Box, Typography } from '@mui/material';
import AdminLogin from './components/admin/AdminLogin.jsx';
import AdminBills from './components/admin/AdminBills.jsx';
import TelecomBill from './components/admin/TelecomBill.jsx';
import Chat from './components/Chat.jsx';
import AdminService from './components/admin/AdminService.jsx';
import AdminServiceForm from './components/admin/AdminServiceForm.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh', // Full screen height
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg,#f0f0f0 50%, #3f51b5  50%)',
          padding: '20px'
        }}
      >
        <Typography variant="h3" color="primary">
          SRI TELECOM
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          Your trusted partner in telecom services
        </Typography>

        <Router>
          <Routes>
          <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/services" element={<ActivateService />} />
            <Route path="/bills" element={<Bills />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-bills" element={<AdminBills/>} />
            <Route path="/telecom-bill" element={<TelecomBill/>} />
            <Route path="/admin-service" element={<AdminService/>} />
            <Route path="/admin-service-form" element={<AdminServiceForm/>} />
            <Route path="/chat/:id" element={<Chat/>} />
            {/* <Route path="/pay-bill" element={<PayBill />} /> */}
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
