import { IconBell } from "@tabler/icons-react"

export default function TopbarNotification() {
  return (
    <button className="rounded-lg p-2 hover:bg-slate-100">
      <IconBell size={20} />
    </button>
  )
}