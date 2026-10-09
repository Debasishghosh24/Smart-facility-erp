import { DataTable } from "@/shared/components/dataTable/DataTable";

import { columns } from "../constants/department.columns";
import { useDepartments } from "../context/departmentContext";

export default function DepartmentTable() {
    const { departments } = useDepartments();
    return (
        <DataTable
            columns={columns}
            data={departments}
        />
    );
}