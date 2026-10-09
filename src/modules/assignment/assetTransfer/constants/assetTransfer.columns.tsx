import { useNavigate } from "react-router-dom";
import type { ColumnDef } from "@tanstack/react-table";
import {
    ArrowRight,
    Building2,
    CalendarDays,
    Laptop,
    MapPin,
    Pencil,
    Trash2,

} from "lucide-react";

import { Badge } from "@/component/ui/badge";
import { Button } from "@/component/ui/button";

import { DataTableColumnHeader } from "@/shared/components/dataTable/DataTableColumnHeader";

import type { AssetTransfer } from "../types/assetTransfer.types";

export const columns: ColumnDef<AssetTransfer>[] = [

    {
        accessorKey: "transferId",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Transfer"
            />
        ),

        cell: ({ row }) => {
            const item = row.original;

            return (
                <div className="min-w-[120px]">
                    <p className="font-semibold text-slate-900">
                        {item.transferId}
                    </p>

                    <p className="mt-0.5 text-xs text-muted-foreground">
                        {item.createdAt}
                    </p>
                </div>
            );
        },
    },


    {
        accessorKey: "assetName",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Asset"
            />
        ),

        cell: ({ row }) => {
            const item = row.original;

            return (
                <div className="flex min-w-[210px] items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                        <Laptop className="h-4 w-4 text-blue-600" />
                    </div>

                    <div className="min-w-0">
                        <p className="truncate font-medium text-slate-900">
                            {item.assetName}
                        </p>

                        <p className="mt-0.5 text-xs text-muted-foreground">
                            {item.assetCode}
                        </p>
                    </div>
                </div>
            );
        },
    },



    {
        id: "from",

        header: "From",

        enableSorting: false,

        cell: ({ row }) => {
            const item = row.original;

            const initials = item.fromEmployeeName
                .split(" ")
                .map((name) => name.charAt(0))
                .slice(0, 2)
                .join("")
                .toUpperCase();

            return (
                <div className="min-w-[220px]">
                    <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[11px] font-semibold text-slate-600">
                            {initials}
                        </div>

                        <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-slate-800">
                                {item.fromEmployeeName}
                            </p>

                            <p className="text-xs text-muted-foreground">
                                {item.fromEmployeeId}
                            </p>
                        </div>
                    </div>

                    <div className="mt-2 space-y-1 pl-10">
                        <div className="flex items-center gap-1.5 text-xs text-slate-600">
                            <Building2 className="h-3.5 w-3.5 text-slate-400" />

                            <span className="truncate">
                                {item.fromDepartment}
                            </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs text-slate-500">
                            <MapPin className="h-3.5 w-3.5 text-slate-400" />

                            <span className="truncate">
                                {item.fromSite}
                            </span>
                        </div>
                    </div>
                </div>
            );
        },
    },



    {
        id: "direction",

        header: "",

        enableSorting: false,
        enableHiding: false,

        cell: () => (
            <div className="flex items-center justify-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border bg-slate-50">
                    <ArrowRight className="h-4 w-4 text-blue-500" />
                </div>
            </div>
        ),
    },



    {
        id: "to",

        header: "To",

        enableSorting: false,

        cell: ({ row }) => {
            const item = row.original;

            const initials = item.toEmployeeName
                .split(" ")
                .map((name) => name.charAt(0))
                .slice(0, 2)
                .join("")
                .toUpperCase();

            return (
                <div className="min-w-[220px]">
                    <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[11px] font-semibold text-blue-700">
                            {initials}
                        </div>

                        <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-slate-800">
                                {item.toEmployeeName}
                            </p>

                            <p className="text-xs text-muted-foreground">
                                {item.toEmployeeId}
                            </p>
                        </div>
                    </div>

                    <div className="mt-2 space-y-1 pl-10">
                        <div className="flex items-center gap-1.5 text-xs text-slate-600">
                            <Building2 className="h-3.5 w-3.5 text-blue-400" />

                            <span className="truncate">
                                {item.toDepartment}
                            </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs text-slate-500">
                            <MapPin className="h-3.5 w-3.5 text-blue-400" />

                            <span className="truncate">
                                {item.toSite}
                            </span>
                        </div>
                    </div>
                </div>
            );
        },
    },



    {
        accessorKey: "transferDate",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Transfer Date"
            />
        ),

        cell: ({ row }) => (
            <div className="flex items-center gap-2 whitespace-nowrap text-sm text-slate-600">
                <CalendarDays className="h-4 w-4 text-slate-400" />

                {row.original.transferDate}
            </div>
        ),
    },



    {
        accessorKey: "transferReason",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Reason"
            />
        ),

        cell: ({ row }) => (
            <Badge
                variant="outline"
                className="whitespace-nowrap border-slate-200 bg-slate-50 text-slate-700"
            >
                {row.original.transferReason}
            </Badge>
        ),
    },

    {
        accessorKey: "condition",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Condition"
            />
        ),

        cell: ({ row }) => {
            const condition = row.original.condition;

            const conditionStyles = {
                Excellent:
                    "border-emerald-200 bg-emerald-50 text-emerald-700",

                Good:
                    "border-blue-200 bg-blue-50 text-blue-700",

                Fair:
                    "border-amber-200 bg-amber-50 text-amber-700",

                Damaged:
                    "border-red-200 bg-red-50 text-red-700",
            };

            const dotStyles = {
                Excellent: "bg-emerald-500",
                Good: "bg-blue-500",
                Fair: "bg-amber-500",
                Damaged: "bg-red-500",
            };

            return (
                <Badge
                    variant="outline"
                    className={conditionStyles[condition]}
                >
                    <span
                        className={`mr-1.5 h-1.5 w-1.5 rounded-full ${dotStyles[condition]}`}
                    />

                    {condition}
                </Badge>
            );
        },
    },

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
                Pending:
                    "border-amber-200 bg-amber-50 text-amber-700",

                Completed:
                    "border-emerald-200 bg-emerald-50 text-emerald-700",

                Cancelled:
                    "border-red-200 bg-red-50 text-red-700",
            };

            const dotStyles = {
                Pending: "bg-amber-500",
                Completed: "bg-emerald-500",
                Cancelled: "bg-red-500",
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

    {
        id: "actions",

        header: "Actions",

        enableSorting: false,
        enableHiding: false,

        cell: ({ row }) => {
            const transfer = row.original;
            const navigate = useNavigate();

            return (
                <div className="flex items-center gap-2">
                    {/* Edit */}

                    <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => navigate(`/transactions/asset-transfer/edit/${transfer.id}`)}
                    >
                        <Pencil className="h-4 w-4" />
                    </Button>

                    {/* Delete */}

                    <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 text-red-500 hover:bg-red-50 hover:text-red-600"
                        onClick={() =>
                            console.log(
                                "Delete Asset Transfer:",
                                transfer.id
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