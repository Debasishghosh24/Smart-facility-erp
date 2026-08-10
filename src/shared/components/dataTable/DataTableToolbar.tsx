import type { Table } from "@tanstack/react-table";
import { Search, Filter, RotateCcw } from "lucide-react";

import { Input } from "@/component/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/component/ui/select";
import { Button } from "@/component/ui/button";
import { DataTableViewOptions } from "./DataTableViewOptions";

interface DataTableToolbarProps<TData> {
    table: Table<TData>;
}

export function DataTableToolbar<TData>({
    table,
}: DataTableToolbarProps<TData>) {
    const searchColumn = table.getColumn("siteName") ?? table.getColumn("name") ?? table.getColumn("vendorName") ?? table.getColumn("categoryName") ?? table.getColumn("employeeId");
    const searchPlaceholder = table.getColumn("siteName")
        ? "Search site by name..."
        : table.getColumn("name")
        ? "Search department by name..."
        : table.getColumn("vendorName")
        ? "Search vendor by name..."
        : table.getColumn("categoryName")
        ? "Search category by name..."
        : table.getColumn("employeeId")
        ? "Search employee..."
        : "Search...";

    return (
        <div className="mb-4 flex flex-wrap items-end justify-between gap-4 p-1">
            {/* Search Input Container */}
            <div className="relative flex-1 min-w-[280px] max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                    placeholder={searchPlaceholder}
                    value={(searchColumn?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        searchColumn?.setFilterValue(event.target.value)
                    }
                    className="pl-10 pr-12 w-full bg-white border-slate-200"
                />
                <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-slate-50 px-1.5 font-mono text-[10px] font-medium text-slate-400 opacity-100">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </div>

            {/* Filter Controls Row */}
            <div className="flex flex-wrap items-end gap-3">
                {/* Status Dropdown */}
                <div className="flex flex-col gap-1.5">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Status</span>
                    <Select
                        value={(table.getColumn("status")?.getFilterValue() as string) || "all"}
                        onValueChange={(value) => {
                            table
                                .getColumn("status")
                                ?.setFilterValue(
                                    value === "all" ? "" : value
                                );
                        }}
                    >
                        <SelectTrigger className="w-36 bg-white border-slate-200 text-slate-700 h-9">
                            <SelectValue placeholder="All Status" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="Active">Active</SelectItem>
                            <SelectItem value="Inactive">Inactive</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Sort By Dropdown */}
                <div className="flex flex-col gap-1.5">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Sort By</span>
                    <Select
                        value={
                            (table.getState().sorting[0]?.id) ||
                            (table.getColumn("siteName")
                                ? "siteName"
                                : table.getColumn("name")
                                ? "name"
                                : table.getColumn("categoryName")
                                ? "categoryName"
                                : table.getColumn("employeeId")
                                ? "employeeId"
                                : "vendorName")
                        }
                        onValueChange={(value) => {
                            const isDesc = table.getState().sorting[0]?.desc;
                            table.setSorting([{ id: value, desc: isDesc ?? false }]);
                        }}
                    >
                        <SelectTrigger className="w-36 bg-white border-slate-200 text-slate-700 h-9">
                            <SelectValue placeholder="Sort By" />
                        </SelectTrigger>

                        <SelectContent>
                            {table.getColumn("siteName") ? (
                                <>
                                    <SelectItem value="siteName">Site Name</SelectItem>
                                    <SelectItem value="siteCode">Site Code</SelectItem>
                                    <SelectItem value="createdAt">Created At</SelectItem>
                                </>
                            ) : table.getColumn("name") ? (
                                <>
                                    <SelectItem value="name">Department Name</SelectItem>
                                    <SelectItem value="shortCode">Short Code</SelectItem>
                                    <SelectItem value="createdAt">Created At</SelectItem>
                                </>
                            ) : table.getColumn("categoryName") ? (
                                <>
                                    <SelectItem value="categoryName">Category Name</SelectItem>
                                    <SelectItem value="categoryCode">Category Code</SelectItem>
                                    <SelectItem value="createdAt">Created At</SelectItem>
                                </>
                            ) : table.getColumn("employeeId") ? (
                                <>
                                    <SelectItem value="employeeId">Employee ID</SelectItem>
                                    <SelectItem value="firstName">First Name</SelectItem>
                                    <SelectItem value="createdAt">Created At</SelectItem>
                                </>
                            ) : (
                                <>
                                    <SelectItem value="vendorName">Vendor Name</SelectItem>
                                    <SelectItem value="vendorCode">Vendor Code</SelectItem>
                                    <SelectItem value="createdAt">Created At</SelectItem>
                                </>
                            )}
                        </SelectContent>
                    </Select>
                </div>

                {/* Filter Button */}
                <Button variant="outline" className="flex items-center gap-2 border-slate-200 bg-white text-slate-700 h-9">
                    <Filter className="h-4 w-4 text-slate-500" />
                    Filter
                </Button>

                {/* Reset Button */}
                <Button
                    variant="outline"
                    onClick={() => {
                        table.resetColumnFilters();
                        table.resetSorting();
                    }}
                    className="flex items-center gap-2 border-slate-200 bg-white text-slate-700 h-9"
                >
                    <RotateCcw className="h-4 w-4 text-slate-500" />
                    Reset
                </Button>

                {/* View Options */}
                <DataTableViewOptions table={table} />
            </div>
        </div>
    );
}