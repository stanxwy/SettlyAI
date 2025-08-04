import { Box } from '@mui/material';
import MetricCard from '../MetricCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const demoContent = {
  icon: <AccountBalanceIcon />,
  title: 'Lifestyle Accessibility',
  value: '80%',
  subtitle: '12 months',
};

const LifestyleAccessibilitySection = () => {
  return (
    <Box>
      <MetricCard
        icon={demoContent.icon}
        title={demoContent.title}
        value={demoContent.value}
        subtitle={demoContent.subtitle}
      />
    </Box>
  );
};

export default LifestyleAccessibilitySection;
