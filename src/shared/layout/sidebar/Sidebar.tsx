import { useState } from "react"
import SidebarHeader from "./SidebarHeader"
import SidebarMenu from "./SidebarMenu"
import SidebarFooter from "./SidebarFooter"
import { SidebarProvider, useSidebar } from "./SidebarContext"

function SidebarContent() {
  const { collapsed } = useSidebar()
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <aside
      className={`flex h-screen flex-col border-r border-white/[0.06] bg-[#070B1C] transition-all duration-300 shrink-0 ${
        collapsed ? "w-20" : "w-[290px]"
      }`}
    >
      <SidebarHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="flex-1 overflow-y-auto px-4 py-3 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.05)_transparent]">
        <SidebarMenu searchQuery={searchQuery} />
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