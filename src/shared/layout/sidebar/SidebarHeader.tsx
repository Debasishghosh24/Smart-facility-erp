import { useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import { useSidebar } from "./SidebarContext"

interface SidebarHeaderProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export default function SidebarHeader({ searchQuery, setSearchQuery }: SidebarHeaderProps) {
  const { collapsed, toggleSidebar } = useSidebar()
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Focus search input on Command/Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        searchInputRef.current?.focus()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="flex flex-col gap-4 px-5 pt-6 pb-4 border-b border-white/[0.06]">
      {/* Logo and Collapse Button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 overflow-hidden">
          {/* Logo icon with premium gradient */}
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-[#7C3AED] to-[#2563EB] text-lg font-bold text-white shadow-[0_0_15px_rgba(124,58,237,0.3)]">
            S
            {/* Small glowing overlay */}
            <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>

          {!collapsed && (
            <div className="flex flex-col select-none">
              <span className="text-sm font-bold text-white tracking-wider leading-none">
                Smart Facility
              </span>
              <span className="text-[10px] font-semibold text-[#4F7CFF] uppercase tracking-[0.15em] mt-1">
                Asset ERP
              </span>
            </div>
          )}
        </div>

        {/* Circular glass collapse button */}
        {!collapsed && (
          <button
            onClick={toggleSidebar}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:text-white hover:border-white/20 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronLeft size={16} strokeWidth={2} />
          </button>
        )}
      </div>

      {/* Collapse button for when it is collapsed */}
      {collapsed && (
        <div className="flex justify-center mt-2">
          <button
            onClick={toggleSidebar}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:text-white hover:border-white/20 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronRight size={16} strokeWidth={2} />
          </button>
        </div>
      )}

      {/* Search Input Container */}
      {!collapsed && (
        <div className="relative w-full mt-2">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" strokeWidth={2} />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search menu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-9 rounded-xl border border-white/[0.08] bg-white/[0.03] pl-9 pr-12 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4F7CFF]/50 focus:bg-white/[0.05] transition-all duration-200"
          />
          <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none inline-flex h-5 select-none items-center gap-0.5 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[8px] font-medium text-slate-400">
            <span>⌘</span>K
          </kbd>
        </div>
      )}
    </div>
  )
}