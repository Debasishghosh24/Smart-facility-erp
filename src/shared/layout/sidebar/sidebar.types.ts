import type { IconProps } from "@tabler/icons-react"
import type { ComponentType } from "react"

export interface SidebarItem {
  id: string
  title: string
  icon: ComponentType<IconProps>
  path?: string
   badge?: string
  children?: SidebarItem[]
}