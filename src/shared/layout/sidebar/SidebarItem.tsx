import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSidebar } from "./SidebarContext";
import type { SidebarItem as SidebarItemType } from "./sidebar.types";
import {
  LayoutDashboard,
  Building,
  Briefcase,
  MapPin,
  Users,
  Building2,
  ClipboardList,
  Wrench,
  BarChart3,
  Settings,
  ChevronDown
} from "lucide-react";

interface Props {
  item: SidebarItemType;
}

// Subtitles for premium enterprise appearance
const itemSubtitles: Record<string, string> = {
  dashboard: "Overview & Analytics",
  department: "Asset Categories",
  site: "Business Locations",
  employee: "Staff & Users",
  vendor: "Partners & Suppliers",
  assignment: "Asset Assignment",
  maintenance: "Work Orders",
  reports: "System Analytics",
  settings: "System Configuration",
};

// Lucide icon helper mapping
const getLucideIcon = (id: string) => {
  switch (id) {
    case "dashboard":
      return LayoutDashboard;
    case "masters":
      return Building;
    case "department":
      return Briefcase;
    case "site":
      return MapPin;
    case "employee":
      return Users;
    case "vendor":
      return Building2;
    case "assignment":
      return ClipboardList;
    case "maintenance":
      return Wrench;
    case "reports":
      return BarChart3;
    case "settings":
      return Settings;
    default:
      return LayoutDashboard;
  }
};

export default function SidebarItem({ item }: Props) {
  const { collapsed } = useSidebar();
  const location = useLocation();

  // Check if any child is active to keep parent open
  const hasActiveChild = item.children && item.children.some(
    child => child.path && location.pathname.startsWith(child.path)
  );

  const [isOpen, setIsOpen] = useState(!!hasActiveChild);

  useEffect(() => {
    if (hasActiveChild) {
      setIsOpen(true);
    }
  }, [hasActiveChild]);

  const Icon = getLucideIcon(item.id);
  const hasChildren = item.children && item.children.length > 0;

  if (hasChildren) {
    return (
      <div className="space-y-1.5">
        {/* Section Title Separator above Masters Group */}
        {item.id === "masters" && !collapsed && (
          <div className="px-3 pt-4 pb-2 flex items-center gap-2 select-none">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4F7CFF] animate-pulse shadow-[0_0_8px_#4f7cff]" />
            <span className="text-[9px] font-bold tracking-[0.2em] text-[#94A3B8] uppercase">
              • MASTERS •
            </span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full relative flex items-center rounded-2xl transition-all duration-250 group cursor-pointer text-left h-[60px]
            ${
              collapsed
                ? "justify-center p-3"
                : "gap-3.5 px-4"
            }
            ${
              hasActiveChild
                ? "bg-white/[0.04] border border-white/[0.06] text-white shadow-lg backdrop-blur-sm"
                : "text-[#94A3B8] hover:bg-white/[0.04] hover:text-white hover:scale-[1.02] border border-transparent hover:border-white/[0.06] hover:shadow-lg hover:shadow-black/10 active:scale-[0.98]"
            }`}
        >
          {/* Hover glowing indicator */}
          {!hasActiveChild && (
            <span className="absolute left-0 top-3 bottom-3 w-0.5 rounded-r bg-[#4F7CFF] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          )}

          {/* Icon with gradient accent container */}
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300
              ${
                hasActiveChild
                  ? "bg-gradient-to-tr from-[#7C3AED]/20 to-[#2563EB]/20 text-[#4F7CFF] border border-[#4F7CFF]/20"
                  : "bg-white/[0.03] group-hover:bg-[#4F7CFF]/10 text-[#94A3B8] group-hover:text-[#4F7CFF] border border-transparent group-hover:border-[#4F7CFF]/20"
              }`}
          >
            <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
          </div>

          {!collapsed && (
            <>
              <div className="flex-1 min-w-0 flex flex-col select-none">
                <span className="font-semibold text-xs text-white tracking-wide">
                  {item.title}
                </span>
                <span className="text-[10px] text-[#94A3B8] truncate mt-0.5 font-medium">
                  Manage Databases
                </span>
              </div>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-300 text-slate-400 group-hover:text-white
                  ${isOpen ? "rotate-180" : ""}`}
              />
            </>
          )}
        </button>

        {isOpen && !collapsed && (
          <div className="ml-2 pl-3 pr-1 py-2.5 rounded-[20px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md shadow-inner space-y-1 transition-all duration-300">
            {item.children?.map((child) => {
              const ChildIcon = getLucideIcon(child.id);
              const isChildActive = location.pathname.startsWith(child.path ?? "");
              return (
                <NavLink
                  key={child.id}
                  to={child.path ?? "#"}
                  className={`flex items-center gap-3.5 px-4 h-[50px] rounded-xl transition-all duration-250 group
                    ${
                      isChildActive
                        ? "bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white shadow-[0_0_15px_rgba(124,58,237,0.2)] border border-white/10"
                        : "text-[#94A3B8] hover:bg-white/[0.03] hover:text-white hover:scale-[1.01]"
                    }`}
                >
                  {/* Left Active Indicator Pill */}
                  {isChildActive && (
                    <span className="absolute left-1 h-4 w-1 rounded-full bg-white/80 animate-pulse" />
                  )}

                  <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-all duration-300
                    ${isChildActive ? "bg-white/20 text-white" : "bg-white/[0.02] text-[#94A3B8] group-hover:text-[#4F7CFF]"}`}
                  >
                    <ChildIcon className="h-[14px] w-[14px]" strokeWidth={1.75} />
                  </div>

                  <div className="flex flex-col min-w-0">
                    <span className="font-semibold text-xs tracking-wide">
                      {child.title}
                    </span>
                    <span className={`text-[9px] truncate font-medium ${isChildActive ? "text-white/70" : "text-[#94A3B8]/70"}`}>
                      {itemSubtitles[child.id] || "Details"}
                    </span>
                  </div>
                </NavLink>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <NavLink
      to={item.path ?? "#"}
      className={({ isActive }) =>
        `relative flex items-center rounded-2xl transition-all duration-250 group h-[60px] cursor-pointer
        ${
          collapsed
            ? "justify-center p-3"
            : "gap-3.5 px-4"
        }
        ${
          isActive
            ? "bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white shadow-[0_0_15px_rgba(124,58,237,0.25)] border border-white/10 scale-[1.02]"
            : "text-[#94A3B8] hover:bg-white/[0.04] hover:text-white hover:scale-[1.02] border border-transparent hover:border-white/[0.06] hover:shadow-lg hover:shadow-black/10 active:scale-[0.98]"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {/* Glowing indicator line on hover/active */}
          {isActive ? (
            <span className="absolute left-1.5 w-1 h-5 rounded-full bg-white/80 animate-pulse" />
          ) : (
            <span className="absolute left-0 top-3 bottom-3 w-0.5 rounded-r bg-[#4F7CFF] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          )}

          {/* Icon with gradient bg */}
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300
            ${
              isActive
                ? "bg-white/20 text-white"
                : "bg-white/[0.03] group-hover:bg-[#4F7CFF]/10 text-[#94A3B8] group-hover:text-[#4F7CFF] border border-transparent group-hover:border-[#4F7CFF]/20"
            }`}
          >
            <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
          </div>

          {!collapsed && (
            <div className="flex-grow min-w-0 flex flex-col select-none">
              <span className="font-semibold text-xs tracking-wide">
                {item.title}
              </span>
              <span className={`text-[10px] truncate font-medium ${isActive ? "text-white/70" : "text-[#94A3B8]/70"} mt-0.5`}>
                {itemSubtitles[item.id] || "Navigate"}
              </span>
            </div>
          )}
        </>
      )}
    </NavLink>
  );
}