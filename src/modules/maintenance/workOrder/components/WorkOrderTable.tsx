import type { ColumnDef } from "@tanstack/react-table";

import { DataTable } from "@/shared/components/dataTable/DataTable";

import type { WorkOrder } from "../types/workOrder.types";

interface WorkOrderTableProps {
    data: WorkOrder[];
    columns: ColumnDef<WorkOrder>[];
}

export function WorkOrderTable({
    data,
    columns,
}: WorkOrderTableProps) {
    return (
        <div className="w-full">
            <DataTable
                columns={columns}
                data={data}
            />
        </div>
    );
}