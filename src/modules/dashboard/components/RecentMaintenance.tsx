import { Calendar, User, Wrench } from "lucide-react";
import { recentMaintenances } from "../dashboard.mock";

export default function RecentMaintenance() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-50 text-green-700 border-green-100/50";
      case "Pending":
        return "bg-amber-50 text-amber-700 border-amber-100/50";
      default:
        return "bg-blue-50 text-blue-700 border-blue-100/50";
    }
  };

  return (
    <div className="rounded-[20px] border border-slate-100 bg-white p-6 shadow-sm flex flex-col justify-between hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300">
      <div>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-800 tracking-tight">
            Upcoming Maintenance
          </h2>
          <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-blue-600">
            Active
          </span>
        </div>

        <div className="space-y-4">
          {recentMaintenances.map((item) => (
            <div key={item.id} className="group flex items-start gap-3 rounded-xl border border-slate-50 hover:border-slate-100 p-2.5 hover:bg-slate-50/50 transition-all duration-200">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100/30">
                <Wrench size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1.5">
                  <h4 className="text-xs font-bold text-slate-800 truncate tracking-wide">
                    {item.asset}
                  </h4>
                  <span className={`rounded-md border px-1.5 py-0.5 text-[9px] font-bold tracking-wide ${getStatusBadge(item.status)}`}>
                    {item.status}
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-1.5 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                  <span className="flex items-center gap-1">
                    <User size={10} />
                    {item.engineer.split(" ")[0]}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={10} />
                    {item.date.split(" ").slice(0,2).join(" ")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="mt-5 w-full py-2 rounded-xl border border-slate-100 hover:border-slate-200 bg-slate-50/50 hover:bg-slate-50 text-xs font-bold text-slate-600 transition-all duration-200 active:scale-[0.98] cursor-pointer">
        View Schedule
      </button>
    </div>
  );
}