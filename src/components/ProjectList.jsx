import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Using "X" icon as seen in mock-up

const ProjectList = ({ projects }) => {
  return (
    <List>
      {projects.map((project) => (
        <ListItem key={project.id} alignItems="flex-start" sx={{ px: 0 }}>
          <ListItemAvatar>
            <Avatar variant="rounded" sx={{ bgcolor: '#eee', color: '#999', border: '1px solid #ccc', width: 50, height: 50, mr: 2 }}>
              <CloseIcon /> 
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<Typography fontWeight="bold">{project.title}</Typography>}
            secondary={project.description}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ProjectList;