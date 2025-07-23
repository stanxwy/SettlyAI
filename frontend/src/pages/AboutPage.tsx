import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const AboutPage: React.FC = () => {
  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: '#f4f6f8',
        minHeight: 'calc(100vh - 64px)',
      }}
    >
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            About SettlyAI
          </Typography>
          <Typography variant="body1" paragraph>
            SettlyAI is a revolutionary platform designed to streamline the process of settling into a new environment. Whether you are moving to a new country, city, or even just a new neighborhood, SettlyAI provides you with the tools and information you need to make the transition as smooth as possible.
          </Typography>
          <Typography variant="body1" paragraph>
            Our intelligent assistant leverages cutting-edge AI to provide personalized recommendations, checklists, and support for all your settlement needs. From finding housing and schools to understanding local regulations and cultural norms, SettlyAI is your trusted partner every step of the way.
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            Our mission is to empower individuals and families to thrive in their new communities by providing a comprehensive and user-friendly platform that simplifies the complexities of relocation.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutPage;
