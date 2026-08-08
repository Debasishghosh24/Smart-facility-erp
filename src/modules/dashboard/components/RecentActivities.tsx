import { FileText, Settings, UserCheck, AlertTriangle } from "lucide-react";
import { recentActivities } from "../dashboard.mock";

export default function RecentActivities() {
  const getActivityStyles = (type: string) => {
    switch (type) {
      case "success":
        return {
          icon: UserCheck,
          bgColor: "bg-green-50 text-green-600 border-green-100/50",
        };
      case "warning":
        return {
          icon: AlertTriangle,
          bgColor: "bg-amber-50 text-amber-600 border-amber-100/50",
        };
      case "info":
        return {
          icon: Settings,
          bgColor: "bg-blue-50 text-blue-600 border-blue-100/50",
        };
      default:
        return {
          icon: FileText,
          bgColor: "bg-purple-50 text-purple-600 border-purple-100/50",
        };
    }
  };

  return (
    <div className="rounded-[20px] border border-slate-100 bg-white p-6 shadow-sm flex flex-col justify-between hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300">
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-800 tracking-tight">
            Recent Activities
          </h2>
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
        </div>

        {/* Timeline body */}
        <div className="relative pl-6 space-y-6">
          {/* Vertical connecting line */}
          <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-slate-100" />

          {recentActivities.map((activity) => {
            const styles = getActivityStyles(activity.type);
            const ActIcon = styles.icon;

            return (
              <div key={activity.id} className="relative flex items-start gap-4 group">
                {/* Timeline Dot Indicator */}
                <div className={`absolute -left-[23px] mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border bg-white shadow-sm transition-transform group-hover:scale-110 duration-200 ${styles.bgColor}`}>
                  <ActIcon size={12} strokeWidth={2.5} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs font-bold text-slate-800 truncate tracking-wide">
                      {activity.title}
                    </p>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider shrink-0">
                      {activity.time}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button className="mt-6 w-full py-2.5 rounded-xl border border-slate-100 hover:border-slate-200 bg-slate-50/50 hover:bg-slate-50 text-xs font-bold text-slate-600 transition-all duration-200 active:scale-[0.98] cursor-pointer">
        View All Activities
      </button>
    </div>
  );
}