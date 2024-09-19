import React, { useState } from 'react';
import { Container, Typography, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import axios from 'axios';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Header from './Header';

const initialServices = [
  { id: 1, name: 'International Roaming', description: 'Activate international roaming when abroad.', isActive: false, serviceCharge: 10 },
  { id: 2, name: 'Ring-in Tone Personalisation', description: 'Personalize your ring-in tone.', isActive: false, serviceCharge: 5 },
  { id: 3, name: 'Data Top-ups', description: 'Get additional data packs.', isActive: false, serviceCharge: 15 },
  { id: 4, name: 'Value Added Services', description: 'Activate VAS for extra features.', isActive: false, serviceCharge: 20 },
  // Add more services as needed...
];

function ActivateService() {
  const [services, setServices] = useState(initialServices);

  const handleToggleService = async (service) => {
    const updatedServices = services.map((s) =>
      s.id === service.id ? { ...s, isActive: !s.isActive } : s
    );
    setServices(updatedServices);

    try {
      if (service.isActive) {
        await axios.post('/api/services/deactivate', { userId: 1, serviceName: service.name });
        alert(`${service.name} deactivated.`);
      } else {
        await axios.post('/api/services/activate', { userId: 1, serviceName: service.name });
        alert(`${service.name} activated.`);
      }
    } catch (error) {
      console.error('Error activating/deactivating service', error);
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Header />
      <Typography variant="h4" gutterBottom align="left" color="primary" mt={2}>
        Manage Services
      </Typography>
      <TableContainer component={Paper} sx={{ maxHeight: '400px' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell><Typography variant="h6">Service Name</Typography></TableCell>
              <TableCell><Typography variant="h6">Description</Typography></TableCell>
              <TableCell><Typography variant="h6">Service Charge</Typography></TableCell>
              <TableCell><Typography variant="h6">Status</Typography></TableCell>
              <TableCell align="center"><Typography variant="h6">Toggle</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map((service) => (
              <TableRow
                key={service.id}
                sx={{
                  '&:hover': {
                    backgroundColor: '#f5f5f5', // Light grey on hover
                    cursor: 'pointer',
                  },
                }}
              >
                <TableCell>{service.name}</TableCell>
                <TableCell>{service.description}</TableCell>
                <TableCell>${service.serviceCharge}</TableCell> {/* Added Service Charge Column */}
                <TableCell>
                  {service.isActive ? (
                    <IconButton color="success">
                      <CheckCircleIcon />
                    </IconButton>
                  ) : (
                    <IconButton color="error">
                      <CancelIcon />
                    </IconButton>
                  )}
                </TableCell>
                <TableCell align="center">
                  <Switch
                    checked={service.isActive}
                    onChange={() => handleToggleService(service)}
                    color="primary"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default ActivateService;
