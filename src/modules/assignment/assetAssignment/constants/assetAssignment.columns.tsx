import type { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import {
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

import type { AssetAssignment } from "../types/assetAssignment.types";

export const columns: ColumnDef<AssetAssignment>[] = [
    // =====================================================
    // Assignment
    // =====================================================

    {
        accessorKey: "assignmentId",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Assignment"
            />
        ),

        cell: ({ row }) => (
            <div className="min-w-[120px]">
                <p className="font-medium text-slate-900">
                    {row.original.assignmentId}
                </p>

                <p className="mt-0.5 text-xs text-muted-foreground">
                    {row.original.createdAt}
                </p>
            </div>
        ),
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
            const assignment = row.original;

            return (
                <div className="flex min-w-[220px] items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                        <Laptop className="h-4 w-4 text-blue-600" />
                    </div>

                    <div className="min-w-0">
                        <p className="truncate font-medium text-slate-900">
                            {assignment.assetName}
                        </p>

                        <p className="mt-0.5 text-xs text-muted-foreground">
                            {assignment.assetCode}
                        </p>
                    </div>
                </div>
            );
        },
    },

    // =====================================================
    // Employee
    // =====================================================

    {
        accessorKey: "employeeName",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Employee"
            />
        ),

        cell: ({ row }) => {
            const assignment = row.original;

            const initials = assignment.employeeName
                .split(" ")
                .map((name) => name.charAt(0))
                .slice(0, 2)
                .join("")
                .toUpperCase();

            return (
                <div className="flex min-w-[190px] items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-50 text-xs font-semibold text-violet-700">
                        {initials}
                    </div>

                    <div className="min-w-0">
                        <p className="truncate font-medium text-slate-900">
                            {assignment.employeeName}
                        </p>

                        <p className="mt-0.5 text-xs text-muted-foreground">
                            {assignment.employeeId}
                        </p>
                    </div>
                </div>
            );
        },
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

                <span className="truncate text-sm text-slate-700">
                    {row.original.department}
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
            <div className="flex max-w-[190px] items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-slate-400" />

                <span className="truncate text-sm text-slate-700">
                    {row.original.site}
                </span>
            </div>
        ),
    },

    // =====================================================
    // Assignment Date
    // =====================================================

    {
        accessorKey: "assignmentDate",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Assigned"
            />
        ),

        cell: ({ row }) => (
            <div className="flex items-center gap-2 text-sm text-slate-600">
                <CalendarDays className="h-4 w-4 text-slate-400" />

                {row.original.assignmentDate}
            </div>
        ),
    },

    // =====================================================
    // Expected Return Date
    // =====================================================

    {
        accessorKey: "expectedReturnDate",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Expected Return"
            />
        ),

        cell: ({ row }) => (
            <span className="text-sm text-slate-600">
                {row.original.expectedReturnDate}
            </span>
        ),
    },

    // =====================================================
    // Condition
    // =====================================================

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

            return (
                <Badge
                    variant="outline"
                    className={conditionStyles[condition]}
                >
                    {condition}
                </Badge>
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
                Assigned:
                    "border-blue-200 bg-blue-50 text-blue-700",

                Returned:
                    "border-slate-200 bg-slate-50 text-slate-600",

                Overdue:
                    "border-red-200 bg-red-50 text-red-700",
            };

            const dotStyles = {
                Assigned: "bg-blue-500",
                Returned: "bg-slate-400",
                Overdue: "bg-red-500",
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
            const assignment = row.original;

            return (
                <div className="flex items-center gap-2">
                    {/* Edit */}

                    <Link to={`/transactions/asset-assignment/edit/${assignment.id}`}>
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
                                "Delete Assignment:",
                                assignment.id
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