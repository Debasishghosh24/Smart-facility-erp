import { DataTable } from "@/shared/components/dataTable/DataTable";

import { columns } from "../constants/site.columns";
import { useSites } from "../context/siteContext";

export function SiteTable() {
    const { sites } = useSites();
    return (
        <DataTable
            columns={columns}
            data={sites}
        />
    );
}