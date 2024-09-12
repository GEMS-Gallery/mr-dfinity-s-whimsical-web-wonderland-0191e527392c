import React, { useState, useEffect } from 'react';
import { Typography, Box, Button, CircularProgress } from '@mui/material';
import { backend } from 'declarations/backend';

const QuotePage: React.FC = () => {
  const [quote, setQuote] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const newQuote = await backend.getRandomQuote();
      setQuote(newQuote);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching quote:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <Box className="section">
      <Typography variant="h2">Random Quote</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Typography className="quote">{quote}</Typography>
          <Button variant="contained" color="secondary" onClick={fetchQuote}>
            Get New Quote
          </Button>
        </>
      )}
    </Box>
  );
};

export default QuotePage;
