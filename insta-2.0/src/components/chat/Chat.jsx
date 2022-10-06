// import React, { useState, useEffect } from "react";
// import io from "socket.io-client";
// import { Box, Typography, TextField, Button } from "@mui/material";

// const socket = io("http://localhost:3000");

// const Chat = () => {
//   const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);

//   const sendChat = (event) => {
//     event.preventDefault();
//     socket.emit("chat", { message });
//     setMessage("");
//     console.log("i am awais shams");
//   };

//   useEffect(() => {
//     socket.on("chat", (payload) => {
//       setChat([...chat, payload]);
//     });
//   });

//   return (
//     <Box sx={{ mt: 10 }}>
//       <Typography variant="h4">Insta Chat Application</Typography>

//       <form onSubmit={sendChat}>
//         <TextField
//           name="chat"
//           id="chat"
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />

//         <Button variant="contained" type="submit">
//           Send
//         </Button>
//       </form>
//       {chat?.map((payload, idx) => {
//         return <p key={idx}>{`idx:${idx} message: ${payload.message}`}</p>;
//       })}
//     </Box>
//   );
// };

// export default Chat;

import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@mui/icons-material/Send";
import ThreePIcon from "@mui/icons-material/ThreeP";

import Avatars from "../stories/Avatars.js";

import {
  Paper,
  Grid,
  Box,
  Divider,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Avatar,
  Fab,
  Chip,
  Stack,
  ListItemAvatar,
  IconButton,
  InputAdornment,
} from "@mui/material";

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
//   chatSection: {
//     width: "100%",
//     height: "80vh",
//   },
//   headBG: {
//     backgroundColor: "#e0e0e0",
//   },
//   borderRight500: {
//     borderRight: "1px solid #e0e0e0",
//   },
//   messageArea: {
//     height: "70vh",
//     overflowY: "auto",
//   },
// });

const Chat = () => {
  // const classes = useStyles();

  const users = ["Awais Shams", "Moshin Hassan", "Maaz Ashraf", "Talha Balaj"];

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
          <Typography variant="h5" sx={{ fontWeight: 700, ml: 10, mt: 2 }}>
            Insta-Chat
          </Typography>
          <Divider />
        </Stack>
        {users.map((user, idx) => {
          return (
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <ListItem>
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
            sx={{ ml: 2, mt: 2 }}
          >
            <Avatar src={Avatars[1]} />
            <Typography variant="h5" sx={{ fontWeight: 700, ml: 10, mt: 2 }}>
              Awais Shams
            </Typography>
          </Stack>
          <Divider />
        </Stack>
        <Grid
          container
          sx={{
            border: 1,
            p: 2,
          }}
        >
          <Grid item>
            <Typography variant="body1">Hey, How are you</Typography>
            <Typography variant="body1">I'm good, what about you</Typography>
          </Grid>
        </Grid>
        <Stack sx={{ mt: 78.5 }}>
          <TextField
            // sx={{ width: 1150 }}
            variant="filled"
            id="message"
            name="message"
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
        </Stack>
      </Box>
    </Box>
  );
};

export default Chat;
