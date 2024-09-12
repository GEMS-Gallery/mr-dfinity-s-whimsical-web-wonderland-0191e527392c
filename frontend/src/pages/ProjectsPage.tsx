import React, { useState, useEffect } from 'react';
import { Typography, Box, CircularProgress } from '@mui/material';
import { backend } from 'declarations/backend';

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<[string, string, string | null][]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsData = await backend.getProjects();
        setProjects(projectsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
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
      <Typography variant="h2">My Projects</Typography>
      {projects.map(([title, description], index) => (
        <Box key={index} className="project">
          <Typography variant="h3">{title}</Typography>
          <Typography>{description}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ProjectsPage;
