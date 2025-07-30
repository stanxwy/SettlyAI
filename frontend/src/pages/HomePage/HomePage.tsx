
import { setSuburbId } from '@/store/slices/suburbSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  type Suburb = {
    suburbName: string;
    state: string;
    suburbId: number;
  };

  const melbourne = { suburbName: 'Melbourn', state: 'VIC', suburbId: 103 };
  const sydney = { suburbName: 'Sydney', state: 'NSW', suburbId: 104 };

  const checkSuburb = (suburb: Suburb) => {
    const { suburbName, state, suburbId } = suburb;

    dispatch(setSuburbId(suburbId));
    const encodedLocation = `${state}+${suburbName}`;
    navigate(`/suburb/${encodedLocation}`, { state: { suburbId } });
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={()=>checkSuburb(sydney)}>Go to Sydney</button>
      <button onClick={()=>checkSuburb(melbourne)}>Go to Melbourne</button>
    </div>
  );
};

export default HomePage;
