import { BrowserRouter, Routes, Route } from "react-router-dom"

import AppLayout from "@/shared/layout/AppLayout/AppLayout"

import Dashboard from "@/modules/dashboard/pages/Dashboard"
import Login from "@/modules/auth/pages/Login"

import DepartmentList from "@/modules/masters/department/pages/DepartmentList"
import DepartmentAdd from "@/modules/masters/department/pages/DepartmentAdd"
import DepartmentEdit from "@/modules/masters/department/pages/DepartmentEdit"

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
        </Route>

      </Routes>
    </BrowserRouter>
  )
}