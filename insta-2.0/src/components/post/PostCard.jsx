import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import Post from "../../assets/images/post.jpg";
import avatar from "../../assets/images/avatar.JPG";
import moment from "moment";
import axios from "axios";
import { useCookies } from "react-cookie";

import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  caption: "",
};

const validationSchema = Yup.object({
  caption: Yup.string().required().max(255),
});

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PostCard = (props) => {
  console.log("awais", props.data);

  const [cookie, setCookie] = useCookies(["x-auth-token"]);

  const [openDialog, setOpenDialog] = useState(false);
  const [getPostId, setPostId] = useState(null);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setPostId(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickOpenDialog = (id) => {
    console.log(id);
    setPostId(id);
    setOpenDialog(true);
  };

  console.log(getPostId);

  const onSubmit = (values) => {
    console.log(values);
    axios
      .put(
        `http://localhost:3000/api/posts/new/${getPostId}`,
        {
          caption: values.caption,
        },
        {
          headers: {
            "x-auth-token": cookie["x-auth-token"],
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    handleCloseDialog();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const DialogBox = (
    <Dialog open={openDialog} onClose={handleCloseDialog}>
      <DialogTitle>Edit Caption</DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <TextField
            id="caption"
            name="caption"
            label="Edit Caption"
            type="text"
            fullWidth
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.caption}
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit">Edit</Button>
        </DialogActions>
      </form>
    </Dialog>
  );

  const deletePost = (id) => {
    console.log(id);

    axios
      .delete(`http://localhost:3000/api/posts/new/${id}`, {
        headers: {
          "x-auth-token": cookie["x-auth-token"],
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const likePost = (id) => {
    console.log(id);
  };

  return props.data.map((post) => {
    const id = post._id;

    return (
      <Card
        sx={{
          width: 840,
          height: 800,
          borderRadius: 5,
          margin: "auto",
          mt: 2,
          p: 2,
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              src={avatar}
            />
          }
          action={
            <Box>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem>{id}</MenuItem>

                <MenuItem onClick={() => handleClickOpenDialog(id)}>
                  Edit
                </MenuItem>
                <MenuItem onClick={() => deletePost(id)}>Delete</MenuItem>
              </Menu>
              {openDialog ? DialogBox : null}
            </Box>
          }
          title={
            post.postedBy.name.charAt(0).toUpperCase() +
            post.postedBy.name.slice(1)
          }
          subheader={moment(post.createdAt).format("ddd, hA")}
        />
        <CardMedia
          component="img"
          height="500"
          image={post.photo}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            <span style={{ color: "#000000", fontWeight: "bold" }}>
              Caption:{" "}
            </span>
            {post.text}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() => likePost(post._id)}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that
              don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  });
};

export default PostCard;
