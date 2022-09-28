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

import { Link } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const initialValues = {
  Name: "",
  Email: "",
  Password: "",
};

const validationSchema = Yup.object({
  Name: Yup.string().required("Required").min(5).max(20),
  Email: Yup.string().email().required(),
  Password: Yup.string()
    .required()
    .minLowercase(1, "password must contain at least 1 lower case letter")
    .minUppercase(1, "password must contain at least 1 upper case letter")
    .minNumbers(1, "password must contain at least 1 number")
    .minSymbols(1, "password must contain at least 1 special character"),
});

const onSubmit = (values) => {
  console.log(values);
};

const SignUp = () => {
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
              Signup
            </Typography>
          </Grid>
          <Grid item lg={12}>
            <TextField
              id="Name"
              name="Name"
              label="Name"
              type="text"
              value={formik.values.Name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.Name && Boolean(formik.errors.Name)}
              helperText={formik.touched.Name && formik.errors.Name}
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
              id="Email"
              name="Email"
              label="Email"
              type="email"
              value={formik.values.Email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.Email && Boolean(formik.errors.Email)}
              helperText={formik.touched.Email && formik.errors.Email}
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
              id="Password"
              name="Password"
              label="Password"
              type="password"
              value={formik.values.Password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.Password && Boolean(formik.errors.Password)}
              helperText={formik.touched.Password && formik.errors.Password}
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
              Already have an account?{" "}
              <Link to="/" style={{ textDecoration: "none" }}>
                <span style={{ color: "#000000" }}>Login</span>
              </Link>
            </Typography>
          </Grid>
          <Grid item lg={12} sx={{ ml: 15 }}>
            <Button
              variant="contained"
              sx={{ width: 200, height: 50 }}
              type="submit"
            >
              <Typography variant="h6">Sign up</Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default SignUp;
