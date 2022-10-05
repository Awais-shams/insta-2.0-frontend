import React from "react";

import { Box } from "@mui/material";

import Stories from "../components/stories/Stories";
import CreatePost from "../components/post/CreatePost";

const PostFeed = () => {
  return (
    <Box>
      <Stories />
      <CreatePost />
    </Box>
  );
};

export default PostFeed;
