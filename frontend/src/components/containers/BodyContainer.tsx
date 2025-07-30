import React from 'react';
import { Container, Typography, Box, styled } from '@mui/material';

type BodyContainerProps = {
  minHeight?: string | number;
  title?: string;
  children?: React.ReactNode;
};

const StyledContainer = styled(Container, {
  shouldForwardProp: (prop) => prop !== 'minHeight',
})<{ minHeight?: string | number }>(({ theme, minHeight }) => ({
  minHeight: minHeight,
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
}));

const StyledBox = styled(Box)({
  height: '100%',
});

const BodyContainer: React.FC<BodyContainerProps> = ({ minHeight, title, children }) => {
  return (
    <StyledContainer maxWidth="lg" minHeight={minHeight}>
      <StyledBox>
        {title && (
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
        )}
        {children}
      </StyledBox>
    </StyledContainer>
  );
};

export default BodyContainer;
