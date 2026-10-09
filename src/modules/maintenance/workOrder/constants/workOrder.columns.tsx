import type { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import {

    Building2,
    CalendarDays,
    ClipboardList,
    Eye,
    Pencil,
    Tag,
    Trash2,
    User,
    Wrench,
} from "lucide-react";

import { Badge } from "@/component/ui/badge";
import { Button } from "@/component/ui/button";

import { DataTableColumnHeader } from "@/shared/components/dataTable/DataTableColumnHeader";

import type { WorkOrder } from "../types/workOrder.types";

export const columns: ColumnDef<WorkOrder>[] = [
    // =====================================================
    // Work Order
    // =====================================================

    {
        accessorKey: "workOrderNumber",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Work Order"
            />
        ),

        cell: ({ row }) => {
            const workOrder = row.original;

            return (
                <div className="flex min-w-[190px] items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                        <ClipboardList className="h-5 w-5 text-blue-600" />
                    </div>

                    <div className="min-w-0">
                        <p className="truncate font-medium text-slate-900">
                            {workOrder.workOrderNumber}
                        </p>

                        <div className="mt-0.5 flex items-center gap-1.5">
                            <Tag className="h-3 w-3 text-slate-400" />

                            <span className="text-xs text-muted-foreground">
                                {workOrder.assetCode}
                            </span>
                        </div>
                    </div>
                </div>
            );
        },
    },

    // =====================================================
    // Asset
    // =====================================================

    {
        accessorKey: "assetName",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Asset"
            />
        ),

        cell: ({ row }) => {
            const workOrder = row.original;

            return (
                <div className="min-w-[180px]">
                    <p className="font-medium text-slate-900">
                        {workOrder.assetName}
                    </p>

                    <p className="mt-0.5 text-xs text-muted-foreground">
                        {workOrder.assetCode}
                    </p>
                </div>
            );
        },
    },

    // =====================================================
    // Maintenance Type
    // =====================================================

    {
        accessorKey: "maintenanceType",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Maintenance Type"
            />
        ),

        cell: ({ row }) => {
            const type = row.original.maintenanceType;

            const typeStyles = {
                Preventive:
                    "border-emerald-200 bg-emerald-50 text-emerald-700",

                Corrective:
                    "border-blue-200 bg-blue-50 text-blue-700",

                Breakdown:
                    "border-red-200 bg-red-50 text-red-700",

                Inspection:
                    "border-violet-200 bg-violet-50 text-violet-700",
            };

            return (
                <Badge
                    variant="outline"
                    className={typeStyles[type]}
                >
                    <Wrench className="mr-1.5 h-3.5 w-3.5" />

                    {type}
                </Badge>
            );
        },
    },

    // =====================================================
    // Priority
    // =====================================================

    {
        accessorKey: "priority",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Priority"
            />
        ),

        cell: ({ row }) => {
            const priority = row.original.priority;

            const priorityStyles = {
                Low: "border-slate-200 bg-slate-50 text-slate-600",

                Medium:
                    "border-blue-200 bg-blue-50 text-blue-700",

                High:
                    "border-amber-200 bg-amber-50 text-amber-700",

                Critical:
                    "border-red-200 bg-red-50 text-red-700",
            };

            const dotStyles = {
                Low: "bg-slate-400",
                Medium: "bg-blue-500",
                High: "bg-amber-500",
                Critical: "bg-red-500",
            };

            return (
                <Badge
                    variant="outline"
                    className={priorityStyles[priority]}
                >
                    <span
                        className={`mr-1.5 h-1.5 w-1.5 rounded-full ${dotStyles[priority]}`}
                    />

                    {priority}
                </Badge>
            );
        },
    },

    // =====================================================
    // Requested By
    // =====================================================

    {
        accessorKey: "requestedBy",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Requested By"
            />
        ),

        cell: ({ row }) => (
            <div className="flex max-w-[180px] items-center gap-2">
                <User className="h-4 w-4 shrink-0 text-slate-400" />

                <span className="truncate text-sm text-slate-700">
                    {row.original.requestedBy}
                </span>
            </div>
        ),
    },

    // =====================================================
    // Assigned To
    // =====================================================

    {
        accessorKey: "assignedTo",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Assigned To"
            />
        ),

        cell: ({ row }) => (
            <div className="flex max-w-[180px] items-center gap-2">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100">
                    <User className="h-3.5 w-3.5 text-slate-500" />
                </div>

                <span className="truncate text-sm text-slate-700">
                    {row.original.assignedTo}
                </span>
            </div>
        ),
    },

    // =====================================================
    // Vendor
    // =====================================================

    {
        accessorKey: "vendor",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Vendor"
            />
        ),

        cell: ({ row }) => (
            <div className="flex max-w-[190px] items-center gap-2">
                <Building2 className="h-4 w-4 shrink-0 text-slate-400" />

                <span className="truncate text-sm text-slate-700">
                    {row.original.vendor}
                </span>
            </div>
        ),
    },

    // =====================================================
    // Site
    // =====================================================

    {
        accessorKey: "site",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Site"
            />
        ),

        cell: ({ row }) => (
            <span className="text-sm text-slate-600">
                {row.original.site}
            </span>
        ),
    },

    // =====================================================
    // Scheduled Date
    // =====================================================

    {
        accessorKey: "scheduledDate",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Scheduled Date"
            />
        ),

        cell: ({ row }) => (
            <div className="flex items-center gap-2 text-sm text-slate-600">
                <CalendarDays className="h-4 w-4 text-slate-400" />

                {row.original.scheduledDate}
            </div>
        ),
    },

    // =====================================================
    // Estimated Cost
    // =====================================================

    {
        accessorKey: "estimatedCost",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Estimated Cost"
            />
        ),

        cell: ({ row }) => {
            const amount = row.original.estimatedCost;

            return (
                <span className="font-medium text-slate-700">
                    ₹{amount.toLocaleString("en-IN")}
                </span>
            );
        },
    },

    // =====================================================
    // Status
    // =====================================================

    {
        accessorKey: "status",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Status"
            />
        ),

        cell: ({ row }) => {
            const status = row.original.status;

            const statusStyles = {
                Open:
                    "border-blue-200 bg-blue-50 text-blue-700",

                "In Progress":
                    "border-amber-200 bg-amber-50 text-amber-700",

                "On Hold":
                    "border-orange-200 bg-orange-50 text-orange-700",

                Completed:
                    "border-emerald-200 bg-emerald-50 text-emerald-700",

                Cancelled:
                    "border-red-200 bg-red-50 text-red-700",
            };

            const dotStyles = {
                Open: "bg-blue-500",

                "In Progress":
                    "bg-amber-500",

                "On Hold":
                    "bg-orange-500",

                Completed:
                    "bg-emerald-500",

                Cancelled:
                    "bg-red-500",
            };

            return (
                <Badge
                    variant="outline"
                    className={statusStyles[status]}
                >
                    <span
                        className={`mr-1.5 h-1.5 w-1.5 rounded-full ${dotStyles[status]}`}
                    />

                    {status}
                </Badge>
            );
        },
    },

    // =====================================================
    // Actions
    // =====================================================

    {
        id: "actions",

        header: "Actions",

        enableSorting: false,
        enableHiding: false,

        cell: ({ row }) => {
            const workOrder = row.original;

            return (
                <div className="flex items-center gap-2">
                    {/* View */}

                    <Link
                        to={`/maintenance/work-order/${workOrder.id}`}
                    >
                        <Button
                            type="button"
                            size="icon"
                            variant="outline"
                            className="h-8 w-8"
                        >
                            <Eye className="h-4 w-4" />
                        </Button>
                    </Link>

                    {/* Edit */}

                    <Link
                        to={`/maintenance/work-order/edit/${workOrder.id}`}
                    >
                        <Button
                            type="button"
                            size="icon"
                            variant="outline"
                            className="h-8 w-8"
                        >
                            <Pencil className="h-4 w-4" />
                        </Button>
                    </Link>

                    {/* Delete */}

                    <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 text-red-500 hover:bg-red-50 hover:text-red-600"
                        onClick={() =>
                            console.log(
                                "Delete Work Order:",
                                workOrder.id
                            )
                        }
                    >
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </div>
            );
        },
    },
];