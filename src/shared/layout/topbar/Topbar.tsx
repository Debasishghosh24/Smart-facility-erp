import TopbarSearch from "./TopbarSearch"
import TopbarNotification from "./TopbarNotification"
import TopbarProfile from "./TopbarProfile"
import Breadcrumb from "../breadcrumbs/BreadCrumb"

export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">

      {/* Left */}
      <div className="flex items-center gap-4">

        <button className="rounded-lg p-2 hover:bg-slate-100">
          ☰
        </button>

        <Breadcrumb/>

      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        <TopbarSearch />

        <TopbarNotification />

        <TopbarProfile />

      </div>

    </header>
  )
}