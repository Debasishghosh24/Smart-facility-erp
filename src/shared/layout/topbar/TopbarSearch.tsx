import { Search } from "lucide-react";

export default function TopbarSearch() {
  return (
    <div className="relative w-72 lg:w-96 select-none">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      <input
        type="text"
        placeholder="Search assets, employees, vendors, tickets..."
        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 shadow-inner"
      />
    </div>
  )
}