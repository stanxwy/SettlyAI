import ActionButtonWrapper from '@/pages/SuburbReportPage/components/ActionButtonWrapper';
import BannerContainer from '@/components/Banner/BannerContainer';
import BodyWrapper from '@/pages/SuburbReportPage/components/BodyWrapper';
import CardWrapper from '@/pages/SuburbReportPage/components/CardWrapper';
import type { AppDispatch, RootState } from '@/store';
import { fetchSuburbReport, setSuburbId } from '@/store/slices/suburbSlice';
import { Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '@/components/Layout/Layout';

const SuburbReportPage = () => {
  const TITLES = {
    incomeEmployment: 'Income & Employment',
    propertyMarketInsights: 'Property Market Insghts',
    demandDevelopment: 'Demand & Development',
    lifeStyle: 'LifeStyle & Accessibility',
    safetyScore: 'Safety & Score',
  };
  const dispatch = useDispatch<AppDispatch>();
  const { suburbId, report, loading, error } = useSelector(
    (state: RootState) => state.suburb
  );

  useEffect(() => {
    let id = suburbId;

    if (!id) {
      const fromStorage = localStorage.getItem('suburbId');
      if (fromStorage) {
        id = parseInt(fromStorage);
        dispatch(setSuburbId(id));
      }
    }

    if (id) {
      dispatch(fetchSuburbReport(id));
    }
  }, [suburbId, dispatch]);

  if (loading) return <p>Loading report...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!report) return <p>No report found.</p>;

  return (
    <Layout>
      <BannerContainer>
        {/* todo: replace with real banner content */}
        <Typography variant="h3" fontWeight={700}>
          Welcome to {report.suburbName},{report.state},{report.postcode}
        </Typography>
      </BannerContainer>
      <BodyWrapper minHeight={1000}>
        {/* todo: replace with real card content */}
        <CardWrapper
          minHeight={300}
          title={TITLES.incomeEmployment}
        ></CardWrapper>
        <CardWrapper
          minHeight={300}
          title={TITLES.propertyMarketInsights}
        ></CardWrapper>
        <CardWrapper
          minHeight={300}
          title={TITLES.demandDevelopment}
        ></CardWrapper>
        <CardWrapper minHeight={300} title={TITLES.lifeStyle}></CardWrapper>
        <CardWrapper
          minHeight={300}
          title={TITLES.safetyScore}
        ></CardWrapper>
        <ActionButtonWrapper>
          {/* todo:  replace with real action buttons */}
          <Button>save this suburb</Button>
          <Button>Export PDF</Button>
        </ActionButtonWrapper>
      </BodyWrapper>
    </Layout>
  );
};

export default SuburbReportPage;
