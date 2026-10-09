import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
    Boxes,
    CheckCircle2,
    Plus,
    UserRoundCheck,
    Wrench,
} from "lucide-react";

import { Button } from "@/component/ui/button";
import { Card, CardContent } from "@/component/ui/card";

import AssetTable from "../components/AssetTable";
import { useAssets } from "../context/assetContext";
// import { mockAssets } from "../mock/asset.mock";


export default function AssetList() {
    const navigate = useNavigate();
    const { assets } = useAssets();

    const totalAssets = assets.length;

    const availableAssets = useMemo(
        () =>
            assets.filter(
                (asset) => asset.status === "Available"
            ).length,
        [assets]
    );

    const assignedAssets = useMemo(
        () =>
            assets.filter(
                (asset) => asset.status === "Assigned"
            ).length,
        [assets]
    );

    const maintenanceAssets = useMemo(
        () =>
            assets.filter(
                (asset) =>
                    asset.status === "Under Maintenance"
            ).length,
        [assets]
    );

    return (
        <div className="space-y-6">
            {/* ================================================= */}
            {/* Page Header */}
            {/* ================================================= */}

            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
                <div>
                    <div className="flex items-center gap-2">
                        <Boxes className="h-7 w-7 text-blue-600" />

                        <h1 className="text-3xl font-bold tracking-tight">
                            Asset Master
                        </h1>
                    </div>

                    <p className="mt-1 text-muted-foreground">
                        Manage, track and monitor all organizational
                        assets from one place.
                    </p>
                </div>

                <Button
                    onClick={() =>
                        navigate("/asset/add")
                    }
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Asset
                </Button>
            </div>

            {/* ================================================= */}
            {/* Summary Cards */}
            {/* ================================================= */}

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {/* Total Assets */}

                <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Total Assets
                            </p>

                            <h2 className="mt-2 text-3xl font-bold">
                                {totalAssets}
                            </h2>

                            <p className="mt-1 text-xs text-muted-foreground">
                                All registered assets
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                            <Boxes className="h-6 w-6 text-blue-600" />
                        </div>
                    </CardContent>
                </Card>

                {/* Available */}

                <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Available
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-emerald-600">
                                {availableAssets}
                            </h2>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Ready for assignment
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50">
                            <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                        </div>
                    </CardContent>
                </Card>

                {/* Assigned */}

                <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Assigned
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-blue-600">
                                {assignedAssets}
                            </h2>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Currently assigned
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                            <UserRoundCheck className="h-6 w-6 text-blue-600" />
                        </div>
                    </CardContent>
                </Card>

                {/* Maintenance */}

                <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Under Maintenance
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-amber-600">
                                {maintenanceAssets}
                            </h2>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Currently in service
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
                            <Wrench className="h-6 w-6 text-amber-600" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* ================================================= */}
            {/* Asset Table */}
            {/* ================================================= */}

            <AssetTable />
        </div>
    );
}