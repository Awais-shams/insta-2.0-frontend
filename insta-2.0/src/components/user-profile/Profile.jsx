import React from "react";
import {
  Paper,
  Avatar,
  Stack,
  Typography,
  Box,
  Chip,
  Grid,
} from "@mui/material";

import avatars from "../stories/Avatars.js";

const Profile = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        width: 840,
        height: 150,
        borderRadius: 5,
        margin: "auto",
        mt: 10,
        p: 3,
      }}
    >
      <Grid
        container
        spacing={5}
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid item>
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar
              aria-label="recipe"
              src={avatars[1]}
              sx={{ width: 100, height: 100 }}
            />
            <Box>
              <Typography variant="h6">Name</Typography>
              <Typography variant="h6">Awais Shams</Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item>
          <Stack direction="column" spacing={1} alignItems="center">
            <Typography variant="h6">10</Typography>
            <Typography variant="h6">
              {" "}
              <Chip label="Total Posts" color="primary" />
            </Typography>
          </Stack>
        </Grid>
        <Grid item>
          <Stack direction="column" spacing={1} alignItems="center">
            <Typography variant="h6">10</Typography>
            <Typography variant="h6">
              {" "}
              <Chip label="Following" color="primary" />
            </Typography>
          </Stack>
        </Grid>
        <Grid item>
          <Stack direction="column" spacing={1} alignItems="center">
            <Typography variant="h6">150</Typography>
            <Typography variant="h6">
              {" "}
              <Chip label="Followers" color="primary" />
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Profile;

<Stack
  direction="row"
  spacing={2}
  alignItems="center"
  justifyContent="space-around"
>
  <Box></Box>
  <Box></Box>

  <Box variant="h6">
    <Typography variant="h6">10</Typography>
    <Typography variant="h6">
      {" "}
      <Chip label="Following" color="primary" />
    </Typography>
  </Box>
  <Box variant="h6">
    <Typography variant="h6">5</Typography>
    <Typography variant="h6">
      {" "}
      <Chip label="Followers" color="primary" />
    </Typography>
  </Box>
  <Box variant="h6">
    <Typography variant="h6">
      {" "}
      <Chip label="Follow" color="primary" />
    </Typography>
  </Box>
  <Box variant="h6">
    <Typography variant="h6">
      {" "}
      <Chip label="Message" color="primary" />
    </Typography>
  </Box>
</Stack>;
