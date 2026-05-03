import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ProjectCard = ({ project }) => {
  return (
    <>
      <ListItem alignItems="flex-start" sx={{ px: 0, py: 2 }}>
        <ListItemAvatar>
          <Avatar variant="rounded" sx={{ bgcolor: '#262629', color: '#757575', width: 50, height: 50, mr: 2 }}>
            <CloseIcon /> 
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={<Typography fontWeight="bold">{project.title}</Typography>}
          secondary={project.description}
        />
      </ListItem>
      <Divider />
    </>
  );
};

export default ProjectCard;