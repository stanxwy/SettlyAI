import ActionButtonContainer from '@/components/containers/ActionButtonContainer';
import BannerContainer from '@/components/containers/BannerContainer';
import BodyContainer from '@/components/containers/BodyContainer';
import CardContainer from '@/components/containers/CardConatiner';
import FooterContainer from '@/components/Footer';
import NavbarContainer from '@/components/NavBar';
import { TITLES } from '@/constants/titles';
import type { AppDispatch, RootState } from '@/store';
import { fetchSuburbReport, setSuburbId } from '@/store/slices/suburbSlice';
import { Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';

type SuburbReportPageProps = {
  location: string;
  suburbId: string;
};
// const SuburbReportPage: React.FC<SuburbReportPageProps> = ({ location }) => {
const SuburbReportPage: React.FC<SuburbReportPageProps> = () => {
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

  // const [stateCode, suburbName] = location.split('+');

  return (
    <div>
      <NavbarContainer></NavbarContainer>
      <BannerContainer>
        {/* todo: replace with real banner content */}
        <Typography variant="h3" fontWeight={700}>
          Welcome to {report.suburbName},{report.state},{report.postcode}
        </Typography>
      </BannerContainer>
      <BodyContainer minHeight={1000}>
        {/* todo: replace with real card content */}
        <CardContainer
          minHeight={300}
          title={TITLES.incomeEmployment}
        ></CardContainer>
        <CardContainer
          minHeight={300}
          title={TITLES.propertyMarketInsights}
        ></CardContainer>
        <CardContainer
          minHeight={300}
          title={TITLES.demandDevelopment}
        ></CardContainer>
        <CardContainer minHeight={300} title={TITLES.lifeStyle}></CardContainer>
        <CardContainer
          minHeight={300}
          title={TITLES.safetyScore}
        ></CardContainer>
        <ActionButtonContainer>
          {/* todo:  replace with real action buttons */}
          <Button>save this suburb</Button>
          <Button>Export PDF</Button>
        </ActionButtonContainer>
      </BodyContainer>
      <FooterContainer></FooterContainer>
    </div>
  );
};

export default SuburbReportPage;
