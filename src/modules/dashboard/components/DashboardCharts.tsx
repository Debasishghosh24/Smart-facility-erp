import AssetStatusChart from "./charts/AssetStatusChart"

export default function DashboardCharts() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold">
        Asset Status
      </h2>

      <AssetStatusChart />
    </div>
  )
}