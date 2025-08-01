import { useParams } from "react-router-dom";
import SuburbReportPage from "./SuburbReportPage";

 const SuburbWrapper = () => {
  const { location } = useParams();
  return <SuburbReportPage location={location || ''}/>;
};

export default SuburbWrapper;