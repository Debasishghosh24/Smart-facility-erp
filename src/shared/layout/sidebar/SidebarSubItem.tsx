import { NavLink } from "react-router-dom"

interface SidebarSubItemProps {
  title: string
  path: string
}

export default function SidebarSubItem({
  title,
  path,
}: SidebarSubItemProps) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `block rounded-lg px-10 py-2 text-sm transition-all ${
          isActive
            ? "bg-blue-600 text-white"
            : "text-slate-400 hover:bg-slate-800 hover:text-white"
        }`
      }
    >
      {title}
    </NavLink>
  )
}