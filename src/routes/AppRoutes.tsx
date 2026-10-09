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
import AssetEdit from "@/modules/masters/asset/pages/AssetEdit"
import AssetAdd from "@/modules/masters/asset/pages/AssetAdd"
import AssetList from "@/modules/masters/asset/pages/AssetList"
import AssetAssignmentList from "@/modules/assignment/assetAssignment/pages/AssetAssignmentList"
import AssetAssignmentAdd from "@/modules/assignment/assetAssignment/pages/AssetAssignmentAdd"
import AssetAssignmentEdit from "@/modules/assignment/assetAssignment/pages/AssetAssignmentEdit"
import AssetReturnList from "@/modules/assignment/assetReturn/pages/assetReturnList"
import AssetReturnAdd from "@/modules/assignment/assetReturn/pages/assetReturnAdd"
import AssetReturnEdit from "@/modules/assignment/assetReturn/pages/assetReturnEdit"
import AssetTransferList from "@/modules/assignment/assetTransfer/pages/assetTransferList"
import AssetTransferAdd from "@/modules/assignment/assetTransfer/pages/assetTransferAdd"
import AssetTransferEdit from "@/modules/assignment/assetTransfer/pages/assetTransferEdit"
import AssetDetails from "@/modules/masters/asset/pages/AssetDetails";
import WorkOrderEdit from "@/modules/maintenance/workOrder/pages/workOrderEdit"
import WorkOrderAdd from "@/modules/maintenance/workOrder/pages/workOrderAdd"
import WorkOrderList from "@/modules/maintenance/workOrder/pages/workOrderList"
import WorkOrderDetails from "@/modules/maintenance/workOrder/pages/workOrderDetails"


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
          <Route
            path="/masters/asset/:id"
            element={<AssetDetails />}
          />

          <Route
            path="/asset"
            element={<AssetList />}
          />

          <Route
            path="/asset/add"
            element={<AssetAdd />}
          />
          <Route
            path="/asset/edit/:id"
            element={<AssetEdit />}
          />
          <Route
            path="/transactions/asset-assignment"
            element={<AssetAssignmentList />}
          />
          <Route
            path="/transactions/asset-assignment/add"
            element={<AssetAssignmentAdd />}
          />
          <Route
            path="/transactions/asset-assignment/edit/:id"
            element={<AssetAssignmentEdit />}
          />
          <Route
            path="/transactions/asset-return"
            element={<AssetReturnList />}
          />
          <Route
            path="/transactions/asset-return/add"
            element={<AssetReturnAdd />}
          />
          <Route
            path="/transactions/asset-return/edit/:id"
            element={<AssetReturnEdit />}
          />
          <Route
            path="/transactions/asset-transfer"
            element={<AssetTransferList />}
          />

          <Route
            path="/transactions/asset-transfer/add"
            element={<AssetTransferAdd />}
          />

          <Route
            path="/transactions/asset-transfer/edit/:id"
            element={<AssetTransferEdit />}
          />
          <Route
            path="/maintenance/work-order/edit/:id"
            element={<WorkOrderEdit />}
          />
          <Route
            path="/maintenance/work-order/add"
            element={<WorkOrderAdd />}
          />
          <Route
            path="/maintenance/work-order"
            element={<WorkOrderList />}
          />
          <Route
            path="/maintenance/work-order/:id"
            element={<WorkOrderDetails />}
          />


        </Route>


      </Routes>
    </BrowserRouter>
  )
}