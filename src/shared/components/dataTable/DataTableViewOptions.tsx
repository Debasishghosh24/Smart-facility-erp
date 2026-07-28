import type { Table } from "@tanstack/react-table";
import { LayoutGrid, ChevronDown } from "lucide-react";

import { Button } from "@/component/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/component/ui/dropdown-menu";

interface DataTableViewOptionsProps<TData> {
    table: Table<TData>;
}

export function DataTableViewOptions<TData>({
    table,
}: DataTableViewOptionsProps<TData>) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 border-slate-200 bg-white text-slate-700 h-9">
                    <LayoutGrid className="h-4 w-4 text-slate-500" />
                    View
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                {table
                    .getAllColumns()
                    .filter(
                        (column) =>
                            column.getCanHide() &&
                            typeof column.accessorFn !== "undefined"
                    )
                    .map((column) => {
                        return (
                            <DropdownMenuCheckboxItem
                                key={column.id}
                                className="capitalize"
                                checked={column.getIsVisible()}
                                onCheckedChange={(value) =>
                                    column.toggleVisibility(!!value)
                                }
                            >
                                {column.id}
                            </DropdownMenuCheckboxItem>
                        );
                    })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}