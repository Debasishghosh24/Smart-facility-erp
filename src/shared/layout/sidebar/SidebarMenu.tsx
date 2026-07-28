import SidebarItem from "./SidebarItem"
import { sidebarItems } from "./sidebar.data"

export default function SidebarMenu() {
  return (
    <nav className="space-y-1">
      {sidebarItems.map((item) => (
        <SidebarItem
          key={item.id}
          item={item}
        />
      ))}
    </nav>
  )
}