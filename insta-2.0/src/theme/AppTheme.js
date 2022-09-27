import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#EA0C5F",
    },
    secondary: {
      main: "#C0007A",
    },
    text: {
      primary: "#100F0F",
      secondary: "#0F3D3E",
    },
  },
  typography: {
    fontFamily: "Rubik",
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 400,
    },
    button: {
      fontWeight: 400,
    },
  },
});

export default theme;
