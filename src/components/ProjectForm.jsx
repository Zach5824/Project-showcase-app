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
    <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>Add Project</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField 
          label="Title" 
          fullWidth 
          size="small" 
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
        />
        <TextField 
          label="Description" 
          fullWidth 
          multiline 
          rows={3} 
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
        />
        <Button type="submit" variant="outlined" sx={{ width: 'fit-content', textTransform: 'none', color: 'black', borderColor: '#ccc' }}>
          Add
        </Button>
      </Box>
    </Paper>
  );
};

export default ProjectForm;