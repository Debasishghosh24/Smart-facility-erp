import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"
import { AssetProvider } from "./modules/masters/asset/context/assetContext"
import { DepartmentProvider } from "./modules/masters/department/context/departmentContext"
import { SiteProvider } from "./modules/masters/site/context/siteContext"
import { EmployeeProvider } from "./modules/masters/employee/context/employeeContext"
import { VendorProvider } from "./modules/masters/vendor/context/vendorContext"
import { AssetCategoryProvider } from "./modules/masters/assetCategory/context/assetCategoryContext"

import AppRoutes from "./routes"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DepartmentProvider>
      <SiteProvider>
        <EmployeeProvider>
          <VendorProvider>
            <AssetCategoryProvider>
              <AssetProvider>
                <AppRoutes />
              </AssetProvider>
            </AssetCategoryProvider>
          </VendorProvider>
        </EmployeeProvider>
      </SiteProvider>
    </DepartmentProvider>
  </React.StrictMode>
)