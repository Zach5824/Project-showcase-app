import React, { useState } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';

const ProjectForm = ({ onAddProject }) => {
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title) return;
    onAddProject(formData);
    setFormData({ title: '', description: '' });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ 
      bgcolor: '#1e293b', 
      p: 3, 
      borderRadius: '15px', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 2 
    }}>
      <Typography variant="h5" sx={{ fontWeight: 800, color: 'white' }}>Add Project</Typography>
      <TextField 
        label="Project Title" 
        variant="filled" 
        fullWidth 
        value={formData.title}
        onChange={(e) => setFormData({...formData, title: e.target.value})}
        sx={{ bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 1 }}
      />
      <TextField 
        label="Description" 
        variant="filled" 
        fullWidth 
        multiline 
        rows={3} 
        value={formData.description}
        onChange={(e) => setFormData({...formData, description: e.target.value})}
        sx={{ bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 1 }}
      />
      <Button 
        type="submit" 
        variant="contained" 
        sx={{ 
          fontWeight: 'bold', 
          py: 1.5, 
          background: 'linear-gradient(45deg, #6366f1, #a855f7)' 
        }}
      >
        Publish Project
      </Button>
    </Box>
  );
};

export default ProjectForm;