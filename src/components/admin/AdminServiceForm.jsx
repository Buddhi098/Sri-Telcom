import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Snackbar,
  Stack,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import AdminHeader from "./AdminHeader";


const initialServices = [
  {
    id: 1,
    name: "International Roaming",
    description: "Activate international roaming when abroad.",
    isActive: false,
    serviceCharge: 10,
  },
  {
    id: 2,
    name: "Ring-in Tone Personalisation",
    description: "Personalize your ring-in tone.",
    isActive: false,
    serviceCharge: 5,
  },
  // Other existing services...
];

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function AdminServiceForm() {
  const [services, setServices] = useState(initialServices);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [serviceCharge, setServiceCharge] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !serviceCharge) {
      alert("Please fill in all fields");
      return;
    }

    const newService = {
      id: services.length + 1, // Generate a new ID
      name,
      description,
      isActive: false,
      serviceCharge: parseFloat(serviceCharge),
    };

    setServices([...services, newService]);
    setOpenSnackbar(true);
    setName("");
    setDescription("");
    setServiceCharge("");
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Stack sx={{width:"80vw"}}>
      <AdminHeader />
      <Container sx={{ mt: 4, background: "white"  }}>
        <Typography
          variant="h4"
          gutterBottom
          align="left"
          color="primary"
          mt={2}
        >
          Create New Service
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 2, mb: 2}}
        >
          <TextField
            label="Service Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            label="Service Charge"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            value={serviceCharge}
            onChange={(e) => setServiceCharge(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Add Service
          </Button>
        </Box>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity="success">
            Service added successfully!
          </Alert>
        </Snackbar>
      </Container>
    </Stack>
  );
}

export default AdminServiceForm;
