import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
    ClipboardList,
    Plus,
    RotateCcw,
    UserRoundCheck,
    AlertTriangle,
} from "lucide-react";

import { Button } from "@/component/ui/button";
import { Card, CardContent } from "@/component/ui/card";

import AssetAssignmentTable from "../components/AssetAssignmentTable";
import { mockAssetAssignments } from "../mock/assetAssignment.mock";

export default function AssetAssignmentList() {
    const navigate = useNavigate();

    const totalAssignments = mockAssetAssignments.length;

    const assignedCount = useMemo(
        () =>
            mockAssetAssignments.filter(
                (assignment) =>
                    assignment.status === "Assigned"
            ).length,
        []
    );

    const returnedCount = useMemo(
        () =>
            mockAssetAssignments.filter(
                (assignment) =>
                    assignment.status === "Returned"
            ).length,
        []
    );

    const overdueCount = useMemo(
        () =>
            mockAssetAssignments.filter(
                (assignment) =>
                    assignment.status === "Overdue"
            ).length,
        []
    );

    return (
        <div className="space-y-6">
            {/* ================================================= */}
            {/* Page Header */}
            {/* ================================================= */}

            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
                <div>
                    <div className="flex items-center gap-2">
                        <ClipboardList className="h-7 w-7 text-blue-600" />

                        <h1 className="text-3xl font-bold tracking-tight">
                            Asset Assignments
                        </h1>
                    </div>

                    <p className="mt-1 text-muted-foreground">
                        Track asset ownership, employee assignments,
                        returns and assignment history.
                    </p>
                </div>

                <Button
                    onClick={() =>
                        navigate(
                            "/transactions/asset-assignment/add"
                        )
                    }
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Assign Asset
                </Button>
            </div>

            {/* ================================================= */}
            {/* Summary Cards */}
            {/* ================================================= */}

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {/* Total Assignments */}

                <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Total Assignments
                            </p>

                            <h2 className="mt-2 text-3xl font-bold">
                                {totalAssignments}
                            </h2>

                            <p className="mt-1 text-xs text-muted-foreground">
                                All assignment records
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                            <ClipboardList className="h-6 w-6 text-blue-600" />
                        </div>
                    </CardContent>
                </Card>

                {/* Active Assignments */}

                <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Active Assignments
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-emerald-600">
                                {assignedCount}
                            </h2>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Assets currently assigned
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50">
                            <UserRoundCheck className="h-6 w-6 text-emerald-600" />
                        </div>
                    </CardContent>
                </Card>

                {/* Returned */}

                <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Returned
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-slate-600">
                                {returnedCount}
                            </h2>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Completed assignments
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                            <RotateCcw className="h-6 w-6 text-slate-600" />
                        </div>
                    </CardContent>
                </Card>

                {/* Overdue */}

                <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Overdue
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-red-600">
                                {overdueCount}
                            </h2>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Requires attention
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                            <AlertTriangle className="h-6 w-6 text-red-600" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* ================================================= */}
            {/* Assignment Table */}
            {/* ================================================= */}

            <AssetAssignmentTable />
        </div>
    );
}