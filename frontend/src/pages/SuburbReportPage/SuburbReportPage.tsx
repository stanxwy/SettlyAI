import { Box, styled } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MetricCardsSection from './components/MetricCardsSection';

const PageContainer = styled(Box)(({ theme }) => ({
  maxWidth: '1440px',
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto',
  padding: theme.spacing(8),
}));

const metricCardsData = [
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
  {
    icon: <AccountBalanceIcon />,
    title: 'Lifestyle Accessibility',
    value: '80%',
    subtitle: '12 months',
  },
];

const SuburbReportPage = () => {
  return (
    <PageContainer>
      <MetricCardsSection
        title="Lifestyle Accessibility"
        data={metricCardsData}
      />
    </PageContainer>
  );
};

export default SuburbReportPage;
