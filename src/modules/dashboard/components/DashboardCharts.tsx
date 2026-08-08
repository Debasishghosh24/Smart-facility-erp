import { RefreshCw, ArrowRight } from "lucide-react";
import AssetStatusChart from "./charts/AssetStatusChart"

export default function DashboardCharts() {
  const legendItems = [
    { name: "Available", value: 520, color: "bg-[#22C55E]" },
    { name: "Assigned", value: 380, color: "bg-[#2563EB]" },
    { name: "Under Maintenance", value: 45, color: "bg-[#F59E0B]" },
    { name: "Scrapped", value: 18, color: "bg-[#EF4444]" },
  ];

  return (
    <div className="rounded-[20px] border border-slate-100 bg-white p-6 shadow-sm flex flex-col justify-between hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300 h-full select-none">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-800 tracking-tight">
            Asset Status Overview
          </h2>
          <button className="text-slate-400 hover:text-slate-600 transition p-1 cursor-pointer">
            <RefreshCw size={14} />
          </button>
        </div>
        <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-1">Real-time asset deployment status</p>
      </div>

      {/* Main Row */}
      <div className="grid gap-6 md:grid-cols-5 items-center mt-4">
        {/* Left Chart (3 columns) */}
        <div className="md:col-span-3">
          <AssetStatusChart />
        </div>

        {/* Right Legend (2 columns) */}
        <div className="md:col-span-2 space-y-3.5 pl-2">
          {legendItems.map((item) => (
            <div key={item.name} className="flex items-center justify-between border-b border-slate-50 pb-2">
              <div className="flex items-center gap-2.5">
                <span className={`h-2.5 w-2.5 rounded-full ${item.color} shadow-sm`} />
                <span className="text-xs font-bold text-slate-500">{item.name}</span>
              </div>
              <span className="text-xs font-black text-slate-800">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
        <span className="text-slate-400">Updated just now</span>
        <button className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 transition cursor-pointer">
          <span>View Report</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  )
}