import ActionButtonWrapper from '@/pages/SuburbReportPage/components/ActionButtonGroup/ActionButtonWrapper';
import BannerWrapper from '@/pages/SuburbReportPage/components/Banner/BannerWrapper';
import { Box, Button, styled, Typography } from '@mui/material';
import MetricCardsSection from './components/MetricCardsSection';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useQuery } from '@tanstack/react-query';
import { getSuburbLivability } from '@/api/suburbApi';
import { Navigate, useParams } from 'react-router-dom';

const PageContainer = styled(Box)(({ theme }) => ({
  maxWidth: '1440px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',
  padding: theme.spacing(8),
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  maxWidth: '936px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(8),
  width: '100%',
  paddingTop: theme.spacing(8),
}));

const SuburbReportPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const TITLES = {
    incomeEmployment: 'Income & Employment',
    propertyMarketInsights: 'Property Market Insghts',
    demandDevelopment: 'Demand & Development',
    lifeStyle: 'LifeStyle & Accessibility',
    safetyScore: 'Safety & Score',
  };

  const metricCardsData = [
    {
      icon: <AccountBalanceIcon />,
      title: 'Financial Health',
      value: '$12,500',
      subtitle: 'Total Savings',
    },
    {
      icon: <AccountBalanceIcon />,
      title: 'Monthly Income',
      value: '$3,200',
      subtitle: 'After Tax',
    },
    {
      icon: <AccountBalanceIcon />,
      title: 'Credit Score',
      value: '752',
      subtitle: 'Excellent',
    },
    {
      icon: <AccountBalanceIcon />,
      title: 'Loan Balance',
      value: '$8,900',
      subtitle: 'Remaining',
    },
    {
      icon: <AccountBalanceIcon />,
      title: 'Investments',
      value: '$15,000',
      subtitle: 'Stocks & Funds',
    },
    {
      icon: <AccountBalanceIcon />,
      title: 'Monthly Expenses',
      value: '$2,100',
      subtitle: 'Utilities & Rent',
    },
    {
      icon: <AccountBalanceIcon />,
      title: 'Net Worth',
      value: '$28,400',
      subtitle: 'Assets - Liabilities',
    },
    {
      icon: <AccountBalanceIcon />,
      title: 'Retirement Fund',
      value: '$7,800',
      subtitle: 'Superannuation',
    },
  ];

  const { suburbId } = useParams<{ suburbId: string }>();

  if (!suburbId || Number.isNaN(suburbId)) {
    return <Navigate to="/" replace />;
  }

  const query = useQuery({
    queryKey: [''],
    queryFn: () => getSuburbLivability(suburbId),
  });
  console.log(query.data);

  return (
    <PageContainer>
      {/* todo: replace with real banner content */}
      <BannerWrapper>
        <Typography variant="h3" fontWeight={700}>
          Welcome to xxx
        </Typography>
      </BannerWrapper>
      {/* todo: replace with real card content */}
      <ContentContainer>
        <MetricCardsSection
          title="Lifestyle Accessibility"
          data={metricCardsData}
        />
        {/* todo:  replace with real action buttons , feel free to modify*/}
        <ActionButtonWrapper>
          <Button>save this suburb</Button>
          <Button>Export PDF</Button>
        </ActionButtonWrapper>
      </ContentContainer>
    </PageContainer>
  );
};

export default SuburbReportPage;
