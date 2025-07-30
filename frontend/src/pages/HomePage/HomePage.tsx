import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    const suburbName = 'Sydney';
    const state = 'NSW';
    const suburbId = '104';

    const encodedLocation = `${state}+${suburbName}`;
    navigate(`/suburb/${encodedLocation}`, { state: { suburbId } });
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleNavigation}>Go to Sydney</button>
    </div>
  );
};

export default HomePage;
