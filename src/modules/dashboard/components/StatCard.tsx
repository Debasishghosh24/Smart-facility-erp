import type { StatCardProps } from "../dashboard.types";

export default function StatCard({
  title,
  value,
  icon: Icon,
  color,
  percentage,
}: StatCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Icon */}
      <div
        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${color}`}
      >
        <Icon className="text-white" size={28} />
      </div>

      {/* Title */}
      <p className="text-sm font-medium text-slate-500">{title}</p>

      {/* Value */}
      <h2 className="mt-2 text-4xl font-bold text-slate-900">{value}</h2>

      {/* Footer */}
      <div className="mt-5 flex items-center gap-2">
        <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
          {percentage}
        </span>

        <span className="text-xs text-slate-500">This Month</span>
      </div>
    </div>
  );
}
