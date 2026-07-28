import { Link } from "react-router-dom"

interface Props {
  label: string
  path: string
  isLast: boolean
}

export default function BreadcrumbItem({
  label,
  path,
  isLast,
}: Props) {
  if (isLast) {
    return (
      <span className="font-medium text-slate-900">
        {label}
      </span>
    )
  }

  return (
    <Link
      to={path}
      className="text-slate-500 hover:text-blue-600"
    >
      {label}
    </Link>
  )
}