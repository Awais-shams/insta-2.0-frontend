import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/AppTheme";
import { CssBaseline } from "@mui/material";

import { Routes, Route, useLocation } from "react-router-dom";

import SignUp from "./components/login-signup/SignUp";
import Login from "./components/login-signup/Login";
import NavBar from "./components/navigation-bar/NavBar";
import PostFeed from "./pages/PostFeed";
import Profile from "./components/user-profile/Profile";
import Chat from "./components/chat/Chat";

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {location.pathname === "/" || location.pathname === "/signup" ? null : (
        <NavBar />
      )}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/postFeed" element={<PostFeed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
