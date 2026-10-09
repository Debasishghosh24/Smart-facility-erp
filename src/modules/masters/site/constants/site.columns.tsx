import type { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import { Button } from "@/component/ui/button";
import { DataTableColumnHeader } from "@/shared/components/dataTable/DataTableColumnHeader";
import type { Site } from "../types/site.types";
import { useSites } from "../context/siteContext";

export const columns: ColumnDef<Site>[] = [
  {
    accessorKey: "siteName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Site Name" />
    ),
  },
  {
    accessorKey: "siteCode",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Site Code" />
    ),
  },
  {
    accessorKey: "department",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Department" />
    ),
  },
  {
    accessorKey: "city",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="City" />
    ),
  },
  {
    accessorKey: "siteHead",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Site Head" />
    ),
  },
  {
    accessorKey: "contactNo",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Contact No" />
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border ${
          status === "Active" 
            ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
            : "bg-slate-50 text-slate-600 border-slate-200"
        }`}>
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
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
  const { deleteSite } = useSites();

  const handleDelete = () => {
    deleteSite(id);
    toast.success("Site deleted successfully");
  };

  return (
    <div className="flex items-center gap-2">
      <Link to={`/site/edit/${id}`}>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700 bg-white"
        >
          <Pencil className="h-3.5 w-3.5" />
        </Button>
      </Link>

      <Button
        variant="outline"
        size="icon"
        onClick={handleDelete}
        className="h-8 w-8 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 bg-white"
      >
        <Trash2 className="h-3.5 w-3.5" />
      </Button>
    </div>
  );
};