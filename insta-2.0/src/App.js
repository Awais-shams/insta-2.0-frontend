import "./App.css";
import SignUp from "./components/login-signup/SignUp";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/AppTheme";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <SignUp />
    </ThemeProvider>
  );
}

export default App;
