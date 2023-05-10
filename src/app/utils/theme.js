"use client";
import Button from '@mui/material/Button'
import { ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
export const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      darker: '#f6f6f6',
    },
    secondary: {
      // main: '#0971f1',
      // darker: '#053e85',
      main: "#000000",
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    anger: createColor('#F40B27'),

  },
});
