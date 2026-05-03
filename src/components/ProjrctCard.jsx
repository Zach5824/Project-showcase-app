import React from 'react';
import { 
  ListItem, 
  ListItemAvatar, 
  Avatar, 
  ListItemText, 
  Typography, 
  Divider 
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ProjectCard = ({ project }) => {
  return (
    <>
      <ListItem alignItems="flex-start" sx={{ px: 0, py: 2 }}>
        <ListItemAvatar>
          {/* The rounded Avatar mimics the "X" box in the mock-up */}
          <Avatar 
            variant="rounded" 
            sx={{ 
              bgcolor: '#f5f5f5', 
              color: '#757575', 
              border: '1px solid #e0e0e0', 
              width: 50, 
              height: 50, 
              mr: 2 
            }}
          >
            <CloseIcon fontSize="large" /> 
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant="subtitle1" fontWeight="bold">
              {project.title}
            </Typography>
          }
          secondary={
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
          }
        />
      </ListItem>
      <Divider component="li" />
    </>
  );
};

export default ProjectCard;