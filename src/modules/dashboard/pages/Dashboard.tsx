import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Calendar, 
  Clock, 
  Plus, 
  UserPlus, 
  AlertCircle, 
  Link as LinkIcon,
  Layers,
  Building,
  ArrowRight
} from "lucide-react";

import StatCard from "../components/StatCard";
import DashboardCharts from "../components/DashboardCharts";
import RecentActivities from "../components/RecentActivities";
import RecentMaintenance from "../components/RecentMaintenance";

import { dashboardStats } from "../dashboard.mock";

export default function Dashboard() {
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState("Good Evening");

  // Dynamic greeting based on current local time
  useEffect(() => {
    const hr = new Date().getHours();
    if (hr < 12) setGreeting("Good Morning");
    else if (hr < 17) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  const todayStr = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Mock Asset Categories data
  const categories = [
    { name: "IT Assets", percentage: 70, color: "bg-blue-500" },
    { name: "Furniture", percentage: 45, color: "bg-purple-500" },
    { name: "Machinery", percentage: 30, color: "bg-amber-500" },
    { name: "Office Supplies", percentage: 15, color: "bg-emerald-500" },
  ];

  // Mock Top Departments data
  const departments = [
    { name: "Administration", count: 42, color: "bg-blue-500" },
    { name: "Operations", count: 28, color: "bg-emerald-500" },
    { name: "Information Technology", count: 12, color: "bg-purple-500" },
    { name: "Human Resources", count: 4, color: "bg-amber-500" },
  ];

  return (
    <div className="space-y-8 bg-[#F8FAFC] min-h-screen pb-12 select-none">
      
      {/* ================= GREETING SECTION ================= */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-b border-slate-100 pb-6">
        <div>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight">
            {greeting}, Debasish 👋
          </h1>
          <p className="text-sm text-slate-400 font-semibold mt-1">
            Welcome back to Smart Facility ERP. Manage your assets, employees and maintenance.
          </p>
        </div>

        {/* Right Info Cards */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Date Card */}
          <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-2.5 shadow-sm">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Calendar size={16} />
            </div>
            <div className="text-left">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Date Today</p>
              <p className="text-xs font-bold text-slate-700 mt-0.5">{todayStr}</p>
            </div>
          </div>

          {/* Last Login Card */}
          <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-2.5 shadow-sm">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <Clock size={16} />
            </div>
            <div className="text-left">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Last Login</p>
              <p className="text-xs font-bold text-slate-700 mt-0.5">Today, 10:24 AM</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= STATISTICS CARDS ================= */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((item) => (
          <StatCard key={item.title} {...item} />
        ))}
      </div>

      {/* ================= SECOND ROW (Charts & Activities) ================= */}
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <DashboardCharts />
        </div>
        <RecentActivities />
      </div>

      {/* ================= THIRD ROW (Premium Cards Grid) ================= */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        
        {/* Card 1: Asset Category */}
        <div className="rounded-[20px] border border-slate-100 bg-white p-6 shadow-sm flex flex-col justify-between hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300">
          <div>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-base font-bold text-slate-800 tracking-tight">
                Asset Categories
              </h2>
              <Layers className="h-4 w-4 text-slate-400" />
            </div>
            <div className="space-y-4">
              {categories.map((cat) => (
                <div key={cat.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-500">{cat.name}</span>
                    <span className="font-bold text-slate-800">{cat.percentage}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div className={`h-full rounded-full ${cat.color}`} style={{ width: `${cat.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="mt-5 w-full py-2.5 rounded-xl border border-slate-100 hover:border-slate-200 bg-slate-50/50 hover:bg-slate-50 text-xs font-bold text-slate-600 transition-all duration-200 active:scale-[0.98] cursor-pointer">
            View All Categories
          </button>
        </div>

        {/* Card 2: Top Departments */}
        <div className="rounded-[20px] border border-slate-100 bg-white p-6 shadow-sm flex flex-col justify-between hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300">
          <div>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-base font-bold text-slate-800 tracking-tight">
                Top Departments
              </h2>
              <Building className="h-4 w-4 text-slate-400" />
            </div>
            <div className="space-y-4">
              {departments.map((dept) => (
                <div key={dept.name} className="flex items-center justify-between border-b border-slate-50 pb-2">
                  <span className="text-xs font-semibold text-slate-500">{dept.name}</span>
                  <span className="text-xs font-extrabold text-slate-800 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100/50">
                    {dept.count} Staffs
                  </span>
                </div>
              ))}
            </div>
          </div>
          <button className="mt-5 w-full py-2.5 rounded-xl border border-slate-100 hover:border-slate-200 bg-slate-50/50 hover:bg-slate-50 text-xs font-bold text-slate-600 transition-all duration-200 active:scale-[0.98] cursor-pointer">
            Department Directory
          </button>
        </div>

        {/* Card 3: Upcoming Maintenance */}
        <RecentMaintenance />

        {/* Card 4: Quick Actions */}
        <div className="rounded-[20px] border border-slate-100 bg-white p-6 shadow-sm flex flex-col justify-between hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300">
          <div>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-base font-bold text-slate-800 tracking-tight">
                Quick Actions
              </h2>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {/* Add Asset */}
              <button 
                onClick={() => navigate("/site/add")}
                className="flex flex-col items-center justify-center p-3.5 rounded-xl border border-slate-100 hover:border-blue-100 bg-slate-50/50 hover:bg-blue-50/20 text-slate-700 hover:text-blue-600 transition-all duration-200 cursor-pointer active:scale-95 group"
              >
                <Plus size={18} className="text-slate-400 group-hover:text-blue-500 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-[10px] font-bold mt-2 uppercase tracking-wide">Add Asset</span>
              </button>

              {/* Add Employee */}
              <button 
                onClick={() => navigate("/employee/add")}
                className="flex flex-col items-center justify-center p-3.5 rounded-xl border border-slate-100 hover:border-purple-100 bg-slate-50/50 hover:bg-purple-50/20 text-slate-700 hover:text-purple-600 transition-all duration-200 cursor-pointer active:scale-95 group"
              >
                <UserPlus size={18} className="text-slate-400 group-hover:text-purple-500 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-[10px] font-bold mt-2 uppercase tracking-wide">Add Staff</span>
              </button>

              {/* Raise Complaint */}
              <button 
                className="flex flex-col items-center justify-center p-3.5 rounded-xl border border-slate-100 hover:border-red-100 bg-slate-50/50 hover:bg-red-50/20 text-slate-700 hover:text-red-600 transition-all duration-200 cursor-pointer active:scale-95 group"
              >
                <AlertCircle size={18} className="text-slate-400 group-hover:text-red-500 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-[10px] font-bold mt-2 uppercase tracking-wide">Complaint</span>
              </button>

              {/* Assign Asset */}
              <button 
                className="flex flex-col items-center justify-center p-3.5 rounded-xl border border-slate-100 hover:border-emerald-100 bg-slate-50/50 hover:bg-emerald-50/20 text-slate-700 hover:text-emerald-600 transition-all duration-200 cursor-pointer active:scale-95 group"
              >
                <LinkIcon size={18} className="text-slate-400 group-hover:text-emerald-500 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-[10px] font-bold mt-2 uppercase tracking-wide">Assign</span>
              </button>
            </div>
          </div>

          <button className="mt-5 w-full py-2.5 rounded-xl border border-slate-100 hover:border-slate-200 bg-slate-50/50 hover:bg-slate-50 text-xs font-bold text-slate-600 transition-all duration-200 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-1.5 group">
            <span>Admin Control Panel</span>
            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>
        </div>

      </div>

      {/* ================= FOOTER ================= */}
      <footer className="pt-8 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-semibold uppercase tracking-wider">
        <span>© 2026 Smart Facility ERP</span>
        <span>Version 1.0.0</span>
      </footer>

    </div>
  );
}
