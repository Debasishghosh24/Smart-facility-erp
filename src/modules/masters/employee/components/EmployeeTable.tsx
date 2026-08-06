import { DataTable } from "@/shared/components/dataTable/DataTable";

import { columns } from "../constants/employee.columns";
import { mockEmployees } from "../mock/employee.mock";

export default function EmployeeTable() {
    return (
        <DataTable
            columns={columns}
            data={mockEmployees}
        />
    );
}