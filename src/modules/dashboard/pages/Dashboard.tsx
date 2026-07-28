import StatCard from "../components/StatCard";
import DashboardCharts from "../components/DashboardCharts";
import RecentActivities from "../components/RecentActivities";
import RecentMaintenance from "../components/RecentMaintenance";

import { dashboardStats } from "../dashboard.mock";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <p className="mb-6 text-xl font-semibold tracking-tight text-slate-700">
  Welcome to{" "}
  <span className="text-blue-600">
    Smart Facility ERP
  </span>
</p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((item) => (
          <StatCard key={item.title} {...item} />
        ))}
      </div>

      {/* Middle Section */}
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <DashboardCharts />
        </div>

        <RecentActivities />
      </div>

      {/* Bottom */}
      <RecentMaintenance />
    </div>
  );
}
