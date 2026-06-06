import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AnalyticsChart from "../components/AnalyticsChart";

function Analytics() {
  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="dashboard">
        <h1>Analytics</h1>

        <AnalyticsChart />
      </div>
    </>
  );
}

export default Analytics;