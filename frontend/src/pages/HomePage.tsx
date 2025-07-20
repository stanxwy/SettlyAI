import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 64px)', // Adjust for Navbar height
        textAlign: 'center',
        backgroundColor: '#f4f6f8',
        p: 3,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to SettlyAI
        </Typography>
        <Typography variant="h5" component="p" color="text.secondary" paragraph>
          Your intelligent assistant for seamless integration and settlement.
        </Typography>
        <Button variant="contained" color="primary" size="large" component={Link} to="/about">
          Learn More
        </Button>
      </Container>
    </Box>
  );
};

export default HomePage;
