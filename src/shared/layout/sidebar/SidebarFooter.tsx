import { MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";
import { useSidebar } from "./SidebarContext";

export default function SidebarFooter() {
  const { collapsed, toggleSidebar } = useSidebar();

  return (
    <div className="flex flex-col gap-4 border-t border-white/[0.06] p-4 relative overflow-hidden bg-[#070B1C]/50">
      {/* Wave decoration in background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 C30,40 70,60 100,50 L100,100 L0,100 Z" fill="url(#footer-gradient)" />
          <defs>
            <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Profile Card */}
      <div
        className={`relative flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3 backdrop-blur-md shadow-lg transition-all duration-300
          ${collapsed ? "justify-center" : "gap-3"}`}
      >
        <div className="flex items-center gap-3">
          {/* Avatar with gradient and green online indicator */}
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-[#7C3AED] to-[#2563EB] text-sm font-bold text-white shadow-md">
            D
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#070B1C] bg-green-500 shadow-[0_0_8px_#22c55e]" />
          </div>

          {!collapsed && (
            <div className="flex flex-col select-none min-w-0">
              <h4 className="text-xs font-bold text-white tracking-wide truncate">
                Debasish Ghosh
              </h4>
              <p className="text-[10px] text-[#94A3B8] font-medium truncate mt-0.5">
                Admin & Developer
              </p>
            </div>
          )}
        </div>

        {!collapsed && (
          <button className="text-slate-500 hover:text-white transition duration-200 cursor-pointer p-1">
            <MoreVertical size={16} />
          </button>
        )}
      </div>

      {/* Collapse Action Button (Rounded Pill) */}
      <button
        onClick={toggleSidebar}
        className={`flex items-center justify-center gap-2 h-9 rounded-full border border-white/10 bg-white/5 text-[#94A3B8] text-xs font-semibold backdrop-blur-md transition-all duration-300 hover:bg-[#4F7CFF]/10 hover:text-white hover:border-[#4F7CFF]/30 active:scale-95 cursor-pointer
          ${collapsed ? "w-10 px-0 rounded-xl" : "w-full px-4"}`}
      >
        {collapsed ? (
          <ChevronRight size={15} />
        ) : (
          <>
            <ChevronLeft size={15} />
            <span>Collapse Sidebar</span>
          </>
        )}
      </button>
    </div>
  );
}