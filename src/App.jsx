import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Container } from "@mui/material";
import theme from "./theme";

function App(error) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container component="main">{error?.error || <Outlet />}</Container>
      </ThemeProvider>
    </>
  );
}

export default App;
