import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
    ClipboardCheck,
    Plus,
    CheckCircle2,
    Clock3,
    AlertTriangle,
} from "lucide-react";

import { Button } from "@/component/ui/button";
import { Card, CardContent } from "@/component/ui/card";

import AssetReturnTable from "../components/assetReturnTable";
import { mockAssetReturns } from "../mock/assetReturn.mock";

export default function AssetReturnList() {
    const navigate = useNavigate();

    // =====================================================
    // Summary Counts
    // =====================================================

    const totalReturns = mockAssetReturns.length;

    const returnedCount = useMemo(
        () =>
            mockAssetReturns.filter(
                (item) => item.status === "Returned"
            ).length,
        []
    );

    const pendingInspectionCount = useMemo(
        () =>
            mockAssetReturns.filter(
                (item) =>
                    item.status === "Pending Inspection"
            ).length,
        []
    );

    const damagedCount = useMemo(
        () =>
            mockAssetReturns.filter(
                (item) => item.condition === "Damaged"
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
                        <ClipboardCheck className="h-7 w-7 text-emerald-600" />

                        <h1 className="text-3xl font-bold tracking-tight">
                            Asset Returns
                        </h1>
                    </div>

                    <p className="mt-1 text-muted-foreground">
                        Track returned assets, inspection status,
                        return condition and asset recovery history.
                    </p>
                </div>

                <Button
                    onClick={() =>
                        navigate(
                            "/transactions/asset-return/add"
                        )
                    }
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Process Return
                </Button>
            </div>

            {/* ================================================= */}
            {/* Summary Cards */}
            {/* ================================================= */}

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {/* Total Returns */}

                <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Total Returns
                            </p>

                            <h2 className="mt-2 text-3xl font-bold">
                                {totalReturns}
                            </h2>

                            <p className="mt-1 text-xs text-muted-foreground">
                                All return records
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                            <ClipboardCheck className="h-6 w-6 text-blue-600" />
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

                            <h2 className="mt-2 text-3xl font-bold text-emerald-600">
                                {returnedCount}
                            </h2>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Successfully returned
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50">
                            <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                        </div>
                    </CardContent>
                </Card>

                {/* Pending Inspection */}

                <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Pending Inspection
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-amber-600">
                                {pendingInspectionCount}
                            </h2>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Awaiting asset inspection
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
                            <Clock3 className="h-6 w-6 text-amber-600" />
                        </div>
                    </CardContent>
                </Card>

                {/* Damaged */}

                <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Damaged Returns
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-red-600">
                                {damagedCount}
                            </h2>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Requires maintenance review
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                            <AlertTriangle className="h-6 w-6 text-red-600" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* ================================================= */}
            {/* Return Table */}
            {/* ================================================= */}

            <AssetReturnTable />
        </div>
    );
}