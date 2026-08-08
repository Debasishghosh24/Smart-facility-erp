import { DataTable } from "@/shared/components/dataTable/DataTable";

import { columns } from "../constants/vendor.columns";
import { mockVendors } from "../mock/vendor.mock";

export default function VendorTable() {
    return (
        <DataTable
            columns={columns}
            data={mockVendors}
        />
    );
}