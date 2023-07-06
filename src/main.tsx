import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#42a5f5",
    },
    secondary: {
      main: "#f3e5f5",
    },
    error: {
      main: "#d32f2f",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
