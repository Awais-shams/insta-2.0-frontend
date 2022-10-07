import React, { useState, useEffect } from "react";
import io from "socket.io-client";

import SendIcon from "@mui/icons-material/Send";
import CallIcon from "@mui/icons-material/Call";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import ThreePIcon from "@mui/icons-material/ThreeP";

import Avatars from "../stories/Avatars.js";

import {
  Paper,
  Box,
  Divider,
  TextField,
  Typography,
  ListItem,
  ListItemText,
  ListItemButton,
  Avatar,
  List,
  Stack,
  ListItemAvatar,
  IconButton,
  InputAdornment,
} from "@mui/material";

const socket = io.connect("http://localhost:3000");

const Chat = () => {
  const users = ["Awais Shams", "Moshin Hassan", "Maaz Ashraf", "Talha Balaj"];

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendChat = (event) => {
    event.preventDefault();
    socket.emit("chat", { message });
    setMessage("");
  };

  useEffect(() => {
    socket.on("chatResponse", (msg) => {
      setChat([...chat, msg]);
    });
  }, [socket, chat]);

  return (
    <Box
      sx={{
        margin: "auto",
        mt: 10,
        height: 750,
        width: 1450,
        borderTop: 1,
        borderLeft: 1,
        borderRight: 1,
        borderColor: " #CFD2CF",
      }}
      component={Paper}
      display="flex"
    >
      <Box
        sx={{
          width: 300,
          height: 750,
          borderRight: 1,
          borderColor: " #CFD2CF",
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h5" sx={{ fontWeight: 700, ml: 9, mt: 2 }}>
            Insta-Chat <ThreePIcon />
          </Typography>
          <Divider />
        </Stack>
        {users.map((user, idx) => {
          return (
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              key={idx}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar src={Avatars[idx]} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={user}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Active
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
            </List>
          );
        })}
      </Box>
      <Box
        sx={{
          width: 1150,
          height: 750,
          borderRight: 1,
          borderColor: " #CFD2CF",
          display: "block",
        }}
      >
        <Stack spacing={1}>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{ ml: 2, mt: 2, mr: 3 }}
            justifyContent="space-between"
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar src={Avatars[1]} />
              <Typography variant="h5" sx={{ fontWeight: 700, ml: 10, mt: 2 }}>
                Awais Shams
              </Typography>
            </Stack>

            <Stack direction="row-reverse" spacing={2} alignItems="center">
              <VideoCallIcon />
              <CallIcon />
            </Stack>
          </Stack>
          <Divider />
        </Stack>
        <Stack direction="column" sx={{ height: 630, ml: 1 }}>
          <List style={{ maxHeight: "100%", overflow: "auto" }}>
            {chat.map((data) => {
              return (
                <ListItem key={data.id}>
                  <ListItemAvatar>
                    <Avatar src={Avatars[0]} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`ID:${socket.id} ${data.message}`}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {data.time}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </Stack>
        <Stack>
          <form onSubmit={sendChat}>
            <TextField
              fullWidth
              variant="filled"
              name="chat"
              id="chat"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              label="Type here.."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      color="primary"
                      aria-label="send-message"
                      component="label"
                    >
                      <input hidden type="submit" />
                      <SendIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </form>
        </Stack>
      </Box>
    </Box>
  );
};

export default Chat;
