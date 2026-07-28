import { DataTable } from "@/shared/components/dataTable/DataTable";

import { columns } from "../constants/department.columns";
import { departmentMock } from "../mock/department.mock";

export default function DepartmentTable() {
    return (
        <DataTable
            columns={columns}
            data={departmentMock}
        />
    );
}