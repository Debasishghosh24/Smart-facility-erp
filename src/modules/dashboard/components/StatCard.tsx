import { MoreHorizontal } from "lucide-react";
import type { StatCardProps } from "../dashboard.types";

export default function StatCard({
  title,
  value,
  icon: Icon,
  percentage,
}: StatCardProps) {
  const isNegative = percentage.startsWith("-");

  // Mock SVG paths for clean, elegant Sparkline charts
  const getSparklinePath = () => {
    switch (title) {
      case "Total Assets":
        return "M0 15 Q 15 5, 30 18 T 60 8 T 90 2 M 90 2 L 90 25 L 0 25 Z";
      case "Open Complaints":
        return "M0 2 Q 15 15, 30 10 T 60 18 T 90 12 M 90 12 L 90 25 L 0 25 Z";
      case "Employees":
        return "M0 20 Q 15 18, 30 8 T 60 5 T 90 2 M 90 2 L 90 25 L 0 25 Z";
      case "Maintenance":
        return "M0 5 Q 15 12, 30 8 T 60 15 T 90 18 M 90 18 L 90 25 L 0 25 Z";
      default:
        return "M0 10 Q 15 10, 30 10 T 60 10 T 90 10 L 90 25 L 0 25 Z";
    }
  };

  const getSparklineLine = () => {
    switch (title) {
      case "Total Assets":
        return "M0 15 Q 15 5, 30 18 T 60 8 T 90 2";
      case "Open Complaints":
        return "M0 2 Q 15 15, 30 10 T 60 18 T 90 12";
      case "Employees":
        return "M0 20 Q 15 18, 30 8 T 60 5 T 90 2";
      case "Maintenance":
        return "M0 5 Q 15 12, 30 8 T 60 15 T 90 18";
      default:
        return "M0 10 Q 15 10, 30 10 T 60 10 T 90 10";
    }
  };

  const strokeColor = isNegative ? "#EF4444" : "#22C55E";
  const fillColor = isNegative ? "rgba(239, 68, 68, 0.04)" : "rgba(34, 197, 94, 0.04)";

  return (
    <div
      className="
        rounded-[20px]
        border
        border-slate-100/80
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1.5
        hover:shadow-lg
        hover:shadow-slate-200/50
        flex
        flex-col
        justify-between
        relative
        group
        overflow-hidden
        select-none
      "
    >
      {/* Top Header Row */}
      <div className="flex items-center justify-between">
        {/* Gradient Icon Container */}
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr ${
            title === "Total Assets"
              ? "from-blue-500/10 to-blue-500/20 text-blue-600"
              : title === "Open Complaints"
              ? "from-red-500/10 to-red-500/20 text-red-600"
              : title === "Employees"
              ? "from-green-500/10 to-green-500/20 text-green-600"
              : "from-amber-500/10 to-amber-500/20 text-amber-600"
          } border border-transparent transition-colors group-hover:border-current/15`}
        >
          <Icon className="h-5 w-5" strokeWidth={2} />
        </div>

        <button className="text-slate-400 hover:text-slate-600 p-1 transition duration-200 cursor-pointer">
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* Main Info */}
      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{title}</p>
          <h2 className="mt-1 text-3xl font-extrabold text-slate-800 tracking-tight">{value}</h2>
        </div>

        {/* Mini Sparkline Chart */}
        <div className="h-10 w-24 select-none opacity-80 group-hover:opacity-100 transition-opacity duration-200">
          <svg className="w-full h-full" viewBox="0 0 90 25">
            <path
              d={getSparklinePath()}
              fill={fillColor}
            />
            <path
              d={getSparklineLine()}
              fill="none"
              stroke={strokeColor}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-4 pt-4 border-t border-slate-50 flex items-center gap-2">
        <span
          className={`rounded-lg px-2 py-0.5 text-[10px] font-bold tracking-wide
            ${isNegative ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}`}
        >
          {percentage}
        </span>
        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">This Month</span>
      </div>
    </div>
  );
}
