import React, { useState } from 'react';
import { Container, Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';

// Define the Modern Dark Theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#3f8cff' },
    background: { default: '#0A0A0B', paper: '#161618' },
  },
  shape: { borderRadius: 12 },
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
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="sm" sx={{ pb: 5 }}>
        <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
          <ProjectForm onAddProject={addProject} />
          <Box sx={{ 
            p: 3, 
            bgcolor: 'background.paper', 
            borderRadius: 3, 
            border: '1px solid #262629' 
          }}>
            <SearchBar onSearchChange={setSearchTerm} />
            <ProjectList projects={filteredProjects} />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;