import DashboardTabs from "../components/DashboardTabs";
import "../styles/Dashboard.scss";

const Dashboard = () => {
  return (
    <main>
      <section className="dashboard">
        <header>
          <DashboardTabs/>
        </header>
      </section>
    </main>
  );
};

export default Dashboard;
