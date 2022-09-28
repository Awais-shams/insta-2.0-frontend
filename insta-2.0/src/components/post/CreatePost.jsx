import React from "react";

import {
  Paper,
  Avatar,
  TextField,
  Button,
  Grid,
  Stack,
  CardHeader,
} from "@mui/material";

import avatar from "../../assets/images/avatar.JPG";

const CreatePost = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        width: 840,
        height: 250,
        borderRadius: 5,
        margin: "auto",
        mt: 2,
        p: 2,
      }}
    >
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <CardHeader
            avatar={<Avatar aria-label="recipe" src={avatar} />}
            title="Awais Shams"
            subheader="September 14, 2016"
          />
        </Grid>
        <Grid item lg={12} sx={{ ml: 2, mr: 2 }}>
          <TextField
            label="Post"
            id="post"
            fullWidth
            defaultValue="Write something awesome"
          />
        </Grid>
        <Grid item lg={12}>
          <Stack direction="row" spacing={2} sx={{ ml: 2 }}>
            <Button variant="contained">Add Photo</Button>
            <Button variant="contained">Share</Button>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CreatePost;
