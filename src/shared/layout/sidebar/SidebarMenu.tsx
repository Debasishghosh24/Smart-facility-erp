import SidebarItem from "./SidebarItem"
import { sidebarItems } from "./sidebar.data"
import type { SidebarItem as SidebarItemType } from "./sidebar.types"

interface SidebarMenuProps {
  searchQuery: string
}

export default function SidebarMenu({ searchQuery }: SidebarMenuProps) {
  // Client-side search filtering
  const filteredItems = sidebarItems.map((item) => {
    if (item.children) {
      const filteredChildren = item.children.filter((child) =>
        child.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      // Show parent if parent matches or any child matches
      if (filteredChildren.length > 0 || item.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return { ...item, children: filteredChildren }
      }
      return null
    }
    return item.title.toLowerCase().includes(searchQuery.toLowerCase()) ? item : null
  }).filter(Boolean) as SidebarItemType[]

  return (
    <nav className="space-y-3">
      {filteredItems.map((item) => (
        <SidebarItem
          key={item.id}
          item={item}
        />
      ))}
    </nav>
  )
}