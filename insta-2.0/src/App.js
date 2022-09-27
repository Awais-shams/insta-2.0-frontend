import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/AppTheme";
import { CssBaseline } from "@mui/material";

import SignUp from "./components/login-signup/SignUp";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SignUp />
    </ThemeProvider>
  );
}

export default App;
