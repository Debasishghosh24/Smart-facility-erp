import type { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import {
    Building2,
    CalendarDays,
    Eye,
    Laptop,
    MapPin,
    Pencil,
    Tag,
    Trash2,
} from "lucide-react";

import { Badge } from "@/component/ui/badge";
import { Button } from "@/component/ui/button";

import { DataTableColumnHeader } from "@/shared/components/dataTable/DataTableColumnHeader";

import type { Asset } from "../types/asset.types";

export const columns: ColumnDef<Asset>[] = [
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
            const asset = row.original;

            return (
                <div className="flex min-w-[220px] items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                        <Laptop className="h-5 w-5 text-blue-600" />
                    </div>

                    <div className="min-w-0">
                        <p className="truncate font-medium text-slate-900">
                            {asset.assetName}
                        </p>

                        <div className="mt-0.5 flex items-center gap-1.5">
                            <Tag className="h-3 w-3 text-slate-400" />

                            <span className="text-xs text-muted-foreground">
                                {asset.assetCode}
                            </span>
                        </div>
                    </div>
                </div>
            );
        },
    },

    // =====================================================
    // Category
    // =====================================================

    {
        accessorKey: "category",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Category"
            />
        ),

        cell: ({ row }) => (
            <div className="flex items-center gap-2">
                <Badge
                    variant="outline"
                    className="border-blue-200 bg-blue-50 text-blue-700"
                >
                    {row.original.category}
                </Badge>
            </div>
        ),
    },

    // =====================================================
    // Serial Number
    // =====================================================

    {
        accessorKey: "serialNumber",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Serial Number"
            />
        ),

        cell: ({ row }) => (
            <span className="font-mono text-xs text-slate-600">
                {row.original.serialNumber}
            </span>
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
            <div className="flex max-w-[180px] items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-slate-400" />

                <span className="truncate text-sm">
                    {row.original.site}
                </span>
            </div>
        ),
    },

    // =====================================================
    // Department
    // =====================================================

    {
        accessorKey: "department",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Department"
            />
        ),

        cell: ({ row }) => (
            <div className="flex max-w-[200px] items-center gap-2">
                <Building2 className="h-4 w-4 shrink-0 text-slate-400" />

                <span className="truncate text-sm">
                    {row.original.department}
                </span>
            </div>
        ),
    },

    // =====================================================
    // Purchase Cost
    // =====================================================

    {
        accessorKey: "purchaseCost",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Purchase Cost"
            />
        ),

        cell: ({ row }) => {
            const amount = row.original.purchaseCost;

            return (
                <span className="font-medium text-slate-700">
                    ₹{amount.toLocaleString("en-IN")}
                </span>
            );
        },
    },

    // =====================================================
    // Purchase Date
    // =====================================================

    {
        accessorKey: "purchaseDate",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Purchase Date"
            />
        ),

        cell: ({ row }) => (
            <div className="flex items-center gap-2 text-sm text-slate-600">
                <CalendarDays className="h-4 w-4 text-slate-400" />

                {row.original.purchaseDate}
            </div>
        ),
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
                Available:
                    "border-emerald-200 bg-emerald-50 text-emerald-700",

                Assigned:
                    "border-blue-200 bg-blue-50 text-blue-700",

                "Under Maintenance":
                    "border-amber-200 bg-amber-50 text-amber-700",

                Retired:
                    "border-slate-200 bg-slate-50 text-slate-600",

                Lost:
                    "border-red-200 bg-red-50 text-red-700",
            };

            const dotStyles = {
                Available: "bg-emerald-500",
                Assigned: "bg-blue-500",
                "Under Maintenance": "bg-amber-500",
                Retired: "bg-slate-400",
                Lost: "bg-red-500",
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
            const asset = row.original;

            return (
                <div className="flex items-center gap-2">
                    {/* View Details */}

                    <Link to={`/masters/asset/${asset.id}`}>
                        <Button
                            type="button"
                            size="icon"
                            variant="outline"
                            className="h-8 w-8"
                            title="View Asset Details"
                        >
                            <Eye className="h-4 w-4" />
                        </Button>
                    </Link>

                    {/* Edit */}

                    <Link to={`/asset/edit/${asset.id}`}>
                        <Button
                            type="button"
                            size="icon"
                            variant="outline"
                            className="h-8 w-8"
                            title="Edit Asset"
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
                        title="Delete Asset"
                        onClick={() =>
                            console.log(
                                "Delete Asset:",
                                asset.id
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