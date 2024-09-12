import React, { useState, useEffect } from 'react';
import { Typography, Box, Button, CircularProgress } from '@mui/material';
import { backend } from 'declarations/backend';

const MoodMeterPage: React.FC = () => {
  const [moodMeter, setMoodMeter] = useState<number>(5);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMood = async () => {
      try {
        const mood = await backend.getMoodMeter();
        setMoodMeter(mood);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching mood:', error);
        setLoading(false);
      }
    };

    fetchMood();
  }, []);

  const handleMoodChange = async (newMood: number) => {
    setLoading(true);
    try {
      await backend.updateMoodMeter(newMood);
      setMoodMeter(newMood);
      setLoading(false);
    } catch (error) {
      console.error('Error updating mood:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
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
  );
};

export default MoodMeterPage;
