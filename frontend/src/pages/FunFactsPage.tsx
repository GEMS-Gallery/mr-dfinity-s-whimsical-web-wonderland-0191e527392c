import React, { useState, useEffect } from 'react';
import { Typography, Box, CircularProgress } from '@mui/material';
import { backend } from 'declarations/backend';

const FunFactsPage: React.FC = () => {
  const [funFacts, setFunFacts] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const funFactsData = await backend.getFunFacts();
        setFunFacts(funFactsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching fun facts:', error);
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
      <Typography variant="h2">Fun Facts</Typography>
      {funFacts.map((fact, index) => (
        <Box key={index} className="fun-fact">
          <Typography>{fact}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default FunFactsPage;
