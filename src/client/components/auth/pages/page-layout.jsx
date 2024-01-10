import TopNavBar from "../../TopNavBar";
import '../../../styles/layouts/page-layout.css'

export const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <TopNavBar />
      <div className="page-layout__content">{children}</div>
      {/* Page footer can be here */}
    </div>
  );
};