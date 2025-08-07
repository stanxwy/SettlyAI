import React from 'react';
import { Typography, Container, styled } from '@mui/material';
import type { PropsWithChildren } from 'react';

type CustomContainerProps = {
  minHeight?: string | number;
  title?:string;
  children?: React.ReactNode;
};

const StyledContainer = styled(Container, {
  shouldForwardProp: (prop) => prop !== 'minHeight',
})<{ minHeight?: string | number }>(({ theme, minHeight }) => ({
  minHeight,
  maxWidth: '1440px',
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto',
  padding: theme.spacing(8),
}));


const CardWrapper = ({minHeight,title,children}:PropsWithChildren<CustomContainerProps>) => {
  return (
    <StyledContainer maxWidth="lg" minHeight={minHeight}>
        <Typography variant="h4" gutterBottom >
          {title}
        </Typography>
        {children}
    </StyledContainer>
  );
};

export default CardWrapper;
