import * as React from 'react';
import {AppBar, Box, Toolbar} from '@mui/material/';

export default function NavBar({children, barColor, styleOverride}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color={barColor} sx={styleOverride}>
        <Toolbar>
          {children}
        </Toolbar>
      </AppBar>
    </Box>
  );
}