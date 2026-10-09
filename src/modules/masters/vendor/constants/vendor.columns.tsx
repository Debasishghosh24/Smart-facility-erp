import { Link } from "react-router-dom";
import type { ColumnDef } from "@tanstack/react-table";
import { Building2, Pencil, Trash2, User } from "lucide-react";
import { toast } from "sonner";

import { Badge } from "@/component/ui/badge";
import { Button } from "@/component/ui/button";

import { DataTableColumnHeader } from "@/shared/components/dataTable/DataTableColumnHeader";

import type { Vendor } from "../types/vendor.types";
import { useVendors } from "../context/vendorContext";

export const columns: ColumnDef<Vendor>[] = [
    {
        accessorKey: "vendorName",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Vendor"
            />
        ),

        cell: ({ row }) => {
            const vendor = row.original;

            return (
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <Building2 className="h-5 w-5 text-blue-600" />
                    </div>

                    <div>
                        <p className="font-medium">
                            {vendor.vendorName}
                        </p>

                        <p className="text-xs text-muted-foreground">
                            {vendor.vendorCode}
                        </p>
                    </div>
                </div>
            );
        },
    },

    {
        accessorKey: "companyName",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Company"
            />
        ),

        cell: ({ row }) => (
            <p className="max-w-[220px] truncate">
                {row.original.companyName}
            </p>
        ),
    },

    {
        accessorKey: "contactPerson",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Contact"
            />
        ),

        cell: ({ row }) => {
            const vendor = row.original;

            return (
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-slate-500" />

                        <span>{vendor.contactPerson}</span>
                    </div>

                    <p className="text-xs text-muted-foreground">
                        {vendor.contactNo}
                    </p>
                </div>
            );
        },
    },

    {
        accessorKey: "email",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Email"
            />
        ),

        cell: ({ row }) => (
            <p className="max-w-[220px] truncate text-sm">
                {row.original.email}
            </p>
        ),
    },

    {
        accessorKey: "gstNumber",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="GST No."
            />
        ),

        cell: ({ row }) => (
            <Badge variant="outline">
                {row.original.gstNumber}
            </Badge>
        ),
    },

    {
        accessorKey: "status",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Status"
            />
        ),

        cell: ({ row }) => (
            <Badge
                variant={
                    row.original.status === "Active"
                        ? "default"
                        : "secondary"
                }
            >
                {row.original.status}
            </Badge>
        ),
    },

    {
        accessorKey: "createdAt",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Created"
            />
        ),
    },

    {
        id: "actions",

        header: "Actions",

        enableSorting: false,
        enableHiding: false,

        cell: ({ row }) => <ActionsCell id={row.original.id} />,
    },
];

const ActionsCell = ({ id }: { id: string }) => {
    const { deleteVendor } = useVendors();

    const handleDelete = () => {
        deleteVendor(id);
        toast.success("Vendor deleted successfully");
    };

    return (
        <div className="flex items-center gap-2">
            <Link to={`/vendor/edit/${id}`}>
                <Button
                    size="icon"
                    variant="outline"
                >
                    <Pencil className="h-4 w-4" />
                </Button>
            </Link>

            <Button
                size="icon"
                variant="destructive"
                onClick={handleDelete}
            >
                <Trash2 className="h-4 w-4" />
            </Button>
        </div>
    );
};