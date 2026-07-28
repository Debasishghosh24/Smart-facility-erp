import {
  IconCircleCheck,
  IconAlertTriangle,
  IconInfoCircle,
  IconPlus,
} from "@tabler/icons-react"

import { recentActivities } from "../dashboard.mock"

export default function RecentActivities() {
  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <IconCircleCheck className="text-green-500" size={20} />

      case "warning":
        return <IconAlertTriangle className="text-yellow-500" size={20} />

      case "info":
        return <IconInfoCircle className="text-blue-500" size={20} />

      default:
        return <IconPlus className="text-indigo-500" size={20} />
    }
  }

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold">
        Recent Activities
      </h2>

      <div className="space-y-5">
        {recentActivities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-3"
          >
            <div className="mt-1">
              {getIcon(activity.type)}
            </div>

            <div className="flex-1">
              <p className="font-medium text-slate-800">
                {activity.title}
              </p>

              <p className="text-sm text-slate-500">
                {activity.description}
              </p>
            </div>

            <span className="text-xs text-slate-400">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}