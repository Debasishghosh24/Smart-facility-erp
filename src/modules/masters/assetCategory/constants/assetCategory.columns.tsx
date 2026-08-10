import type { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import {
    Boxes,
    Pencil,
    Trash2,
} from "lucide-react";

import { Badge } from "@/component/ui/badge";
import { Button } from "@/component/ui/button";

import { DataTableColumnHeader } from "@/shared/components/dataTable/DataTableColumnHeader";

import type { AssetCategory } from "../types/assetCategory.types";

export const columns: ColumnDef<AssetCategory>[] = [
    // Category
    {
        accessorKey: "categoryName",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Category"
            />
        ),

        cell: ({ row }) => {
            const category = row.original;

            return (
                <div className="flex items-center gap-3">
                    {/* Icon */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                        <Boxes className="h-5 w-5 text-blue-600" />
                    </div>

                    {/* Name + Code */}
                    <div className="min-w-0">
                        <p className="font-medium text-slate-900">
                            {category.categoryName}
                        </p>

                        <p className="text-xs text-muted-foreground">
                            {category.categoryCode}
                        </p>
                    </div>
                </div>
            );
        },
    },

    // Description
    {
        accessorKey: "description",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Description"
            />
        ),

        cell: ({ row }) => (
            <p className="max-w-[320px] truncate text-sm text-slate-600">
                {row.original.description}
            </p>
        ),
    },

    // Asset Type
    {
        accessorKey: "assetType",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Asset Type"
            />
        ),

        cell: ({ row }) => {
            const type = row.original.assetType;

            const typeStyles = {
                IT: "bg-blue-50 text-blue-700 border-blue-200",
                Electrical:
                    "bg-amber-50 text-amber-700 border-amber-200",
                Furniture:
                    "bg-purple-50 text-purple-700 border-purple-200",
                Vehicle:
                    "bg-emerald-50 text-emerald-700 border-emerald-200",
                Other:
                    "bg-slate-50 text-slate-700 border-slate-200",
            };

            return (
                <Badge
                    variant="outline"
                    className={typeStyles[type]}
                >
                    {type}
                </Badge>
            );
        },
    },

    // Status
    {
        accessorKey: "status",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Status"
            />
        ),

        cell: ({ row }) => {
            const isActive =
                row.original.status === "Active";

            return (
                <Badge
                    variant="outline"
                    className={
                        isActive
                            ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                            : "border-slate-200 bg-slate-50 text-slate-600"
                    }
                >
                    <span
                        className={`mr-1.5 h-1.5 w-1.5 rounded-full ${isActive
                                ? "bg-emerald-500"
                                : "bg-slate-400"
                            }`}
                    />

                    {row.original.status}
                </Badge>
            );
        },
    },

    // Created Date
    {
        accessorKey: "createdAt",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Created"
            />
        ),

        cell: ({ row }) => (
            <span className="text-sm text-slate-600">
                {row.original.createdAt}
            </span>
        ),
    },

    // Actions
    {
        id: "actions",

        header: "Actions",

        enableSorting: false,
        enableHiding: false,

        cell: ({ row }) => {
            const category = row.original;

            return (
                <div className="flex items-center gap-2">
                    {/* Edit */}
                    <Link to={`/asset-category/edit/${category.id}`}>
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
                                "Delete Asset Category:",
                                category.id
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