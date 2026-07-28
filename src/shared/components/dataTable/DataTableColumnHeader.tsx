import type { Column } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/component/ui/button";

interface DataTableColumnHeaderProps<TData, TValue> {
    column: Column<TData, TValue>;
    title: string;
}

export function DataTableColumnHeader<TData, TValue>({
    column,
    title,
}: DataTableColumnHeaderProps<TData, TValue>) {
    return (
        <Button
            variant="ghost"
            className="-ml-3 h-8"
            onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
            }
        >
            <span>{title}</span>

            <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
    );
}