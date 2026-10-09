import { DataTable } from "@/shared/components/dataTable/DataTable";

import { columns } from "../constants/assetCategory.columns";
import { useAssetCategories } from "../context/assetCategoryContext";

export default function AssetCategoryTable() {
    const { assetCategories } = useAssetCategories();
    return (
        <DataTable
            columns={columns}
            data={assetCategories}
        />
    );
}