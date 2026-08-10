import { BrowserRouter, Routes, Route } from "react-router-dom"

import AppLayout from "@/shared/layout/AppLayout/AppLayout"

import Dashboard from "@/modules/dashboard/pages/Dashboard"
import Login from "@/modules/auth/pages/Login"

import DepartmentList from "@/modules/masters/department/pages/DepartmentList"
import DepartmentAdd from "@/modules/masters/department/pages/DepartmentAdd"
import DepartmentEdit from "@/modules/masters/department/pages/DepartmentEdit"
import SiteEdit from "@/modules/masters/site/pages/SiteEdit"
import SiteAdd from "@/modules/masters/site/pages/SiteAdd"
import SiteList from "@/modules/masters/site/pages/SiteList"
import EmployeeList from "@/modules/masters/employee/pages/EmployeeLIst"
import EmployeeAdd from "@/modules/masters/employee/pages/EmployeeAdd"
import EmployeeEdit from "@/modules/masters/employee/pages/EmployeeEdit"
import VendorList from "@/modules/masters/vendor/pages/VendorList"
import VendorAdd from "@/modules/masters/vendor/pages/VendorAdd"
import VendorEdit from "@/modules/masters/vendor/pages/VendorEdit"
import AssetCategoryList from "@/modules/masters/assetCategory/pages/AssetCategoryList"
import AssetCategoryAdd from "@/modules/masters/assetCategory/pages/AssetCategoryAdd"
import AssetCategoryEdit from "@/modules/masters/assetCategory/pages/AssetCategoryEdit"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* ERP Layout */}
        <Route element={<AppLayout />}>
          <Route
            path="/"
            element={<Dashboard />}
          />
          <Route
            path="/department"
            element={<DepartmentList />}
          />
          <Route
            path="/department/add"
            element={<DepartmentAdd />}
          />
          <Route
            path="/department/edit/:id"
            element={<DepartmentEdit />}
          />

          <Route
            path="/site"
            element={<SiteList />}
          />
          <Route
            path="/site/add"
            element={<SiteAdd />}
          />
          <Route
            path="/site/edit/:id"
            element={<SiteEdit />}
          />

          <Route
            path="/employee"
            element={<EmployeeList />}
          />

          <Route
            path="/employee/add"
            element={<EmployeeAdd />}
          />

          <Route
            path="/employee/edit/:id"
            element={<EmployeeEdit />}
          />

          <Route
            path="/vendor"
            element={<VendorList />}
          />

          <Route
            path="/vendor/add"
            element={<VendorAdd />}
          />

          <Route
            path="/vendor/edit/:id"
            element={<VendorEdit />}
          />

          <Route
            path="/asset-category"
            element={<AssetCategoryList />}
          />
          <Route
            path="/asset-category/add"
            element={<AssetCategoryAdd />}
          />
          <Route
            path="/asset-category/edit/:id"
            element={<AssetCategoryEdit />}
          />
        </Route>


      </Routes>
    </BrowserRouter>
  )
}