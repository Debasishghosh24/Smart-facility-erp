import { DataTable } from "@/shared/components/dataTable/DataTable";

import { columns } from "../constants/assetAssignment.columns";
import { mockAssetAssignments } from "../mock/assetAssignment.mock";

export default function AssetAssignmentTable() {
    return (
        <DataTable
            columns={columns}
            data={mockAssetAssignments}
        />
    );
}