import React, { useState, useEffect } from "react";

import {
  Paper,
  Avatar,
  TextField,
  Button,
  Grid,
  Stack,
  CardHeader,
  IconButton,
  InputAdornment,
} from "@mui/material";

import PhotoCamera from "@mui/icons-material/PhotoCamera";
import SendIcon from "@mui/icons-material/Send";

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import { useFormik } from "formik";
import * as Yup from "yup";

import avatar from "../../assets/images/avatar.JPG";

const initialValues = {
  caption: "",
};

const validationSchema = Yup.object({
  caption: Yup.string().required().max(255),
});

const CreatePost = () => {
  const onSubmit = (values) => {
    console.log(values);
    axios
      .post("http://localhost:3000/api/posts/new/63354194e9665601e7b14cdb", {
        text: values.caption,
        postedBy: "63354194e9665601e7b14cdb",
      })
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  // useEffect(()=>{
  //   axios.get()
  // })

  return (
    <Paper
      elevation={4}
      sx={{
        width: 840,
        height: 90,
        borderRadius: 5,
        margin: "auto",
        mt: 2,
        p: 2,
      }}
    >
      <Toaster />

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item lg={12} sx={{ ml: 2, mr: 2 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar alt="user" src={avatar} sx={{ width: 56, height: 56 }} />
              <TextField
                id="caption"
                name="caption"
                label="Start a post"
                type="text"
                onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // error={formik.touched.caption && Boolean(formik.errors.caption)}
                // helperText={formik.touched.caption && formik.errors.caption}
                value={formik.values.caption}
                variant="outlined"
                fullWidth
                sx={{
                  ".MuiOutlinedInput-root": {
                    borderRadius: 20,
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="label"
                      >
                        <input hidden accept="image/*" type="file" />
                        <PhotoCamera />
                      </IconButton>
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
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
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default CreatePost;
