import { ChevronDown } from "lucide-react";

export default function TopbarProfile() {
  return (
    <div className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-100 bg-white px-3 py-1.5 shadow-sm hover:shadow hover:bg-slate-50 transition duration-200 select-none">
      <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-[#7C3AED] to-[#2563EB] text-xs font-bold text-white shadow-md shadow-blue-500/20">
        D
        <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-500" />
      </div>

      <div className="hidden sm:block text-left">
        <p className="text-xs font-bold text-slate-800 leading-none">
          Debasish
        </p>
        <p className="text-[10px] text-slate-400 font-medium mt-0.5">
          Admin
        </p>
      </div>

      <ChevronDown size={14} className="text-slate-400" />
    </div>
  )
}