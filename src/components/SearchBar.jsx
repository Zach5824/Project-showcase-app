import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearchChange }) => {

  return (
    <TextField 
    placeholder="Search creative works..." 
    fullWidth 
    variant="standard"
    onChange={(e) => onSearchChange(e.target.value)}
    sx={{ mb: 2, input: { color: 'white', fontWeight: 600 } }}
  />
  );
};

export default SearchBar;