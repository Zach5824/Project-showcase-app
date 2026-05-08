import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const ProjectCard = ({ project }) => {
  return (
    <ListItem sx={{ 
      mt: 2, 
      borderRadius: '12px', 
      transition: '0.3s',
      border: '1px solid rgba(255,255,255,0.1)',
      '&:hover': {
        transform: 'scale(1.02)',
        bgcolor: 'rgba(255,255,255,0.05)',
        boxShadow: '0 0 15px rgba(168, 85, 247, 0.4)'
      }
    }}>
      <ListItemAvatar>
        <Avatar variant="rounded" sx={{ bgcolor: '#334155', color: '#a855f7' }}>
          <AutoAwesomeIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={<Typography sx={{ fontWeight: 700, color: 'white' }}>{project.title}</Typography>}
        secondary={<Typography sx={{ color: 'rgba(255,255,255,0.6)' }}>{project.description}</Typography>}
      />
    </ListItem>
  );
};

export default ProjectCard;