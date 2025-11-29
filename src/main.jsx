// Library
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

// i18n (initialize before app)
import "./i18n";

// components
import App from "@/App.jsx";

// Styles
import "animate.css";
import "tailwindcss";
import "aos/dist/aos.css";
import "@/index.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Theme
import { theme } from "@/theme/Theme.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter>
          <App />
        </HashRouter>
        <ToastContainer />
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>
);
