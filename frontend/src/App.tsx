import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import AboutPage from './pages/AboutPage';
import FunFactsPage from './pages/FunFactsPage';
import ProjectsPage from './pages/ProjectsPage';
import QuotePage from './pages/QuotePage';
import MoodMeterPage from './pages/MoodMeterPage';

const App: React.FC = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mr. DFINITY's Quirky Corner
          </Typography>
          <Button color="inherit" component={Link} to="/">About</Button>
          <Button color="inherit" component={Link} to="/fun-facts">Fun Facts</Button>
          <Button color="inherit" component={Link} to="/projects">Projects</Button>
          <Button color="inherit" component={Link} to="/quote">Quote</Button>
          <Button color="inherit" component={Link} to="/mood-meter">Mood Meter</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" className="app-container">
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/fun-facts" element={<FunFactsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/mood-meter" element={<MoodMeterPage />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
