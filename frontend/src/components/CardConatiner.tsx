import React from 'react';
import { Box, Typography, Container, styled } from '@mui/material';

type CustomContainerProps = {
  maxHeight: string | number;
  title: string;
  children?: React.ReactNode;
};

// 带 maxHeight prop 的 styled Container，避免传给 DOM 元素
const StyledContainer = styled(Container, {
  shouldForwardProp: (prop) => prop !== 'maxHeight',
})<{ maxHeight: string | number }>(({ theme, maxHeight }) => ({
  maxHeight,
  maxWidth: '1440px',
  margin: '20px',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  minHeight: 300,
  overflowY: typeof maxHeight === 'number' || (typeof maxHeight === 'string' && maxHeight !== 'auto') ? 'auto' : undefined,
}));

const StyledBox = styled(Box)({});

const CardContainer: React.FC<CustomContainerProps> = ({
  maxHeight,
  title,
  children,
}) => {
  return (
    <StyledContainer maxWidth="lg" maxHeight={maxHeight}>
      <StyledBox>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        {children}
      </StyledBox>
    </StyledContainer>
  );
};

export default CardContainer;
