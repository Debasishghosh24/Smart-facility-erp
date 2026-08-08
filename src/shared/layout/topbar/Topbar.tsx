import { useState } from "react";
import { Sun, Moon, Bell, Menu } from "lucide-react";
import TopbarSearch from "./TopbarSearch";
import TopbarProfile from "./TopbarProfile";
import Breadcrumb from "../breadcrumbs/BreadCrumb";

export default function Topbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-slate-100 bg-white/80 backdrop-blur-md px-6 shadow-sm shadow-slate-100/30">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button className="rounded-xl border border-slate-100 p-2 hover:bg-slate-50 text-slate-600 transition-all duration-200 active:scale-95 cursor-pointer">
          <Menu size={18} strokeWidth={2} />
        </button>

        <Breadcrumb />
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <TopbarSearch />

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="rounded-xl border border-slate-100 p-2 hover:bg-slate-50 text-slate-600 transition-all duration-200 active:scale-95 cursor-pointer"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Notification Bell */}
        <button className="relative rounded-xl border border-slate-100 p-2 hover:bg-slate-50 text-slate-600 transition-all duration-200 active:scale-95 cursor-pointer">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
        </button>

        <TopbarProfile />
      </div>
    </header>
  )
}