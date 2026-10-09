import { DataTable } from "@/shared/components/dataTable/DataTable";

import { columns } from "../constants/assetTransfer.columns";
import { mockAssetTransfers } from "../mock/assetTransfer.mock";

export default function AssetTransferTable() {
    return (
        <DataTable
            columns={columns}
            data={mockAssetTransfers}
        />
    );
}