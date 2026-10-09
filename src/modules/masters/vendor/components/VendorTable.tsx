import { DataTable } from "@/shared/components/dataTable/DataTable";

import { columns } from "../constants/vendor.columns";
import { useVendors } from "../context/vendorContext";

export default function VendorTable() {
    const { vendors } = useVendors();
    return (
        <DataTable
            columns={columns}
            data={vendors}
        />
    );
}