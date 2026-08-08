import {
  IconDashboard,
  IconBuildingWarehouse,
  IconTool,
  IconClipboardList,
  IconReportAnalytics,
  IconSettings,
  IconBriefcase,
  IconMapPin,
} from "@tabler/icons-react"

import type { SidebarItem } from "./sidebar.types"

export const sidebarItems: SidebarItem[] = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: IconDashboard,
    path: "/",
  },

  {
    id: "masters",
    title: "Masters",
    icon: IconBuildingWarehouse,
    children: [
      {
        id: "department",
        title: "Department",
        icon: IconBriefcase,
        path: "/department",
      },
      {
        id: "site",
        title: "Site",
        icon: IconMapPin,
        path: "/site",
      },
      {
        id: "employee",
        title: "Employee",
        icon: IconMapPin,
        path: "/employee",
      },
      {
        id: "vendor",
        title: "Vendor",
        icon: IconBuildingWarehouse,
        path: "/vendor",
      }
    ],
  },

  {
    id: "assignment",
    title: "Assignment",
    icon: IconClipboardList,
    path: "/assignment",
  },

  {
    id: "maintenance",
    title: "Maintenance",
    icon: IconTool,
    path: "/maintenance",
  },

  {
    id: "reports",
    title: "Reports",
    icon: IconReportAnalytics,
    path: "/reports",
  },

  {
    id: "settings",
    title: "Settings",
    icon: IconSettings,
    path: "/settings",
  },
]