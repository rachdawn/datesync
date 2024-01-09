import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getDashboardData } from "../services/backend-data.service";
import DashboardTabs from "../components/DashboardTabs";
import "../styles/Dashboard.scss";
import { PageLoader } from "../components/PageLoader";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [error, setError] = useState(null);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const token = await getAccessTokenSilently();
        const response = await getDashboardData(token);

        if (isMounted) {
          setDashboardData(response.data);
          setError(response.error);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [getAccessTokenSilently]);

  return (
    <main>
      <section className="dashboard">
        {error && <div className="dashboard-error">Error: {error}</div>}
        {dashboardData && (
          // We can render our dashboard data here
          // For example, we pass data to DashboardTabs as a prop
          <DashboardTabs data={dashboardData} />
        )}
        {!dashboardData && !error && <PageLoader />}
      </section>
    </main>
  );
};

export default Dashboard;
