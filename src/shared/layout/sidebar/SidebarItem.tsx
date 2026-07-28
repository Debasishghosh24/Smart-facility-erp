import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSidebar } from "./SidebarContext";
import type { SidebarItem as SidebarItemType } from "./sidebar.types";
import SidebarSubItem from "./SidebarSubItem";
import { ChevronDown } from "lucide-react";

interface Props {
  item: SidebarItemType;
}

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

  const Icon = item.icon;
  const hasChildren = item.children && item.children.length > 0;

  if (hasChildren) {
    return (
      <div className="space-y-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full relative flex items-center rounded-xl transition-all duration-300 group cursor-pointer text-left
            ${
              collapsed
                ? "justify-center p-3"
                : "gap-3 px-4 py-3"
            }
            ${
              hasActiveChild
                ? "bg-slate-800/50 text-white"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
        >
          {/* Icon */}
          <div
            className={`flex h-4 w-5 items-center justify-center rounded-lg transition-all duration-300
              ${
                hasActiveChild
                  ? "bg-white/10"
                  : "group-hover:bg-slate-700"
              }`}
          >
            <Icon className="h-5 w-5" />
          </div>

          {!collapsed && (
            <>
              <span className="font-medium tracking-wide flex-1">
                {item.title}
              </span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 text-slate-400
                  ${isOpen ? "rotate-180" : ""}`}
              />
            </>
          )}
        </button>

        {isOpen && !collapsed && (
          <div className="space-y-1 mt-1">
            {item.children?.map((child) => (
              <SidebarSubItem
                key={child.id}
                title={child.title}
                path={child.path ?? "#"}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <NavLink
      to={item.path ?? "#"}
      className={({ isActive }) =>
        `relative flex items-center rounded-xl transition-all duration-300 group
        ${
          collapsed
            ? "justify-center p-3"
            : "gap-3 px-4 py-3"
        }
        ${
          isActive
            ? "bg-linear-to-r from-blue-600 to-blue-500 text-white shadow-lg"
            : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {/* Active Indicator */}
          {isActive && (
            <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-white" />
          )}

          {/* Icon */}
          <div
            className={`flex h-4 w-5 items-center justify-center rounded-lg transition-all duration-300
            ${
              isActive
                ? "bg-white/20"
                : "group-hover:bg-slate-700"
            }`}
          >
            <Icon className="h-5 w-5" />
          </div>

          {!collapsed && (
            <span className="font-medium tracking-wide">
              {item.title}
            </span>
          )}
        </>
      )}
    </NavLink>
  );
}