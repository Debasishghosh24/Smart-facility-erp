import { Outlet } from "react-router-dom"
import { Sidebar } from "@/shared/layout/sidebar"
import {Topbar} from "@/shared/layout/topbar"

export default function AppLayout() {
  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar />

      <div className="flex flex-1 flex-col min-w-0">
       <Topbar/>

        <main className="flex-1 overflow-auto p-6 [scrollbar-gutter:stable]">
          <Outlet />
        </main>
      </div>
    </div>
  )
}