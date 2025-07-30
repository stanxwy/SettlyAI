import React from 'react';
import { Container, Typography, Box, styled } from '@mui/material';

type BodyContainerProps = {
  maxHeight?: string | number;
  title?: string;
  children?: React.ReactNode;
};

const StyledContainer = styled(Container, {
  shouldForwardProp: (prop) => prop !== 'maxHeight',
})<{ maxHeight?: string | number }>(({ theme, maxHeight }) => ({
  maxHeight: maxHeight,
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
  overflowY: maxHeight ? 'auto' : undefined,
}));

const StyledBox = styled(Box)({
  height: '100%',
});

const BodyContainer: React.FC<BodyContainerProps> = ({ maxHeight, title, children }) => {
  return (
    <StyledContainer maxWidth="lg" maxHeight={maxHeight}>
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
