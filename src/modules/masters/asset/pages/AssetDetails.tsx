import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
    AlertTriangle,
    ArrowLeft,
    ArrowRightLeft,
    Archive,
    Building2,
    CalendarDays,
    CheckCircle2,
    ClipboardList,
    FileText,
    Laptop,
    MapPin,
    Package,
    Pencil,
    RotateCcw,
    ShieldCheck,
    Tag,
    User,
    UserRound,
    Wrench,
} from "lucide-react";

import { Badge } from "@/component/ui/badge";
import { Button } from "@/component/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/component/ui/card";

import { useAssets } from "../context/assetContext";
import type { Asset } from "../types/asset.types";

export default function AssetDetails() {
    const { assets, retireAsset } = useAssets();
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [showRetireConfirm, setShowRetireConfirm] =
        useState(false);

    const [isRetired, setIsRetired] = useState(false);

    // =====================================================
    // Find Asset
    // =====================================================

    const asset = useMemo(
        () => assets.find((item) => item.id === id),
        [assets, id]
    );

    // =====================================================
    // Asset Not Found
    // =====================================================

    if (!asset) {
        return (
            <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                    <AlertTriangle className="h-6 w-6 text-red-500" />
                </div>

                <h2 className="text-lg font-semibold text-slate-900">
                    Asset Not Found
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                    The asset you are looking for does not exist.
                </p>

                <Button
                    type="button"
                    variant="outline"
                    className="mt-4"
                    onClick={() => navigate("/asset")}
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Assets
                </Button>
            </div>
        );
    }

    // =====================================================
    // Effective Status
    // =====================================================

    const currentStatus: Asset["status"] =
        isRetired ? "Retired" : asset.status;

    // =====================================================
    // Status Styles
    // =====================================================

    const statusStyles: Record<Asset["status"], string> = {
        Available:
            "border-emerald-200 bg-emerald-50 text-emerald-700",

        Assigned:
            "border-blue-200 bg-blue-50 text-blue-700",

        "Under Maintenance":
            "border-amber-200 bg-amber-50 text-amber-700",

        Retired:
            "border-slate-200 bg-slate-50 text-slate-600",

        Lost:
            "border-red-200 bg-red-50 text-red-700",
    };

    const dotStyles: Record<Asset["status"], string> = {
        Available: "bg-emerald-500",
        Assigned: "bg-blue-500",
        "Under Maintenance": "bg-amber-500",
        Retired: "bg-slate-400",
        Lost: "bg-red-500",
    };

    // =====================================================
    // Handle Retirement
    // =====================================================

    const handleRetireAsset = () => {
        retireAsset(asset.id);
        setIsRetired(true);
        setShowRetireConfirm(false);

        toast.success("Asset retired successfully.");

        console.log("Retire Asset:", {
            assetId: asset.id,
            assetCode: asset.assetCode,
            assetName: asset.assetName,
        });
    };

    return (
        <div className="space-y-6">
            {/* ================================================= */}
            {/* PAGE HEADER                                      */}
            {/* ================================================= */}

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                {/* Left */}

                <div className="flex items-start gap-3">
                    <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => navigate(-1)}
                        className="mt-1 h-9 w-9 shrink-0"
                    >
                        <ArrowLeft className="h-4 w-4" />
                    </Button>

                    <div>
                        <div className="flex flex-wrap items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                                <Laptop className="h-5 w-5 text-blue-600" />
                            </div>

                            <div>
                                <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                                    {asset.assetName}
                                </h1>

                                <div className="mt-1 flex items-center gap-2">
                                    <Tag className="h-3.5 w-3.5 text-slate-400" />

                                    <span className="font-mono text-xs text-muted-foreground">
                                        {asset.assetCode}
                                    </span>
                                </div>
                            </div>

                            <Badge
                                variant="outline"
                                className={statusStyles[currentStatus]}
                            >
                                <span
                                    className={`mr-1.5 h-1.5 w-1.5 rounded-full ${dotStyles[currentStatus]}`}
                                />

                                {currentStatus}
                            </Badge>
                        </div>
                    </div>
                </div>

                {/* Actions */}

                <div className="flex flex-wrap items-center gap-2">
                    <Link to={`/asset/edit/${asset.id}`}>
                        <Button
                            type="button"
                            variant="outline"
                            disabled={currentStatus === "Retired"}
                        >
                            <Pencil className="mr-2 h-4 w-4" />
                            Edit Asset
                        </Button>
                    </Link>

                    <Link to="/transactions/asset-transfer/add">
                        <Button
                            type="button"
                            variant="outline"
                            disabled={currentStatus === "Retired"}
                        >
                            <ArrowRightLeft className="mr-2 h-4 w-4" />
                            Transfer Asset
                        </Button>
                    </Link>

                    {currentStatus !== "Retired" && (
                        <Button
                            type="button"
                            variant="outline"
                            className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                            onClick={() =>
                                setShowRetireConfirm(true)
                            }
                        >
                            <Archive className="mr-2 h-4 w-4" />
                            Retire Asset
                        </Button>
                    )}
                </div>
            </div>

            {/* ================================================= */}
            {/* RETIRE CONFIRMATION                              */}
            {/* ================================================= */}

            {showRetireConfirm && (
                <Card className="border-red-200 bg-red-50/50">
                    <CardContent className="p-5">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex items-start gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100">
                                    <AlertTriangle className="h-5 w-5 text-red-600" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-900">
                                        Retire this asset?
                                    </h3>

                                    <p className="mt-1 text-sm text-slate-600">
                                        Are you sure you want to
                                        retire{" "}
                                        <span className="font-semibold text-slate-900">
                                            {asset.assetName}
                                        </span>
                                        ?
                                    </p>

                                    <p className="mt-1 text-xs text-red-600">
                                        This asset will no longer be
                                        available for normal
                                        assignment or transfer.
                                    </p>
                                </div>
                            </div>

                            <div className="flex shrink-0 gap-2">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() =>
                                        setShowRetireConfirm(false)
                                    }
                                >
                                    Cancel
                                </Button>

                                <Button
                                    type="button"
                                    className="bg-red-600 hover:bg-red-700"
                                    onClick={
                                        handleRetireAsset
                                    }
                                >
                                    <Archive className="mr-2 h-4 w-4" />
                                    Confirm Retirement
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* ================================================= */}
            {/* SUMMARY CARDS                                    */}
            {/* ================================================= */}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <InfoCard
                    label="Asset Category"
                    value={asset.category}
                    icon={
                        <Package className="h-5 w-5" />
                    }
                />

                <InfoCard
                    label="Asset Type"
                    value={asset.assetType}
                    icon={
                        <Laptop className="h-5 w-5" />
                    }
                />

                <InfoCard
                    label="Site"
                    value={asset.site}
                    icon={
                        <MapPin className="h-5 w-5" />
                    }
                />

                <InfoCard
                    label="Department"
                    value={asset.department}
                    icon={
                        <Building2 className="h-5 w-5" />
                    }
                />
            </div>

            {/* ================================================= */}
            {/* BASIC INFORMATION                                */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Package className="h-5 w-5 text-primary" />
                        Basic Asset Information
                    </CardTitle>
                </CardHeader>

                <CardContent className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <DetailItem
                        label="Asset Code"
                        value={asset.assetCode}
                    />

                    <DetailItem
                        label="Asset Name"
                        value={asset.assetName}
                    />

                    <DetailItem
                        label="Category"
                        value={asset.category}
                    />

                    <DetailItem
                        label="Asset Type"
                        value={asset.assetType}
                    />

                    <DetailItem
                        label="Serial Number"
                        value={
                            <span className="font-mono text-xs">
                                {asset.serialNumber}
                            </span>
                        }
                    />

                    <DetailItem
                        label="Model Number"
                        value={
                            <span className="font-mono text-xs">
                                {asset.modelNumber}
                            </span>
                        }
                    />

                    <DetailItem
                        label="Manufacturer"
                        value={asset.manufacturer}
                    />

                    <DetailItem
                        label="Vendor"
                        value={asset.vendor}
                    />
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* LOCATION & OWNERSHIP                             */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        Location & Ownership
                    </CardTitle>
                </CardHeader>

                <CardContent className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <DetailItem
                        label="Site"
                        value={asset.site}
                        icon={
                            <MapPin className="h-4 w-4" />
                        }
                    />

                    <DetailItem
                        label="Department"
                        value={asset.department}
                        icon={
                            <Building2 className="h-4 w-4" />
                        }
                    />

                    <DetailItem
                        label="Vendor"
                        value={asset.vendor}
                        icon={
                            <UserRound className="h-4 w-4" />
                        }
                    />
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* PURCHASE & WARRANTY                              */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <CalendarDays className="h-5 w-5 text-primary" />
                        Purchase & Warranty
                    </CardTitle>
                </CardHeader>

                <CardContent className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <DetailItem
                        label="Purchase Date"
                        value={asset.purchaseDate}
                    />

                    <DetailItem
                        label="Purchase Cost"
                        value={
                            <span className="font-semibold text-slate-900">
                                ₹
                                {asset.purchaseCost.toLocaleString(
                                    "en-IN"
                                )}
                            </span>
                        }
                    />

                    <DetailItem
                        label="Warranty Expiry"
                        value={asset.warrantyExpiry}
                    />

                    <DetailItem
                        label="Current Status"
                        value={
                            <Badge
                                variant="outline"
                                className={
                                    statusStyles[currentStatus]
                                }
                            >
                                <span
                                    className={`mr-1.5 h-1.5 w-1.5 rounded-full ${dotStyles[currentStatus]}`}
                                />

                                {currentStatus}
                            </Badge>
                        }
                    />
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* ASSET STATUS                                     */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-primary" />
                        Asset Status
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-col gap-4 rounded-xl border bg-slate-50 p-5 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-3">
                            <div
                                className={`flex h-10 w-10 items-center justify-center rounded-xl ${currentStatus === "Retired"
                                    ? "bg-slate-200"
                                    : "bg-emerald-50"
                                    }`}
                            >
                                {currentStatus ===
                                    "Retired" ? (
                                    <Archive className="h-5 w-5 text-slate-600" />
                                ) : (
                                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                                )}
                            </div>

                            <div>
                                <p className="font-semibold text-slate-900">
                                    {currentStatus ===
                                        "Retired"
                                        ? "Asset Retired"
                                        : "Asset is Active"}
                                </p>

                                <p className="text-sm text-muted-foreground">
                                    {currentStatus ===
                                        "Retired"
                                        ? "This asset has been removed from active asset operations."
                                        : "This asset is currently available in the asset management system."}
                                </p>
                            </div>
                        </div>

                        {currentStatus !== "Retired" && (
                            <Button
                                type="button"
                                variant="outline"
                                className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                                onClick={() =>
                                    setShowRetireConfirm(
                                        true
                                    )
                                }
                            >
                                <Archive className="mr-2 h-4 w-4" />
                                Retire Asset
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* QUICK ACTIONS                                    */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <ClipboardList className="h-5 w-5 text-primary" />
                        Quick Actions
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Assignment */}

                        <Link to="/transactions/asset-assignment/add">
                            <Button
                                type="button"
                                variant="outline"
                                className="w-full justify-start"
                                disabled={
                                    currentStatus === "Retired"
                                }
                            >
                                <User className="mr-2 h-4 w-4" />
                                Assign Asset
                            </Button>
                        </Link>

                        {/* Transfer */}

                        <Link to="/transactions/asset-transfer/add">
                            <Button
                                type="button"
                                variant="outline"
                                className="w-full justify-start"
                                disabled={
                                    currentStatus === "Retired"
                                }
                            >
                                <ArrowRightLeft className="mr-2 h-4 w-4" />
                                Transfer Asset
                            </Button>
                        </Link>

                        {/* Maintenance */}

                        <Link to="/maintenance/work-order/add">
                            <Button
                                type="button"
                                variant="outline"
                                className="w-full justify-start"
                                disabled={
                                    currentStatus === "Retired"
                                }
                            >
                                <Wrench className="mr-2 h-4 w-4" />
                                Create Work Order
                            </Button>
                        </Link>

                        {/* Movement History */}

                        <Link
                            to={`/asset/${asset.id}/movement-history`}
                        >
                            <Button
                                type="button"
                                variant="outline"
                                className="w-full justify-start"
                            >
                                <RotateCcw className="mr-2 h-4 w-4" />
                                Movement History
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* FOOTER INFORMATION                               */}
            {/* ================================================= */}

            <Card>
                <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                            <FileText className="h-4 w-4 text-slate-600" />
                        </div>

                        <div>
                            <p className="text-sm font-medium text-slate-900">
                                Asset Record
                            </p>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Asset ID:{" "}
                                <span className="font-mono">
                                    {asset.id}
                                </span>
                            </p>

                            <p className="text-xs text-muted-foreground">
                                Created:{" "}
                                {asset.createdAt}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

// =============================================================
// INFO CARD
// =============================================================

interface InfoCardProps {
    label: string;
    value: string;
    icon: React.ReactNode;
}

function InfoCard({
    label,
    value,
    icon,
}: InfoCardProps) {
    return (
        <div className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">
                        {label}
                    </p>

                    <p className="mt-1 truncate font-semibold text-slate-900">
                        {value}
                    </p>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {icon}
                </div>
            </div>
        </div>
    );
}

// =============================================================
// DETAIL ITEM
// =============================================================

interface DetailItemProps {
    label: string;
    value: React.ReactNode;
    icon?: React.ReactNode;
}

function DetailItem({
    label,
    value,
    icon,
}: DetailItemProps) {
    return (
        <div className="min-w-0">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                {label}
            </p>

            <div className="flex items-center gap-2 break-words text-sm font-medium text-slate-700">
                {icon && (
                    <span className="shrink-0 text-slate-400">
                        {icon}
                    </span>
                )}

                {value}
            </div>
        </div>
    );
}