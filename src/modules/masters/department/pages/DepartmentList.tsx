import { Link } from "react-router-dom";
import { Plus, Building2, CheckCircle2, AlertTriangle, Users } from "lucide-react";

import { Button } from "@/component/ui/button";
import DepartmentTable from "../components/DepartmentTable";
import { useDepartments } from "../context/departmentContext";

export default function DepartmentList() {
    const { departments } = useDepartments();
    const totalDepartments = departments.length;
    const activeDepartments = departments.filter(d => d.status === "Active").length;
    const inactiveDepartments = departments.filter(d => d.status === "Inactive").length;
    const totalEmployees = 423; // Mock value matching mockup design

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">
                        Department Management
                    </h1>

                    <p className="text-sm text-slate-500">
                        Manage and organize all departments in your organization
                    </p>
                </div>

                <Link to="/department/add">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 flex items-center gap-1">
                        <Plus className="h-4 w-4" />
                        Add Department
                    </Button>
                </Link>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {/* Card 1 */}
                <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="rounded-full bg-blue-50 p-3 text-blue-600 border border-blue-100/50">
                        <Building2 className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Departments</p>
                        <h3 className="text-2xl font-bold text-slate-850">{totalDepartments}</h3>
                        <p className="text-xs text-slate-400">All departments</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="rounded-full bg-emerald-50 p-3 text-emerald-600 border border-emerald-100/50">
                        <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Departments</p>
                        <h3 className="text-2xl font-bold text-slate-850">{activeDepartments}</h3>
                        <p className="text-xs text-slate-400">Currently active</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="rounded-full bg-amber-50 p-3 text-amber-600 border border-amber-100/50">
                        <AlertTriangle className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Inactive Departments</p>
                        <h3 className="text-2xl font-bold text-slate-850">{inactiveDepartments}</h3>
                        <p className="text-xs text-slate-400">Currently inactive</p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="rounded-full bg-purple-50 p-3 text-purple-600 border border-purple-100/50">
                        <Users className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Employees</p>
                        <h3 className="text-2xl font-bold text-slate-850">{totalEmployees}</h3>
                        <p className="text-xs text-slate-400">Across all departments</p>
                    </div>
                </div>
            </div>

            {/* Table */}
            <DepartmentTable />
        </div>
    );
}