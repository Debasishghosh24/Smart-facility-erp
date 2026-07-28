import SidebarHeader from "./SidebarHeader"
import SidebarMenu from "./SidebarMenu"
import SidebarFooter from "./SidebarFooter"
import { SidebarProvider, useSidebar } from "./SidebarContext"

function SidebarContent() {
  const { collapsed } = useSidebar()

  return (
    <aside
      className={`flex h-screen flex-col border-r border-slate-800 bg-slate-950 transition-all duration-300 ${
        collapsed ? "w-20" : "w-70"
      }`}
    >
      <SidebarHeader />

      <div className="flex-1 overflow-y-auto px-3 py-4">
        <SidebarMenu />
      </div>

      <SidebarFooter />
    </aside>
  )
}

export default function Sidebar() {
  return (
    <SidebarProvider>
      <SidebarContent />
    </SidebarProvider>
  )
}