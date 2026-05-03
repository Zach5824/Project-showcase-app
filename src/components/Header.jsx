import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => (
  <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #e0e0e0', bgcolor: 'white' }}>
    <Toolbar sx={{ justifyContent: 'center' }}>
      <Typography variant="h6" fontWeight="medium">
        Personal Project Showcase App
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;