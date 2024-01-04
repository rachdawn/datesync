import DashboardTabs from "../components/DashboardTabs";
import "../styles/Dashboard.scss";

const Dashboard = () => {
  return (
    <main>
      <section className="dashboard">
        <DashboardTabs/>
      </section>
    </main>
  );
};

export default Dashboard;
