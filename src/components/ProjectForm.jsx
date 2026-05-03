import React, { useState } from 'react';
import { Paper, Typography, TextField, Button, Box } from '@mui/material';

const ProjectForm = ({ onAddProject }) => {
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title) return;
    onAddProject(formData);
    setFormData({ title: '', description: '' });
  };

  return (
    <Paper sx={{ p: 4, borderRadius: 3 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>Add Project</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField 
          label="Title" 
          fullWidth 
          variant="filled"
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
        />
        <TextField 
          label="Description" 
          fullWidth 
          multiline 
          rows={3} 
          variant="filled"
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
        />
        <Button 
          type="submit" 
          variant="contained" 
          sx={{ width: 'fit-content', textTransform: 'none', px: 4 }}
        >
          Add
        </Button>
      </Box>
    </Paper>
  );
};

export default ProjectForm;