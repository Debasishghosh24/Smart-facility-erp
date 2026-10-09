import type { ColumnDef } from "@tanstack/react-table";
import { 
  Pencil, 
  Trash2,
  Code2, 
  Users2, 
  Wallet, 
  Building2, 
  Settings2, 
  TrendingUp, 
  Megaphone, 
  Headset,
  HelpCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { DataTableColumnHeader } from "@/shared/components/dataTable/DataTableColumnHeader";
import { Button } from "@/component/ui/button";
import { toast } from "sonner";

import type { Department } from "../types/department.types";
import { useDepartments } from "../context/departmentContext";

function getDepartmentIcon(name: string) {
  const n = name.toLowerCase();
  if (n.includes("information technology") || n.includes("it")) {
    return { icon: Code2, bg: "bg-blue-50 text-blue-600 border border-blue-100" };
  }
  if (n.includes("human resources") || n.includes("hr")) {
    return { icon: Users2, bg: "bg-emerald-50 text-emerald-600 border border-emerald-100" };
  }
  if (n.includes("finance") || n.includes("accounts") || n.includes("fin")) {
    return { icon: Wallet, bg: "bg-amber-50 text-amber-600 border border-amber-100" };
  }
  if (n.includes("admin") || n.includes("office") || n.includes("administration")) {
    return { icon: Building2, bg: "bg-purple-50 text-purple-600 border border-purple-100" };
  }
  if (n.includes("operations") || n.includes("ops")) {
    return { icon: Settings2, bg: "bg-blue-50 text-blue-600 border border-blue-100" };
  }
  if (n.includes("sales")) {
    return { icon: TrendingUp, bg: "bg-emerald-50 text-emerald-600 border border-emerald-100" };
  }
  if (n.includes("marketing") || n.includes("branding")) {
    return { icon: Megaphone, bg: "bg-pink-50 text-pink-600 border border-pink-100" };
  }
  if (n.includes("customer") || n.includes("support")) {
    return { icon: Headset, bg: "bg-orange-50 text-orange-600 border border-orange-100" };
  }
  return { icon: HelpCircle, bg: "bg-slate-50 text-slate-600 border border-slate-100" };
}

export const columns: ColumnDef<Department>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <input
        type="checkbox"
        checked={table.getIsAllPageRowsSelected()}
        onChange={(e) => table.toggleAllPageRowsSelected(!!e.target.checked)}
        aria-label="Select all"
        className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        onChange={(e) => row.toggleSelected(!!e.target.checked)}
        aria-label="Select row"
        className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Department Name"
      />
    ),
    cell: ({ row }) => {
      const name = row.original.name;
      const { icon: Icon, bg } = getDepartmentIcon(name);
      return (
        <div className="flex items-center gap-3">
          <div className={`p-1.5 rounded-lg ${bg}`}>
            <Icon className="h-4 w-4" />
          </div>
          <span className="font-semibold text-slate-800">{name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "shortCode",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Short Code"
      />
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
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
      <DataTableColumnHeader
        column={column}
        title="Created At"
      />
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <ActionsCell id={row.original.id} />
  },
];

const ActionsCell = ({ id }: { id: string }) => {
  const { deleteDepartment } = useDepartments();

  const handleDelete = () => {
    deleteDepartment(id);
    toast.success("Department deleted successfully");
  };

  return (
    <div className="flex gap-2">
      <Link to={`/department/edit/${id}`}>
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
        className="h-8 w-8 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 bg-white"
        onClick={handleDelete}
      >
        <Trash2 className="h-3.5 w-3.5" />
      </Button>
    </div>
  );
};
