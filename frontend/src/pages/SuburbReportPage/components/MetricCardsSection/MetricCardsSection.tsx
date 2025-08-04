import MetricCard from './components/MetricCard';
import { Box, Stack, styled, Typography } from '@mui/material';

interface IMetricCardData {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle?: string;
}

interface IMetricCardsSectionProps {
  title: string;
  data: IMetricCardData[];
}

const CardsGroup = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, minmax(0, 220px))',
  columnGap: theme.spacing(6),
  rowGap: theme.spacing(12),
}));

const MetricCardsSection = ({ title, data }: IMetricCardsSectionProps) => {
  return (
    <Stack direction="column" spacing={8}>
      <Typography variant="h4">{title}</Typography>
      <CardsGroup>
        {data.map((card, index) => (
          <MetricCard key={index} {...card} />
        ))}
      </CardsGroup>
    </Stack>
  );
};

export default MetricCardsSection;
