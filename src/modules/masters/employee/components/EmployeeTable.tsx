import { DataTable } from "@/shared/components/dataTable/DataTable";

import { columns } from "../constants/employee.columns";
import { useEmployees } from "../context/employeeContext";

export default function EmployeeTable() {
    const { employees } = useEmployees();
    return (
        <DataTable
            columns={columns}
            data={employees}
        />
    );
}