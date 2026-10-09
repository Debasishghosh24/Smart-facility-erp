import type { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { Pencil, Trash2, User } from "lucide-react";
import { toast } from "sonner";

import { Badge } from "@/component/ui/badge";
import { Button } from "@/component/ui/button";

import { DataTableColumnHeader } from "@/shared/components/dataTable/DataTableColumnHeader";

import type { Employee } from "../types/employee.types";
import { useEmployees } from "../context/employeeContext";

export const columns: ColumnDef<Employee>[] = [
    {
        accessorKey: "employeeId",
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Employee"
            />
        ),

        cell: ({ row }) => {
            const employee = row.original;

            return (
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <User className="h-5 w-5 text-blue-600" />
                    </div>

                    <div>
                        <p className="font-medium">
                            {employee.firstName} {employee.lastName}
                        </p>

                        <p className="text-xs text-muted-foreground">
                            {employee.employeeId}
                        </p>
                    </div>
                </div>
            );
        },
    },

    {
        accessorKey: "designation",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Designation"
            />
        ),
    },

    {
        accessorKey: "department",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Department"
            />
        ),
    },

    {
        accessorKey: "site",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Site"
            />
        ),
    },

    {
        accessorKey: "employmentType",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Employment"
            />
        ),

        cell: ({ row }) => {
            return (
                <Badge variant="outline">
                    {row.original.employmentType}
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
            return (
                <Badge
                    variant={
                        row.original.status === "Active"
                            ? "default"
                            : "secondary"
                    }
                >
                    {row.original.status}
                </Badge>
            );
        },
    },

    {
        accessorKey: "joiningDate",

        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Joining Date"
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
    const { deleteEmployee } = useEmployees();

    const handleDelete = () => {
        deleteEmployee(id);
        toast.success("Employee deleted successfully");
    };

    return (
        <div className="flex items-center gap-2">
            <Link to={`/employee/edit/${id}`}>
                <Button
                    variant="outline"
                    size="icon"
                >
                    <Pencil className="h-4 w-4" />
                </Button>
            </Link>

            <Button
                variant="destructive"
                size="icon"
                onClick={handleDelete}
            >
                <Trash2 className="h-4 w-4" />
            </Button>
        </div>
    );
};