import TopNavBar from "../../TopNavBar";
import '../../../styles/layouts/page-layout.scss'
import Footer from "../../Footer";

export const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <TopNavBar />
      <div className="page-layout__content">{children}</div>
      <Footer />
    </div>
  );
};