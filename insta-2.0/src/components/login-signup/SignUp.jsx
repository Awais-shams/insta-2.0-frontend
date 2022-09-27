import React from "react";
import {
  Typography,
  Box,
  Paper,
  Grid,
  TextField,
  InputAdornment,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import logo from "../../assets/images/insta-logo.png";

const SignUp = () => {
  return (
    <>
      <Box
        sx={{
          margin: "auto",
          width: 700,
          height: 500,
          mt: 10,
        }}
      >
        <Paper elevation={2}>
          <img src={logo} alt="logo" style={{ width: 500, height: 200 }} />
          <Grid container spacing={2} sx={{ ml: 5, p: 5 }}>
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
                sx={{ width: 300 }}
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
                sx={{ width: 300 }}
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
                sx={{ width: 300 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PasswordIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default SignUp;
