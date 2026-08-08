import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { name: "Available", value: 520 },
  { name: "Assigned", value: 380 },
  { name: "Under Maintenance", value: 45 },
  { name: "Scrapped", value: 18 },
]

const COLORS = [
  "#22C55E", // Green
  "#2563EB", // Blue
  "#F59E0B", // Orange
  "#EF4444", // Red
]

export default function AssetStatusChart() {
  return (
    <div className="relative h-60 w-full flex items-center justify-center select-none">
      {/* Center Text inside Donut */}
      <div className="absolute flex flex-col items-center justify-center pointer-events-none">
        <span className="text-3xl font-black text-slate-800 tracking-tight">1,250</span>
        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Total Assets</span>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={65}
            outerRadius={85}
            paddingAngle={3}
            strokeWidth={0}
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "#ffffff", 
              border: "1px solid #f1f5f9", 
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              fontSize: "11px",
              fontWeight: "600",
              color: "#0F172A"
            }} 
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}