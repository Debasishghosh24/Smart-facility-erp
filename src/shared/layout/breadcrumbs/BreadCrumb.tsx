import { Fragment } from "react"
import { useLocation } from "react-router-dom"
import { IconChevronRight, IconHome } from "@tabler/icons-react"

import BreadcrumbItem from "./BreadcrumbItem"
import { breadcrumbMap } from "./breadcrumb.data"

export default function Breadcrumb() {
  const location = useLocation()

  const paths = location.pathname
    .split("/")
    .filter(Boolean)

  const breadcrumbs = paths.map((segment, index) => ({
    label: breadcrumbMap[segment] || segment,
    path: "/" + paths.slice(0, index + 1).join("/"),
  }))

  return (
    <div className="flex items-center gap-2 text-sm">

      <IconHome
        size={16}
        className="text-slate-400"
      />

      {breadcrumbs.map((item, index) => (
        <Fragment key={item.path}>

          <IconChevronRight
            size={14}
            className="text-slate-400"
          />

          <BreadcrumbItem
            label={item.label}
            path={item.path}
            isLast={index === breadcrumbs.length - 1}
          />

        </Fragment>
      ))}

    </div>
  )
}