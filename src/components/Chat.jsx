import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Avatar,
  Divider,
  Stack,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AdminHeader from "./admin/AdminHeader";
import Header from "./Header";

const ChatUI = () => {
  const { id } = useParams(); // Extract the id from the URL
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Sample contact list
  const contacts = [
    { name: "Alice", id: "1" },
    { name: "Bob", id: "2" },
    { name: "Charlie", id: "3" },
    { name: "David", id: "4" },
  ];

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "You" }]);
      setInputValue(""); // Clear the input field
    }
  };

  return (
    <Stack sx={{ width: "75vw" }}>
      {id == "admin" && <AdminHeader />}
      {id == "user" && <Header />}
      <Container
        sx={{
          display: "flex",
          height: "70vh",
          bgcolor: "transparent",
          borderRadius: "8px",
        }}
      >
        {/* Left Sidebar for Contacts */}
        {id == "admin" && (
          <Paper
            sx={{
              width: "250px",
              height: "56vh",
              bgcolor: "#fff",
              borderRadius: "8px",
              boxShadow: 1,
              p: 1,
              marginTop: "15px",
              overflowY: "auto",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Contacts
            </Typography>
            <Divider />
            <List>
              {contacts.map((contact) => (
                <ListItem button key={contact.id}>
                  <Avatar sx={{ bgcolor: "primary.main", mr: 1 }}>
                    {contact.name[0]}
                  </Avatar>
                  <ListItemText primary={contact.name} />
                </ListItem>
              ))}
            </List>
          </Paper>
        )}

        {/* Main Chat Area */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            ml: 2,
            p: 2,
          }}
        >
          <Paper
            sx={{
              flexGrow: 1,
              bgcolor: "#fff",
              borderRadius: "8px",
              p: 2,
              overflowY: "auto",
              boxShadow: 1,
            }}
          >
            <List>
              {messages.map((message, index) => (
                <ListItem key={index} sx={{ mb: 1, alignItems: "flex-start" }}>
                  <Avatar sx={{ bgcolor: "primary.main", mr: 1 }}>
                    {message.sender[0]}
                  </Avatar>
                  <ListItemText
                    primary={message.text}
                    primaryTypographyProps={{
                      sx: { bgcolor: "#e3f2fd", p: 1, borderRadius: "10px" },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
          <Box sx={{ display: "flex", mt: 2 }}>
            <TextField
              label="Type your message"
              variant="outlined"
              fullWidth
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
              sx={{ bgcolor: "#fff", borderRadius: "5px" }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSendMessage}
              sx={{ ml: 1, borderRadius: "5px" }}
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Container>
    </Stack>
  );
};

export default ChatUI;
