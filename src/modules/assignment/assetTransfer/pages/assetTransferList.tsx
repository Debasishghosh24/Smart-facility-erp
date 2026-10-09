import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
    ArrowRightLeft,
    Plus,
    CheckCircle2,
    Clock3,
    XCircle,
} from "lucide-react";

import { Button } from "@/component/ui/button";
import { Card, CardContent } from "@/component/ui/card";

import AssetTransferTable from "../components/assetTransferTable";
import { mockAssetTransfers } from "../mock/assetTransfer.mock";

export default function AssetTransferList() {
    const navigate = useNavigate();



    const totalTransfers = mockAssetTransfers.length;

    const completedCount = useMemo(
        () =>
            mockAssetTransfers.filter(
                (item) => item.status === "Completed"
            ).length,
        []
    );

    const pendingCount = useMemo(
        () =>
            mockAssetTransfers.filter(
                (item) => item.status === "Pending"
            ).length,
        []
    );

    const cancelledCount = useMemo(
        () =>
            mockAssetTransfers.filter(
                (item) => item.status === "Cancelled"
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
                        <ArrowRightLeft className="h-7 w-7 text-blue-600" />

                        <h1 className="text-3xl font-bold tracking-tight">
                            Asset Transfers
                        </h1>
                    </div>

                    <p className="mt-1 text-muted-foreground">
                        Track asset movements between employees,
                        departments and sites.
                    </p>
                </div>

                <Button
                    onClick={() =>
                        navigate(
                            "/transactions/asset-transfer/add"
                        )
                    }
                >
                    <Plus className="mr-2 h-4 w-4" />
                    New Transfer
                </Button>
            </div>

            {/* ================================================= */}
            {/* Summary Cards */}
            {/* ================================================= */}

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {/* Total Transfers */}

                <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Total Transfers
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-slate-900">
                                {totalTransfers}
                            </h2>

                            <p className="mt-1 text-xs text-muted-foreground">
                                All asset movements
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                            <ArrowRightLeft className="h-6 w-6 text-blue-600" />
                        </div>
                    </CardContent>
                </Card>

                {/* Completed */}

                <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Completed
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-emerald-600">
                                {completedCount}
                            </h2>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Successfully transferred
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50">
                            <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                        </div>
                    </CardContent>
                </Card>

                {/* Pending */}

                <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Pending
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-amber-600">
                                {pendingCount}
                            </h2>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Awaiting completion
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
                            <Clock3 className="h-6 w-6 text-amber-600" />
                        </div>
                    </CardContent>
                </Card>

                {/* Cancelled */}

                <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Cancelled
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-red-600">
                                {cancelledCount}
                            </h2>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Cancelled transfers
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                            <XCircle className="h-6 w-6 text-red-600" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* ================================================= */}
            {/* Transfer Table */}
            {/* ================================================= */}

            <AssetTransferTable />
        </div>
    );
}