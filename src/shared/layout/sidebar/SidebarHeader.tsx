import {
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react"
import { useSidebar } from "./SidebarContext"

export default function SidebarHeader() {
  const { collapsed, toggleSidebar } = useSidebar()

  return (
    <div
      className={`flex h-20 items-center border-b border-slate-800 transition-all duration-300 ${
        collapsed ? "justify-center px-2" : "justify-between px-5"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 overflow-hidden">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-blue-700 text-lg font-bold text-white shadow-lg">
          S
        </div>

        {!collapsed && (
          <div className="transition-all duration-300">
            <h1 className="text-lg font-bold text-white">
              Smart Facility
            </h1>

            <p className="text-xs text-slate-400">
              Asset ERP
            </p>
          </div>
        )}
      </div>

      {!collapsed && (
        <button
          onClick={toggleSidebar}
          className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
        >
          <IconChevronLeft size={15} />
        </button>
      )}

      {collapsed && (
        <button
          onClick={toggleSidebar}
          className="absolute top-6 right-2 rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white"
        >
          <IconChevronRight size={15} />
        </button>
      )}
    </div>
  )
}