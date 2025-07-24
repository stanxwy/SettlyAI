import { Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>page</div>} />
    </Routes>
  );
};

export default App;
