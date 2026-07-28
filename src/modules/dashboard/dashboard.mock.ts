import {
  IconBuildingWarehouse,
  IconTool,
  IconUsers,
  IconClipboardList,
} from "@tabler/icons-react"

import type { StatCardProps } from "./dashboard.types"

export const dashboardStats: StatCardProps[] = [
  {
    title: "Total Assets",
    value: 1250,
    icon: IconBuildingWarehouse,
    color: "bg-blue-500",
    percentage: "+15%",
  },

  {
    title: "Open Complaints",
    value: 18,
    icon: IconClipboardList,
    color: "bg-red-500",
    percentage: "+3%",
  },

  {
    title: "Employees",
    value: 86,
    icon: IconUsers,
    color: "bg-green-500",
    percentage: "+6%",
  },

  {
    title: "Maintenance",
    value: 9,
    icon: IconTool,
    color: "bg-yellow-500",
    percentage: "-2%",
  },
]

export const assetStatusData = [
  { label: "Active", value: 520 },
  { label: "Maintenance", value: 45 },
  { label: "Assigned", value: 380 },
  { label: "Inactive", value: 18 },
]

export const recentActivities = [
  {
    id: 1,
    title: "Laptop Assigned",
    description: "Dell Latitude assigned to Kartik",
    time: "2 min ago",
    type: "success",
  },
  {
    id: 2,
    title: "Complaint Raised",
    description: "Printer not working",
    time: "15 min ago",
    type: "warning",
  },
  {
    id: 3,
    title: "Maintenance Completed",
    description: "AC servicing completed",
    time: "1 hour ago",
    type: "info",
  },
  {
    id: 4,
    title: "Asset Added",
    description: "New HP Laptop added",
    time: "Today",
    type: "primary",
  },
]

export const recentMaintenances = [
  {
    id: 1,
    asset: "Dell Latitude 5420",
    type: "Repair",
    engineer: "Kartik Barman",
    status: "Completed",
    date: "16 Jul 2026",
  },
  {
    id: 2,
    asset: "HP LaserJet M404",
    type: "Inspection",
    engineer: "Pritam Majhi",
    status: "Pending",
    date: "15 Jul 2026",
  },
  {
    id: 3,
    asset: "LG AC 1.5 Ton",
    type: "Service",
    engineer: "Sourav Paul",
    status: "In Progress",
    date: "14 Jul 2026",
  },
  {
    id: 4,
    asset: "Macbook Air M1",
    type: "Repair",
    engineer: "Debasish Ghosh",
    status: "Completed",
    date: "13 Jul 2026",
  },
]