import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Box } from '@mui/material';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }:LayoutProps) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <NavBar />
      <Box component="main" flexGrow={1}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
