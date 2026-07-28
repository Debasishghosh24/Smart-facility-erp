import { recentMaintenances } from "../dashboard.mock"

export default function RecentMaintenance() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          Recent Maintenance
        </h2>

        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">

          <thead>
            <tr className="border-b bg-slate-50">
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Asset
              </th>

              <th className="px-4 py-3 text-left text-sm font-semibold">
                Type
              </th>

              <th className="px-4 py-3 text-left text-sm font-semibold">
                Engineer
              </th>

              <th className="px-4 py-3 text-left text-sm font-semibold">
                Status
              </th>

              <th className="px-4 py-3 text-left text-sm font-semibold">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {recentMaintenances.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-slate-50"
              >
                <td className="px-4 py-4">
                  {item.asset}
                </td>

                <td className="px-4 py-4">
                  {item.type}
                </td>

                <td className="px-4 py-4">
                  {item.engineer}
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium
                    ${
                      item.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : item.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="px-4 py-4 text-slate-500">
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  )
}