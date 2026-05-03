import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ onSearchChange }) => {
  return (
    <TextField 
      placeholder="Search Projects" 
      fullWidth 
      size="small" 
      variant="outlined"
      onChange={(e) => onSearchChange(e.target.value)}
      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
    />
  );
};

export default SearchBar;