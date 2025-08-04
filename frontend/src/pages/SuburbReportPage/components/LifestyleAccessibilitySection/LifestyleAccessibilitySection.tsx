import MetricCard from '../MetricCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Box, Stack, styled, Typography } from '@mui/material';

const data = [
  {
    icon: <AccountBalanceIcon />,
    title: 'Lifestyle Accessibility',
    value: '80%',
    subtitle: '12 months',
  },
  {
    icon: <AccountBalanceIcon />,
    title: 'Lifestyle Accessibility',
    value: '80%',
    subtitle: '12 months',
  },
  {
    icon: <AccountBalanceIcon />,
    title: 'Lifestyle Accessibility',
    value: '80%',
    subtitle: '12 months',
  },
  {
    icon: <AccountBalanceIcon />,
    title: 'Lifestyle Accessibility',
    value: '80%',
    subtitle: '12 months',
  },
  {
    icon: <AccountBalanceIcon />,
    title: 'Lifestyle Accessibility',
    value: '80%',
    subtitle: '12 months',
  },
  {
    icon: <AccountBalanceIcon />,
    title: 'Lifestyle Accessibility',
    value: '80%',
    subtitle: '12 months',
  },
  {
    icon: <AccountBalanceIcon />,
    title: 'Lifestyle Accessibility',
    value: '80%',
    subtitle: '12 months',
  },
];

const CardsGroup = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, minmax(0, 220px))',
  columnGap: theme.spacing(6),
  rowGap: theme.spacing(12),
  border: '1px solid blue',
}));

const LifestyleAccessibilitySection = () => {
  return (
    <Stack direction="column" spacing={8}>
      <Typography variant="h4">Lifestyle Accessibility</Typography>
      <CardsGroup>
        {data.map((card, index) => (
          <MetricCard key={index} {...card} />
        ))}
      </CardsGroup>
    </Stack>
  );
};

export default LifestyleAccessibilitySection;
