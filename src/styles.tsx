import { createTheme, PaletteColorOptions } from "@mui/material/styles";
import "./index.css";

declare module "@mui/material/styles" {
  interface PaletteCustom {
    footerBackground: string;
    footer: string;
    footerbar: string;
    madeby: string;
    brettenBackground: string;
    brettenBackgroundDark: string;
    expertise: string;
    accent: string;
  }

  interface Palette {
    custom?: PaletteCustom;
  }

  interface PaletteOptions {
    custom?: PaletteColorOptions;
  }
}

// Create your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#3f83c8", // Base primary color
      light: "#4A4C50", // Light shade of primary
      dark: "#1A1B1E", // Dark shade of primary
      contrastText: "#FFFFFF", // Text color on primary
    },
    secondary: {
      main: "#89b7e7", // Teal accent color
      light: "#00B2B2", // Lighter teal
      dark: "#005757", // Darker teal
      contrastText: "#FFFFFF", // Text color on secondary
    },
    error: {
      main: "#FF6F61", // Coral accent for error states
      contrastText: "#FFFFFF", // Text color on error
    },
    background: {
      default: "#f5f8fb", // Soft gray for the background
      paper: "#f0f4f7", // White for paper surfaces
    },
    text: {
      primary: "#000000", // Primary text color
      secondary: "#1D1F22", // Darker text for secondary content
    },
    custom: {
      footer: "#9ea3a1", // Custom footer color
      footerBackground: "#2c2e33",
      footerbar: "#ef9e16", // Custom footerbar color
      madeby: "#232121", // Custom "madeby" color
      brettenBackground: "#003e7b",
      brettenBackgroundDark: "#0f2b46",
      expertise: "#212121",
      accent: "#5ba2ea",
    },
  },
});

export default theme;
