import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

type BannerProps = {
  children: React.ReactNode;
};

const StyledBanner = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: 400,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(3),
  textAlign: 'center',
}));

const Banner: React.FC<BannerProps> = ({ children }) => {
  return <StyledBanner>{children}</StyledBanner>;
};

export default Banner;
