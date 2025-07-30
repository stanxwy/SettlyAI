import type { AppDispatch, RootState } from '@/store';
import { fetchSuburbReport } from '@/store/slices/suburbSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';

type SuburbReportPageProps = {
  location: string;
  suburbId: string;
};
const SuburbReportPage: React.FC<SuburbReportPageProps> = ({ location }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { suburbId, report, loading, error } = useSelector(
    (state: RootState) => state.suburb
  );

  useEffect(() => {
    if (suburbId) {
      dispatch(fetchSuburbReport(suburbId));
    }
  }, [suburbId, dispatch]);

  if (loading) return <p>Loading report...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!report) return <p>No report found.</p>;

  const [stateCode, suburbName] = location.split('+');

  return (
    <div>
      <h2>State: {stateCode}</h2>
      <h3>Suburb: {suburbName}</h3>
      <h3>SuburbID:{suburbId}</h3>
      <pre>{JSON.stringify(report, null, 2)}</pre>
    </div>
  );
};

export default SuburbReportPage;
