import { DataTable } from "@/shared/components/dataTable/DataTable";

import { columns } from "../constants/assetColumns";
import { useAssets } from "../context/assetContext";


export default function AssetTable() {
    const { assets } = useAssets();
    return (
        <DataTable
            columns={columns}
            data={assets}
        />
    );
}