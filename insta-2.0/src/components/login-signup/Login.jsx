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

import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";

import logo from "../../assets/images/insta-logo.png";

import { useFormik } from "formik";
import * as Yup from "yup";

import { Link } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const onSubmit = (values) => {
  console.log(values);
};

const Login = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Paper
      elevation={24}
      sx={{
        margin: "auto",
        width: "70vw",
        height: "80vh",
        mt: 10,
        borderRadius: 10,
        boxShadow: 3,
      }}
    >
      <Box sx={{ ml: 30 }}>
        <img src={logo} alt="logo" style={{ width: 500, height: 200 }} />
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} sx={{ ml: 30 }}>
          <Grid item lg={12}>
            <Typography variant="h3" sx={{ color: "primary.main" }}>
              Login
            </Typography>
          </Grid>

          <Grid item lg={12}>
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
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
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
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
          <Grid item lg={12}>
            <Typography variant="body1" component="span">
              Don't have an account?{" "}
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <span style={{ color: "#000000" }}>Signup</span>
              </Link>
            </Typography>
          </Grid>
          <Grid item lg={12} sx={{ ml: 15 }}>
            <Button
              variant="contained"
              sx={{ width: 200, height: 50 }}
              type="submit"
            >
              <Typography variant="h6">Login</Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Login;
