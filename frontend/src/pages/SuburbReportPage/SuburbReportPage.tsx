import ActionButtonWrapper from '@/pages/SuburbReportPage/components/ActionButtonGroup/ActionButtonWrapper';
import BannerWrapper from '@/pages/SuburbReportPage/components/Banner/BannerWrapper';
import { Box, Button, styled, Typography } from '@mui/material';
import MetricCardsSection from './components/MetricCardsSection';
import { useQuery } from '@tanstack/react-query';
import { getSuburbLivability } from '@/api/suburbApi';
import { Navigate, useParams } from 'react-router-dom';
import { getDemandAndDev } from '@/api/suburbApi';
import type { IMetricCardData } from './components/MetricCardsSection/MetricCardsSection';
import { useEffect, useState } from 'react';
import {
  mapDevCardData,
  mapLivability,
} from './components/MetricCardsSection/utils/dataMapper';

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
  const [demandAndDevCards, setDemandAndDevCards] = useState<IMetricCardData[]>(
    []
  );
  // loading and errorMessage for page loading status
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { suburbId } = useParams<{ suburbId: string }>();

  if (!suburbId || Number.isNaN(suburbId)) {
    return <Navigate to="/" replace />;
  }

  const query = useQuery({
    queryKey: ['1'],
    queryFn: () => getSuburbLivability(suburbId),
  });
  console.log(query.data);

  // use useEffect for APi fetching test, this part will be replaced by useQueries later
  useEffect(() => {
    setLoading(true);
    setErrorMessage(null);
    const suburbId = localStorage.getItem('suburbId');
    if (suburbId) {
      const fetchDemandAndDevData = async () => {
        try {
          const data = await getDemandAndDev(parseInt(suburbId));
          setDemandAndDevCards(mapDevCardData(data));
        } catch (error) {
          if (error instanceof Error) setErrorMessage(error.message);
          else setErrorMessage(String(error));
        } finally {
          setLoading(false);
        }
      };
      fetchDemandAndDevData();
    } else {
      setErrorMessage('Cannot find the surbub Id');
      setLoading(false);
    }
  }, []);
  // 1. Loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // 2. Error state
  if (errorMessage) {
    return <p style={{ color: 'red' }}>Error: {errorMessage}</p>;
  }

  const data = {
    transportScore: 8.5234,
    supermarketQuantity: 12,
    hospitalQuantity: 3,
    primarySchoolRating: 7.2234,
    secondarySchoolRating: 6.8234,
    hospitalDensity: 1.5234,
  };

  const formatedData = mapLivability(data);

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
          title={TITLES.demandDevelopment}
          data={demandAndDevCards}
        />
        <MetricCardsSection
          title="Lifestyle Accessibility"
          data={formatedData}
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
