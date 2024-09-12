import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, CircularProgress } from '@mui/material';
import { backend } from 'declarations/backend';

const App: React.FC = () => {
  const [aboutMe, setAboutMe] = useState<string>('');
  const [funFacts, setFunFacts] = useState<string[]>([]);
  const [projects, setProjects] = useState<[string, string, string | null][]>([]);
  const [quote, setQuote] = useState<string>('');
  const [moodMeter, setMoodMeter] = useState<number>(5);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [aboutMeData, funFactsData, projectsData, quoteData, moodData] = await Promise.all([
          backend.getAboutMe(),
          backend.getFunFacts(),
          backend.getProjects(),
          backend.getRandomQuote(),
          backend.getMoodMeter()
        ]);

        setAboutMe(aboutMeData);
        setFunFacts(funFactsData);
        setProjects(projectsData);
        setQuote(quoteData);
        setMoodMeter(moodData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNewQuote = async () => {
    try {
      const newQuote = await backend.getRandomQuote();
      setQuote(newQuote);
    } catch (error) {
      console.error('Error fetching new quote:', error);
    }
  };

  const handleMoodChange = async (newMood: number) => {
    try {
      await backend.updateMoodMeter(newMood);
      setMoodMeter(newMood);
    } catch (error) {
      console.error('Error updating mood:', error);
    }
  };

  if (loading) {
    return (
      <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="md" className="app-container">
      <Typography variant="h1" align="center" gutterBottom style={{ color: '#FF1493' }}>
        Mr. DFINITY's Quirky Corner
      </Typography>

      <Box className="section">
        <Typography variant="h2">About Me</Typography>
        <Typography>{aboutMe}</Typography>
      </Box>

      <Box className="section">
        <Typography variant="h2">Fun Facts</Typography>
        {funFacts.map((fact, index) => (
          <Box key={index} className="fun-fact">
            <Typography>{fact}</Typography>
          </Box>
        ))}
      </Box>

      <Box className="section">
        <Typography variant="h2">My Projects</Typography>
        {projects.map(([title, description], index) => (
          <Box key={index} className="project">
            <Typography variant="h3">{title}</Typography>
            <Typography>{description}</Typography>
          </Box>
        ))}
      </Box>

      <Box className="section">
        <Typography variant="h2">Random Quote</Typography>
        <Typography className="quote">{quote}</Typography>
        <Button variant="contained" color="secondary" onClick={handleNewQuote}>
          Get New Quote
        </Button>
      </Box>

      <Box className="section">
        <Typography variant="h2">Mood Meter</Typography>
        <Typography>Current Mood: {moodMeter}/10</Typography>
        <Box display="flex" justifyContent="space-between">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((mood) => (
            <Button
              key={mood}
              variant={mood === moodMeter ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleMoodChange(mood)}
            >
              {mood}
            </Button>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default App;
