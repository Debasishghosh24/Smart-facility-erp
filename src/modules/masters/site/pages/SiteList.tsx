import { Link } from "react-router-dom";
import { Plus, MapPin, CheckCircle2, AlertTriangle, Users } from "lucide-react";

import { Button } from "@/component/ui/button";
import { SiteTable } from "../components/SiteTable";
import { mockSites } from "../mock/site.mock";
import { mockEmployees } from "../../employee/mock/employee.mock";

export default function SiteList() {
    const totalSites = mockSites.length;
    const activeSites = mockSites.filter(s => s.status === "Active").length;
    const inactiveSites = mockSites.filter(s => s.status === "Inactive").length;
    const totalEmployees = mockEmployees.length;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">
                        Site Management
                    </h1>

                    <p className="text-sm text-muted-foreground">
                        Manage all sites from one place.
                    </p>
                </div>

                <Link to="/site/add">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Site
                    </Button>
                </Link>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {/* Card 1 */}
                <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="rounded-full bg-blue-50 p-3 text-blue-600 border border-blue-100/50">
                        <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Sites</p>
                        <h3 className="text-2xl font-bold text-slate-850">{totalSites}</h3>
                        <p className="text-xs text-slate-400">All registered sites</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="rounded-full bg-emerald-50 p-3 text-emerald-600 border border-emerald-100/50">
                        <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Sites</p>
                        <h3 className="text-2xl font-bold text-slate-850">{activeSites}</h3>
                        <p className="text-xs text-slate-400">Currently active</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="rounded-full bg-amber-50 p-3 text-amber-600 border border-amber-100/50">
                        <AlertTriangle className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Inactive Sites</p>
                        <h3 className="text-2xl font-bold text-slate-850">{inactiveSites}</h3>
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
                        <p className="text-xs text-slate-400">Across all sites</p>
                    </div>
                </div>
            </div>

            {/* Table */}
            <SiteTable />
        </div>
    );
}