import { IconChevronDown } from "@tabler/icons-react"

export default function TopbarProfile() {
  return (
    <div className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-1 hover:bg-slate-100">

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
        D
      </div>

      <div>

        <p className="text-sm font-semibold">
          Debasish
        </p>

        <p className="text-xs text-slate-500">
          Admin
        </p>

      </div>

      <IconChevronDown size={16} />

    </div>
  )
}