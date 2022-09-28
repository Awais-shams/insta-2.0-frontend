import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/AppTheme";
import { CssBaseline } from "@mui/material";

import { Routes, Route} from "react-router-dom";

import SignUp from "./components/login-signup/SignUp";
import Login from "./components/login-signup/Login";
import NavBar from "./components/navigation-bar/NavBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/postFeed" element={<NavBar />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
