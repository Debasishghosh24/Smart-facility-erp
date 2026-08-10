import { DataTable } from "@/shared/components/dataTable/DataTable";

import { columns } from "../constants/assetCategory.columns";
import { mockAssetCategories } from "../mock/assetCategory.mock";

export default function AssetCategoryTable() {
    return (
        <DataTable
            columns={columns}
            data={mockAssetCategories}
        />
    );
}