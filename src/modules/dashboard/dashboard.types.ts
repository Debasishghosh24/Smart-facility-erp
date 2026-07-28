import type { Icon } from "@tabler/icons-react"

export interface StatCardProps {
  title: string
  value: number | string
  icon: Icon
  color: string
  percentage: string
}