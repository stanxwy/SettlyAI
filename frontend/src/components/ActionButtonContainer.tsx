import React from 'react';
import { Box, styled } from '@mui/material';

type ActionButtonProps = {
  children: React.ReactNode;
};

const ActionButtonContainerRoot = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: 100,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'left',
  alignItems: 'center',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  textAlign: 'center',
}));

const ActionButtonContainer: React.FC<ActionButtonProps> = ({ children }) => {
  return <ActionButtonContainerRoot>{children}</ActionButtonContainerRoot>;
};

export default ActionButtonContainer;
