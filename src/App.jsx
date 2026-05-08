import React, { useState } from 'react';
import { Container, Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#a855f7' }, // Purple accent
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    fontWeightBold: 800,
  },
});

const App = () => {
  const [projects, setProjects] = useState([
    { id: 1, title: "Project 1", description: "Modern Web Experience" },
    { id: 2, title: "Project 2", description: "Creative Branding Identity" },
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
      <Box sx={{ 
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964')`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        pb: 8 
      }}>
        <Header />
        <Container maxWidth="sm">
          <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {/* Gradient Border Wrap */}
            <Box sx={gradientBorderStyle}>
              <ProjectForm onAddProject={addProject} />
            </Box>

            <Box sx={gradientBorderStyle}>
              <Box sx={{ bgcolor: '#1e293b', p: 3, borderRadius: '15px' }}>
                <SearchBar onSearchChange={setSearchTerm} />
                <ProjectList projects={filteredProjects} />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

const gradientBorderStyle = {
  background: 'linear-gradient(45deg, #6366f1, #a855f7, #ec4899)',
  padding: '2px', // This creates the "border"
  borderRadius: '16px',
  boxShadow: '0 10px 40px rgba(0,0,0,0.6)',
};

export default App;