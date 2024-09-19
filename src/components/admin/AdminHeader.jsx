import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AdminHeader() {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#1976d2", padding: "5px" }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          ADMIN DASHBOARD
        </Typography>
        <Box>
          <Button
            color="inherit"
            onClick={() => navigate("/admin-bills")}
            sx={{ marginRight: "15px", fontWeight: "bold" }}
          >
            Bill
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate("/admin-service")}
            sx={{ marginRight: "15px", fontWeight: "bold" }}
          >
            Service
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate("/chat/admin")}
            sx={{ fontWeight: "bold" }}
          >
            Chat
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default AdminHeader;
