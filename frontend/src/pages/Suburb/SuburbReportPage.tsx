import React from 'react';
import { useLocation } from 'react-router-dom';

type SuburbReportPageProps = {
  location: string;
  suburbId: string;
};
const SuburbReportPage: React.FC<SuburbReportPageProps> = ({location}) => {
 

   const { state } = useLocation() as { state: { suburbId?: string } };

  console.log("location",location);
  console.log("suburb",state.suburbId);
 

  if (!location || !location.includes('+')) {
    return <div>Invalid URL</div>;
  }
  if(!state.suburbId) {
    return <div>suburb not found</div>
  }

  const [stateCode, suburbName] = location.split('+');


  return (
    <div>
      <h2>State: {stateCode}</h2>
      <h3>Suburb: {suburbName}</h3>
      <h3>SuburbID:{state.suburbId}</h3>
    </div>
  );
};

export default SuburbReportPage;
