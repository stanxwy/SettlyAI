import { useParams } from "react-router-dom";
import SuburbReportPage from "./SuburbReportPage";

 function SuburbWrapper(){
  const { location } = useParams();
  return <SuburbReportPage location={location || ''}/>;
};

export default SuburbWrapper;