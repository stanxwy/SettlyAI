import { useParams } from "react-router-dom";
import SuburbReportPage from "./SuburbReportPage";

 const SuburbWrapper: React.FC = () => {
  const { location } = useParams();
  return <SuburbReportPage location={location || ''} suburbId={""} />;
};

export default SuburbWrapper;