import { Box, styled } from '@mui/material';
import LifestyleAccessibilitySection from './components/LifestyleAccessibilitySection';

const PageContainer = styled(Box)(({ theme }) => ({
  maxWidth: '1440px',
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto',
  padding: theme.spacing(8),
  border: '1px solid black',
}));

const SuburbReportPage = () => {
  return (
    <PageContainer>
      <LifestyleAccessibilitySection />
    </PageContainer>
  );
};

export default SuburbReportPage;
