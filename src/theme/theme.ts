// theme.ts

// Import necessary dependencies
import { Roboto } from "next/font/google"; // Import Google Font Roboto
import { createTheme } from "@mui/material/styles"; // Import createTheme function from MUI

// Import different weights of Roboto font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Generate Roboto font with specified configurations
const roboto = Roboto({
  weight: ["300", "400", "500", "700"], // Font weights to include
  subsets: ["latin"], // Subsets to include
  display: "swap", // Specify font display property
  fallback: ["Helvetica", "Arial", "sans-serif"], // Fallback fonts
});

// Create MUI theme object
export const theme = createTheme({
  palette: {
    mode: "light", // Theme mode (light or dark)
  },
});
