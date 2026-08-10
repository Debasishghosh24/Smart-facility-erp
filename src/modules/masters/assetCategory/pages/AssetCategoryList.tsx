import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
    Boxes,
    CheckCircle2,
    Plus,
    XCircle,
} from "lucide-react";

import { Button } from "@/component/ui/button";
import { Card, CardContent } from "@/component/ui/card";

import AssetCategoryTable from "../components/AssetCategoryTable";
import { mockAssetCategories } from "../mock/assetCategory.mock";

export default function AssetCategoryList() {
    const navigate = useNavigate();

    const totalCategories = mockAssetCategories.length;

    const activeCategories = mockAssetCategories.filter(
        (category) => category.status === "Active"
    ).length;

    const inactiveCategories = mockAssetCategories.filter(
        (category) => category.status === "Inactive"
    ).length;

    const totalAssetTypes = useMemo(() => {
        return new Set(
            mockAssetCategories.map(
                (category) => category.assetType
            )
        ).size;
    }, []);

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
                            Asset Categories
                        </h1>
                    </div>

                    <p className="mt-1 text-muted-foreground">
                        Manage and organize asset categories across
                        the organization.
                    </p>
                </div>

                <Button
                    onClick={() =>
                        navigate("/asset-category/add")
                    }
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Category
                </Button>
            </div>

            {/* ================================================= */}
            {/* Summary Cards */}
            {/* ================================================= */}

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

                {/* Total */}

                <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Total Categories
                            </p>

                            <h2 className="mt-2 text-3xl font-bold">
                                {totalCategories}
                            </h2>

                            <p className="mt-1 text-xs text-muted-foreground">
                                All registered categories
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                            <Boxes className="h-6 w-6 text-blue-600" />
                        </div>
                    </CardContent>
                </Card>

                {/* Active */}

                <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Active Categories
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-emerald-600">
                                {activeCategories}
                            </h2>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Currently available
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50">
                            <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                        </div>
                    </CardContent>
                </Card>

                {/* Inactive */}

                <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Inactive Categories
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-red-500">
                                {inactiveCategories}
                            </h2>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Currently disabled
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                            <XCircle className="h-6 w-6 text-red-500" />
                        </div>
                    </CardContent>
                </Card>

                {/* Asset Types */}

                <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Asset Types
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-violet-600">
                                {totalAssetTypes}
                            </h2>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Classification types
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50">
                            <Boxes className="h-6 w-6 text-violet-600" />
                        </div>
                    </CardContent>
                </Card>

            </div>

            {/* ================================================= */}
            {/* Table */}
            {/* ================================================= */}

            <AssetCategoryTable />

        </div>
    );
}