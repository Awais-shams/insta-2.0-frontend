import React from "react";

import { Paper, Avatar, Stack } from "@mui/material";
import avatar from "../../assets/images/avatar.JPG";

const Stories = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        width: 840,
        height: 70,
        borderRadius: 5,
        margin: "auto",
        mt: 10,
        p: 2,
      }}
    >
      <Stack direction="row" spacing={3}>
        <Avatar aria-label="recipe">+</Avatar>
        <Avatar aria-label="recipe" src={avatar} />
        <Avatar aria-label="recipe" src={avatar} />
        <Avatar aria-label="recipe" src={avatar} />
        <Avatar aria-label="recipe" src={avatar} />
        <Avatar aria-label="recipe" src={avatar} />
        <Avatar aria-label="recipe" src={avatar} />
        <Avatar aria-label="recipe" src={avatar} />
        <Avatar aria-label="recipe" src={avatar} />
        <Avatar aria-label="recipe" src={avatar} />
        <Avatar aria-label="recipe" src={avatar} />
        <Avatar aria-label="recipe" src={avatar} />
        <Avatar aria-label="recipe" src={avatar} />
      </Stack>
    </Paper>
  );
};

export default Stories;
