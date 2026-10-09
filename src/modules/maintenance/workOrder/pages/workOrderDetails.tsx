import { Link, useNavigate, useParams } from "react-router-dom";
import {
    AlertCircle,
    ArrowLeft,

    CalendarDays,
    ClipboardList,
    IndianRupee,
    MapPin,
    Package,
    Pencil,
    User,
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

import { workOrderMock } from "../mock/workOrder.mock";

export default function WorkOrderDetails() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();



    const workOrder = workOrderMock.find(
        (item) => item.id === id
    );



    if (!workOrder) {
        return (
            <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                    <AlertCircle className="h-6 w-6 text-red-500" />
                </div>

                <h2 className="text-lg font-semibold text-slate-900">
                    Work Order Not Found
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                    The work order you are looking for does not exist.
                </p>

                <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() =>
                        navigate("/maintenance/work-order")
                    }
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Work Orders
                </Button>
            </div>
        );
    }

    // =====================================================
    // Status Styles
    // =====================================================

    const statusStyles = {
        Open:
            "border-blue-200 bg-blue-50 text-blue-700",

        "In Progress":
            "border-amber-200 bg-amber-50 text-amber-700",

        "On Hold":
            "border-orange-200 bg-orange-50 text-orange-700",

        Completed:
            "border-emerald-200 bg-emerald-50 text-emerald-700",

        Cancelled:
            "border-red-200 bg-red-50 text-red-700",
    };

    const dotStyles = {
        Open: "bg-blue-500",

        "In Progress":
            "bg-amber-500",

        "On Hold":
            "bg-orange-500",

        Completed:
            "bg-emerald-500",

        Cancelled:
            "bg-red-500",
    };

    // =====================================================
    // Priority Styles
    // =====================================================

    const priorityStyles = {
        Low:
            "border-slate-200 bg-slate-50 text-slate-600",

        Medium:
            "border-blue-200 bg-blue-50 text-blue-700",

        High:
            "border-amber-200 bg-amber-50 text-amber-700",

        Critical:
            "border-red-200 bg-red-50 text-red-700",
    };

    return (
        <div className="space-y-6">
            {/* ================================================= */}
            {/* HEADER                                            */}
            {/* ================================================= */}

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-3">
                    <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => navigate(-1)}
                        className="h-9 w-9"
                    >
                        <ArrowLeft className="h-4 w-4" />
                    </Button>

                    <div>
                        <div className="flex flex-wrap items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                                <ClipboardList className="h-5 w-5 text-blue-600" />
                            </div>

                            <div>
                                <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                                    {workOrder.workOrderNumber}
                                </h1>

                                <p className="text-sm text-muted-foreground">
                                    Work Order Details
                                </p>
                            </div>

                            <Badge
                                variant="outline"
                                className={
                                    statusStyles[
                                    workOrder.status
                                    ]
                                }
                            >
                                <span
                                    className={`mr-1.5 h-1.5 w-1.5 rounded-full ${dotStyles[
                                        workOrder.status
                                    ]
                                        }`}
                                />

                                {workOrder.status}
                            </Badge>
                        </div>
                    </div>
                </div>

                {/* Edit */}

                <Link
                    to={`/maintenance/work-order/edit/${workOrder.id}`}
                >
                    <Button>
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit Work Order
                    </Button>
                </Link>
            </div>

            {/* ================================================= */}
            {/* OVERVIEW CARDS                                    */}
            {/* ================================================= */}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <InfoCard
                    label="Asset"
                    value={workOrder.assetName}
                    icon={
                        <Package className="h-5 w-5" />
                    }
                />

                <InfoCard
                    label="Maintenance Type"
                    value={workOrder.maintenanceType}
                    icon={
                        <Wrench className="h-5 w-5" />
                    }
                />

                <InfoCard
                    label="Priority"
                    value={workOrder.priority}
                    icon={
                        <AlertCircle className="h-5 w-5" />
                    }
                />

                <InfoCard
                    label="Assigned To"
                    value={workOrder.assignedTo}
                    icon={
                        <User className="h-5 w-5" />
                    }
                />
            </div>

            {/* ================================================= */}
            {/* ASSET INFORMATION                                 */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Package className="h-5 w-5 text-primary" />
                        Asset Information
                    </CardTitle>
                </CardHeader>

                <CardContent className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <DetailItem
                        label="Asset ID"
                        value={workOrder.assetId}
                    />

                    <DetailItem
                        label="Asset Code"
                        value={workOrder.assetCode}
                    />

                    <DetailItem
                        label="Asset Name"
                        value={workOrder.assetName}
                    />

                    <DetailItem
                        label="Department"
                        value={workOrder.department}
                    />
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* MAINTENANCE DETAILS                               */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Wrench className="h-5 w-5 text-primary" />
                        Maintenance Details
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <DetailItem
                            label="Maintenance Type"
                            value={workOrder.maintenanceType}
                        />

                        <DetailItem
                            label="Priority"
                            value={
                                <Badge
                                    variant="outline"
                                    className={
                                        priorityStyles[
                                        workOrder.priority
                                        ]
                                    }
                                >
                                    {workOrder.priority}
                                </Badge>
                            }
                        />

                        <DetailItem
                            label="Status"
                            value={
                                <Badge
                                    variant="outline"
                                    className={
                                        statusStyles[
                                        workOrder.status
                                        ]
                                    }
                                >
                                    <span
                                        className={`mr-1.5 h-1.5 w-1.5 rounded-full ${dotStyles[
                                            workOrder.status
                                        ]
                                            }`}
                                    />

                                    {workOrder.status}
                                </Badge>
                            }
                        />
                    </div>

                    <div>
                        <p className="mb-2 text-sm font-medium text-slate-500">
                            Issue / Maintenance Description
                        </p>

                        <div className="rounded-lg border bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                            {workOrder.issueDescription}
                        </div>
                    </div>

                    {workOrder.remarks && (
                        <div>
                            <p className="mb-2 text-sm font-medium text-slate-500">
                                Remarks
                            </p>

                            <div className="rounded-lg border bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                                {workOrder.remarks}
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* REQUEST & ASSIGNMENT                               */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5 text-primary" />
                        Request & Assignment
                    </CardTitle>
                </CardHeader>

                <CardContent className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <DetailItem
                        label="Requested By"
                        value={workOrder.requestedBy}
                    />

                    <DetailItem
                        label="Requested Date"
                        value={workOrder.requestedDate}
                    />

                    <DetailItem
                        label="Assigned To"
                        value={workOrder.assignedTo}
                    />

                    <DetailItem
                        label="Vendor"
                        value={workOrder.vendor}
                    />
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* LOCATION                                         */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        Location
                    </CardTitle>
                </CardHeader>

                <CardContent className="grid gap-6 sm:grid-cols-2">
                    <DetailItem
                        label="Site"
                        value={workOrder.site}
                    />

                    <DetailItem
                        label="Department"
                        value={workOrder.department}
                    />
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* SCHEDULE                                         */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <CalendarDays className="h-5 w-5 text-primary" />
                        Maintenance Schedule
                    </CardTitle>
                </CardHeader>

                <CardContent className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <DetailItem
                        label="Scheduled Date"
                        value={workOrder.scheduledDate}
                    />

                    <DetailItem
                        label="Started Date"
                        value={
                            workOrder.startedDate || "—"
                        }
                    />

                    <DetailItem
                        label="Completed Date"
                        value={
                            workOrder.completedDate || "—"
                        }
                    />

                    <DetailItem
                        label="Created At"
                        value={workOrder.createdAt}
                    />
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* COST INFORMATION                                  */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <IndianRupee className="h-5 w-5 text-primary" />
                        Cost Information
                    </CardTitle>
                </CardHeader>

                <CardContent className="grid gap-6 sm:grid-cols-2">
                    <CostItem
                        label="Estimated Cost"
                        value={workOrder.estimatedCost}
                    />

                    <CostItem
                        label="Actual Cost"
                        value={workOrder.actualCost}
                    />
                </CardContent>
            </Card>
        </div>
    );
}

// =============================================================
// Info Card
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
// Detail Item
// =============================================================

interface DetailItemProps {
    label: string;
    value: React.ReactNode;
}

function DetailItem({
    label,
    value,
}: DetailItemProps) {
    return (
        <div className="min-w-0">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                {label}
            </p>

            <div className="break-words text-sm font-medium text-slate-700">
                {value}
            </div>
        </div>
    );
}

// =============================================================
// Cost Item
// =============================================================

interface CostItemProps {
    label: string;
    value?: number;
}

function CostItem({
    label,
    value,
}: CostItemProps) {
    return (
        <div className="rounded-xl border bg-slate-50 p-4">
            <p className="text-sm text-muted-foreground">
                {label}
            </p>

            <p className="mt-1 text-xl font-semibold text-slate-900">
                {value !== undefined
                    ? `₹${value.toLocaleString("en-IN")}`
                    : "—"}
            </p>
        </div>
    );
}