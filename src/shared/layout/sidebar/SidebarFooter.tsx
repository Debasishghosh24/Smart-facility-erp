import { IconUserCircle } from "@tabler/icons-react"
import { useSidebar } from "./SidebarContext"

export default function SidebarFooter() {
  const { collapsed } = useSidebar()

  return (
    <div className="border-t border-slate-800 p-4">
      <div
        className={`flex items-center ${
          collapsed ? "justify-center" : "gap-3"
        }`}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800">
          <IconUserCircle className="h-6 w-6 text-slate-300" />
        </div>

        {!collapsed && (
          <div>
            <h4 className="text-sm font-semibold text-white">
              Debasish
            </h4>

            <p className="text-xs text-slate-400">
              Frontend Developer
            </p>
          </div>
        )}
      </div>
    </div>
  )
}