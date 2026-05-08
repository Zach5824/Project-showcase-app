import React from 'react';
import { List, Typography, Box } from '@mui/material';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
  <List>
    {projects.map(p => <ProjectCard key={p.id} project={p} />)}
  </List>
  if (projects.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography color="text.secondary">No projects found.</Typography>
      </Box>
    );
  }

  return (
    <List disablePadding>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </List>
  );
};

export default ProjectList;