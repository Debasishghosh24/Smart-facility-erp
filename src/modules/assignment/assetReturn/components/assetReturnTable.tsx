import { DataTable } from "@/shared/components/dataTable/DataTable";

import { columns } from "../constants/assetReturn.columns";
import { mockAssetReturns } from "../mock/assetReturn.mock";

export default function AssetReturnTable() {
    return (
        <DataTable
            columns={columns}
            data={mockAssetReturns}
        />
    );
}