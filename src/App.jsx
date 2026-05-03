import React, { useState } from 'react';
import { Container, Box, Divider, Typography, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';

const theme = createTheme({
  palette: {
    background: { default: '#f9f9f9' },
  },
});

const App = () => {
  const [projects, setProjects] = useState([
    { id: 1, title: "Project 1", description: "Description of the project" },
    { id: 2, title: "Project 2", description: "Description of the project" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: Date.now() }]);
  };

  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="sm">
        <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
          <ProjectForm onAddProject={addProject} />
          <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2, border: '1px solid #e0e0e0' }}>
            <SearchBar onSearchChange={setSearchTerm} />
            <Divider sx={{ my: 2 }} />
            <ProjectList projects={filteredProjects} />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;