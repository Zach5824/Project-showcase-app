import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => (
  <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #262629' }}>
    <Toolbar sx={{ justifyContent: 'center' }}>
      <Typography variant="h6" letterSpacing={1}>
        MY PROJECTS 
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;