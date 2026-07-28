import { DataTable } from "@/shared/components/dataTable/DataTable";

import { columns } from "../constants/site.columns";
import { mockSites } from "../mock/site.mock";

export function SiteTable() {
    return (
        <DataTable
            columns={columns}
            data={mockSites}
        />
    );
}