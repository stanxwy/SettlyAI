import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const NotFoundPage: React.FC = () => {
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
        <ErrorOutlineIcon sx={{ fontSize: 80, color: 'text.secondary' }} />
        <Typography variant="h3" component="h1" gutterBottom>
          404 - Page Not Found
        </Typography>
        <Typography variant="h6" component="p" color="text.secondary" paragraph>
          The page you are looking for does not exist.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/">
          Go to Homepage
        </Button>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
