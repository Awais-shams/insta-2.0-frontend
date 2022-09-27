import React from "react";
import {
  Typography,
  Box,
  Paper,
  Grid,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";

import logo from "../../assets/images/insta-logo.png";

const SignUp = () => {
  return (
    <Paper
      elevation={24}
      sx={{
        margin: "auto",
        width: "70vw",
        height: "80vh",
        mt: 10,
      }}
    >
      <Box sx={{ ml: 30 }}>
        <img src={logo} alt="logo" style={{ width: 500, height: 200 }} />
      </Box>
      <Grid container spacing={4} sx={{ ml: 30 }}>
        <Grid item lg={12}>
          <Typography variant="h3" sx={{ color: "primary.main" }}>
            Signup
          </Typography>
        </Grid>
        <Grid item lg={12}>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            sx={{ width: 440 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item lg={12}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            sx={{ width: 440 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item lg={12}>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            sx={{ width: 440 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PasswordIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item lg={12} sx={{ ml: 15 }}>
          <Button variant="contained" sx={{ width: 200, height: 50 }}>
            <Typography variant="h6">Sign up</Typography>
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SignUp;
