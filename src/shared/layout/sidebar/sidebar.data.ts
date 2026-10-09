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
      },
      {
        id: "asset-category",
        title: "Asset Category",
        icon: IconBuildingWarehouse,
        path: "/asset-category",
      },

      {
        id: "asset",
        title: "Asset",
        icon: IconBuildingWarehouse,
        path: "/asset",
      }
    ],
  },

  {
    id: "assignment",
    title: "Assignment",
    icon: IconClipboardList,
    children: [
      {
        id: "asset-assignment",
        title: "Asset Assignment",
        icon: IconClipboardList,
        path: "/transactions/asset-assignment",
      },
      {
        id: "asset-return",
        title: "Asset Return",
        icon: IconClipboardList,
        path: "/transactions/asset-return",
      },
      {
        id: "asset-transfer",
        title: "Asset Transfer",
        icon: IconClipboardList,
        path: "/transactions/asset-transfer",
      }

    ]
  },

  {
    id: "maintenance",
    title: "Maintenance",
    icon: IconTool,
    children: [
      {
        id: "work-order",
        title: "Work Order",
        icon: IconClipboardList,
        path: "/maintenance/work-order",
      }
    ]
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