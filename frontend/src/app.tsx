import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme';
import ThemeDemo from '@/pages/ThemeDemo';
import './App.css';
import SuburbReportPage from './pages/SuburbReportPage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<ThemeDemo />} />
        <Route path="/suburb-report" element={<SuburbReportPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
