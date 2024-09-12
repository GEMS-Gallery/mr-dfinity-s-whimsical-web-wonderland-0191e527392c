import React, { useState, useEffect } from 'react';
import { Typography, Box, CircularProgress } from '@mui/material';
import { backend } from 'declarations/backend';

const AboutPage: React.FC = () => {
  const [aboutMe, setAboutMe] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const aboutMeData = await backend.getAboutMe();
        setAboutMe(aboutMeData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching about me data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box className="section">
      <Typography variant="h2">About Me</Typography>
      <Typography>{aboutMe}</Typography>
    </Box>
  );
};

export default AboutPage;
