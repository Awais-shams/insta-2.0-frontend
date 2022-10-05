import React, { useState, useEffect } from "react";

import {
  Paper,
  Avatar,
  TextField,
  Grid,
  Stack,
  IconButton,
  InputAdornment,
  Box,
  Typography,
  Chip,
} from "@mui/material";

import PhotoCamera from "@mui/icons-material/PhotoCamera";
import SendIcon from "@mui/icons-material/Send";

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useCookies } from "react-cookie";

import PostCard from "./PostCard";

// import avatar from "../../assets/images/avatar.JPG";
// import { BounceLoader } from "react-spinners";
import avatars from "../stories/Avatars.js";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const initialValues = {
  caption: "",
  photo: {},
};

const validationSchema = Yup.object({
  caption: Yup.string().required().max(255),
});

const CreatePost = () => {
  const [cookie, setCookie] = useCookies(["x-auth-token"]);

  const [post, setPost] = useState([]);
  const [check, setCheck] = useState(false);
  const [Loading, setLoading] = useState(false);

  console.log(cookie["x-auth-token"]);

  const onSubmit = (values) => {
    console.log(values);
    setLoading(true);
    axios
      .post(
        "http://localhost:3000/api/posts/new",
        {
          caption: values.caption,
          photo: values.photo,
        },
        {
          headers: {
            "x-auth-token": cookie["x-auth-token"],
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setCheck(!check);
        setLoading(false);
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

  console.log(post.length);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/posts/new", {
        headers: { "x-auth-token": cookie["x-auth-token"] },
      })
      .then((res) => {
        setPost(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [check]);
  return (
    <Paper
      elevation={4}
      sx={{
        width: 840,
        height: 90,
        borderRadius: 5,
        margin: "auto",
        mt: 4,
        // p: 2,
      }}
    >
      {/* <BounceLoader loading={Loading} /> */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={Loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Toaster />
      <Box>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <Grid container spacing={2}>
            <Grid item lg={12} sx={{ ml: 2, mr: 2 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  alt="user"
                  src={avatars[1]}
                  sx={{ width: 56, height: 56 }}
                />
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
                      borderRadius: 10,
                    },
                    ".MuiInputBase-input": {
                      ml: 0.8,
                    },
                    ".MuiInputLabel-root": {
                      ml: 0.8,
                      fontWeight: 500,
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
                          <input
                            id="photo"
                            name="photo"
                            hidden
                            accept="image/*"
                            type="file"
                            onChange={(event) => {
                              formik.setFieldValue(
                                "photo",
                                event.currentTarget.files[0]
                              );
                            }}
                          />
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
      </Box>
      <Box sx={{ mt: 5 }}>
        {post.length === 0 ? (
          <Box sx={{ ml: 45 }}>
            <Typography variant="h4">
              {" "}
              <Chip label="No Posts" color="primary" />
            </Typography>
          </Box>
        ) : (
          <PostCard data={post} avatar={avatars[1]} />
        )}
      </Box>
    </Paper>
  );
};

export default CreatePost;
