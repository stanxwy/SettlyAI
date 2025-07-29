import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme';
import ThemeDemo from '@/components/ThemeDemo';
import './App.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<ThemeDemo />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
