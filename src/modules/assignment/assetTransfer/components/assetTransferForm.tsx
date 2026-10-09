import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import {
    ArrowRight,
    ArrowRightLeft,
    Building2,
    CalendarDays,
    Laptop,
    MapPin,
    UserRound,
} from "lucide-react";

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/component/ui/card";

import { Button } from "@/component/ui/button";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/component/ui/select";

import Input from "@/shared/components/input";
import Textarea from "@/shared/components/textarea";

import {
    assetTransferSchema,
    type AssetTransferFormData,
} from "../validation/assetTransferSchema";

import { mockAssetAssignments } from "@/modules/assignment/assetAssignment/mock/assetAssignment.mock";

import { mockEmployees } from "@/modules/masters/employee/mock/employee.mock"

interface AssetTransferFormProps {
    defaultValues?: Partial<AssetTransferFormData>;
    onSubmit: (data: AssetTransferFormData) => void;
    submitLabel?: string;
}

export default function AssetTransferForm({
    defaultValues,
    onSubmit,
    submitLabel = "Complete Transfer",
}: AssetTransferFormProps) {
    const navigate = useNavigate();

    const form = useForm<AssetTransferFormData>({
        resolver: zodResolver(assetTransferSchema),

        defaultValues: {
            assetId: "",
            assetName: "",
            assetCode: "",

            fromEmployeeId: "",
            fromEmployeeName: "",
            fromDepartment: "",
            fromSite: "",

            toEmployeeId: "",
            toEmployeeName: "",
            toDepartment: "",
            toSite: "",

            transferDate: "",

            transferReason: "Employee Transfer",

            condition: "Good",

            transferredBy: "",

            remarks: "",

            status: "Pending",

            ...defaultValues,
        },
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
    } = form;

    const selectedAssetId = watch("assetId");
    const selectedToEmployeeId = watch("toEmployeeId");

    const selectedAsset = mockAssetAssignments.find(
        (assignment) =>
            assignment.assetId === selectedAssetId &&
            assignment.status === "Assigned"
    );

    const selectedToEmployee = mockEmployees.find(
        (employee) =>
            employee.id === selectedToEmployeeId
    );

    // =====================================================
    // Asset Selection
    // =====================================================

    const handleAssetChange = (assetId: string) => {
        const assignment =
            mockAssetAssignments.find(
                (item) =>
                    item.assetId === assetId &&
                    item.status === "Assigned"
            );

        if (!assignment) return;

        setValue("assetId", assignment.assetId, {
            shouldValidate: true,
        });

        setValue("assetName", assignment.assetName, {
            shouldValidate: true,
        });

        setValue("assetCode", assignment.assetCode, {
            shouldValidate: true,
        });

        // Current / FROM snapshot
        setValue(
            "fromEmployeeId",
            assignment.employeeId,
            {
                shouldValidate: true,
            }
        );

        setValue(
            "fromEmployeeName",
            assignment.employeeName,
            {
                shouldValidate: true,
            }
        );

        setValue(
            "fromDepartment",
            assignment.department,
            {
                shouldValidate: true,
            }
        );

        setValue("fromSite", assignment.site, {
            shouldValidate: true,
        });

        // Reset TO fields
        setValue("toEmployeeId", "");
        setValue("toEmployeeName", "");
        setValue("toDepartment", "");
        setValue("toSite", "");
    };

    // =====================================================
    // New Employee Selection
    // =====================================================

    const handleEmployeeChange = (
        employeeId: string
    ) => {
        const employee = mockEmployees.find(
            (item) => item.id === employeeId
        );

        if (!employee) return;

        setValue(
            "toEmployeeId",
            employee.id,
            {
                shouldValidate: true,
            }
        );

        setValue(
            "toEmployeeName",
            `${employee.firstName} ${employee.lastName}`,
            {
                shouldValidate: true,
            }
        );

        setValue(
            "toDepartment",
            employee.department,
            {
                shouldValidate: true,
            }
        );

        setValue(
            "toSite",
            employee.site,
            {
                shouldValidate: true,
            }
        );
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto max-w-6xl space-y-6"
        >
            {/* ================================================= */}
            {/* Transfer Header */}
            {/* ================================================= */}

            <Card className="overflow-hidden">
                <CardHeader className="border-b bg-slate-50/70">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <CardTitle className="flex items-center gap-2">
                                <ArrowRightLeft className="h-5 w-5 text-blue-600" />
                                Asset Transfer
                            </CardTitle>

                            <CardDescription className="mt-1">
                                Move an assigned asset from its current
                                employee or location to a new destination.
                            </CardDescription>
                        </div>

                        <div className="hidden rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700 sm:block">
                            Asset Movement
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="pt-6">
                    <div className="grid gap-5 md:grid-cols-2">
                        <Input
                            label="Asset"
                            readOnly
                            className="cursor-not-allowed bg-slate-100 font-medium"
                            value={
                                selectedAsset
                                    ? `${selectedAsset.assetCode} — ${selectedAsset.assetName}`
                                    : ""
                            }
                            placeholder="Select an asset below"
                        />

                        <Input
                            label="Transferred By"
                            required
                            placeholder="Enter responsible person"
                            {...register("transferredBy")}
                            error={errors.transferredBy?.message}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* Select Asset */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Laptop className="h-5 w-5 text-blue-600" />
                        Select Assigned Asset
                    </CardTitle>

                    <CardDescription>
                        Only currently assigned assets can be transferred.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Asset
                            <span className="ml-1 text-red-500">*</span>
                        </label>

                        <Select
                            value={selectedAssetId}
                            onValueChange={handleAssetChange}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select an assigned asset" />
                            </SelectTrigger>

                            <SelectContent>
                                {mockAssetAssignments
                                    .filter(
                                        (assignment) =>
                                            assignment.status === "Assigned" ||
                                            assignment.assetId ===
                                            defaultValues?.assetId
                                    )
                                    .map((assignment) => (
                                        <SelectItem
                                            key={assignment.id}
                                            value={assignment.assetId}
                                        >
                                            {assignment.assetCode} —{" "}
                                            {assignment.assetName} —{" "}
                                            {assignment.employeeName}
                                        </SelectItem>
                                    ))}
                            </SelectContent>
                        </Select>

                        {errors.assetId && (
                            <p className="text-sm text-red-500">
                                {errors.assetId.message}
                            </p>
                        )}
                    </div>
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* Current → New Visual Flow */}
            {/* ================================================= */}

            {selectedAsset && (
                <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]">
                    {/* ================================================= */}
                    {/* FROM */}
                    {/* ================================================= */}

                    <Card className="border-slate-200">
                        <CardHeader className="border-b bg-slate-50">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                        Current Assignment
                                    </p>

                                    <CardTitle className="mt-1 text-lg">
                                        From
                                    </CardTitle>
                                </div>

                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200">
                                    <UserRound className="h-4 w-4 text-slate-600" />
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="space-y-4 pt-5">
                            {/* Employee */}

                            <div className="rounded-lg border bg-white p-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700">
                                        {watch("fromEmployeeName")
                                            .split(" ")
                                            .map((name) =>
                                                name.charAt(0)
                                            )
                                            .slice(0, 2)
                                            .join("")
                                            .toUpperCase()}
                                    </div>

                                    <div>
                                        <p className="text-xs text-muted-foreground">
                                            Employee
                                        </p>

                                        <p className="font-semibold text-slate-900">
                                            {watch("fromEmployeeName")}
                                        </p>

                                        <p className="text-xs text-muted-foreground">
                                            {watch("fromEmployeeId")}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Department */}

                            <div className="flex items-start gap-3">
                                <Building2 className="mt-0.5 h-4 w-4 text-slate-400" />

                                <div>
                                    <p className="text-xs text-muted-foreground">
                                        Department
                                    </p>

                                    <p className="text-sm font-medium">
                                        {watch("fromDepartment")}
                                    </p>
                                </div>
                            </div>

                            {/* Site */}

                            <div className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-4 w-4 text-slate-400" />

                                <div>
                                    <p className="text-xs text-muted-foreground">
                                        Site
                                    </p>

                                    <p className="text-sm font-medium">
                                        {watch("fromSite")}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* ================================================= */}
                    {/* Direction */}
                    {/* ================================================= */}

                    <div className="flex items-center justify-center">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full border bg-blue-50 text-blue-600 shadow-sm">
                            <ArrowRight className="h-5 w-5" />
                        </div>
                    </div>

                    {/* ================================================= */}
                    {/* TO */}
                    {/* ================================================= */}

                    <Card className="border-blue-200">
                        <CardHeader className="border-b bg-blue-50/50">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                                        New Assignment
                                    </p>

                                    <CardTitle className="mt-1 text-lg">
                                        To
                                    </CardTitle>
                                </div>

                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100">
                                    <UserRound className="h-4 w-4 text-blue-600" />
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="space-y-5 pt-5">
                            {/* New Employee */}

                            <div className="space-y-2">
                                <label className="text-sm font-medium">
                                    New Employee
                                    <span className="ml-1 text-red-500">
                                        *
                                    </span>
                                </label>

                                <Select
                                    value={selectedToEmployeeId}
                                    onValueChange={
                                        handleEmployeeChange
                                    }
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select new employee" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        {mockEmployees
                                            .filter(
                                                (employee) =>
                                                    employee.status ===
                                                    "Active" &&
                                                    employee.id !==
                                                    watch(
                                                        "fromEmployeeId"
                                                    )
                                            )
                                            .map((employee) => (
                                                <SelectItem
                                                    key={employee.id}
                                                    value={employee.id}
                                                >
                                                    {employee.employeeId} —{" "}
                                                    {employee.firstName}{" "}
                                                    {employee.lastName}
                                                </SelectItem>
                                            ))}
                                    </SelectContent>
                                </Select>

                                {errors.toEmployeeId && (
                                    <p className="text-sm text-red-500">
                                        {errors.toEmployeeId.message}
                                    </p>
                                )}
                            </div>

                            {/* New Employee Preview */}

                            {selectedToEmployee && (
                                <div className="rounded-lg border border-blue-100 bg-blue-50/40 p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                                            {selectedToEmployee.firstName.charAt(
                                                0
                                            )}
                                            {selectedToEmployee.lastName.charAt(
                                                0
                                            )}
                                        </div>

                                        <div>
                                            <p className="font-semibold text-slate-900">
                                                {selectedToEmployee.firstName}{" "}
                                                {selectedToEmployee.lastName}
                                            </p>

                                            <p className="text-xs text-muted-foreground">
                                                {selectedToEmployee.designation}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* New Department */}

                            <div className="flex items-start gap-3">
                                <Building2 className="mt-0.5 h-4 w-4 text-blue-500" />

                                <div>
                                    <p className="text-xs text-muted-foreground">
                                        Department
                                    </p>

                                    <p className="text-sm font-medium">
                                        {watch("toDepartment") ||
                                            "Select employee"}
                                    </p>
                                </div>
                            </div>

                            {/* New Site */}

                            <div className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-4 w-4 text-blue-500" />

                                <div>
                                    <p className="text-xs text-muted-foreground">
                                        Site
                                    </p>

                                    <p className="text-sm font-medium">
                                        {watch("toSite") ||
                                            "Select employee"}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* ================================================= */}
            {/* Transfer Details */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <CalendarDays className="h-5 w-5 text-emerald-600" />
                        Transfer Details
                    </CardTitle>

                    <CardDescription>
                        Record why and when this asset movement is
                        taking place.
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-5">
                    <div className="grid gap-5 md:grid-cols-3">
                        {/* Transfer Date */}

                        <Input
                            label="Transfer Date"
                            type="date"
                            required
                            {...register("transferDate")}
                            error={errors.transferDate?.message}
                        />

                        {/* Transfer Reason */}

                        <div className="space-y-2">
                            <label className="text-sm font-medium">
                                Transfer Reason
                                <span className="ml-1 text-red-500">
                                    *
                                </span>
                            </label>

                            <Select
                                value={watch("transferReason")}
                                onValueChange={(value) =>
                                    setValue(
                                        "transferReason",
                                        value as AssetTransferFormData["transferReason"],
                                        {
                                            shouldValidate: true,
                                        }
                                    )
                                }
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select reason" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="Employee Transfer">
                                        Employee Transfer
                                    </SelectItem>

                                    <SelectItem value="Department Change">
                                        Department Change
                                    </SelectItem>

                                    <SelectItem value="Site Transfer">
                                        Site Transfer
                                    </SelectItem>

                                    <SelectItem value="Project Allocation">
                                        Project Allocation
                                    </SelectItem>

                                    <SelectItem value="Replacement">
                                        Replacement
                                    </SelectItem>

                                    <SelectItem value="Other">
                                        Other
                                    </SelectItem>
                                </SelectContent>
                            </Select>

                            {errors.transferReason && (
                                <p className="text-sm text-red-500">
                                    {errors.transferReason.message}
                                </p>
                            )}
                        </div>

                        {/* Condition */}

                        <div className="space-y-2">
                            <label className="text-sm font-medium">
                                Asset Condition
                                <span className="ml-1 text-red-500">
                                    *
                                </span>
                            </label>

                            <Select
                                value={watch("condition")}
                                onValueChange={(value) =>
                                    setValue(
                                        "condition",
                                        value as AssetTransferFormData["condition"],
                                        {
                                            shouldValidate: true,
                                        }
                                    )
                                }
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select condition" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="Excellent">
                                        Excellent
                                    </SelectItem>

                                    <SelectItem value="Good">
                                        Good
                                    </SelectItem>

                                    <SelectItem value="Fair">
                                        Fair
                                    </SelectItem>

                                    <SelectItem value="Damaged">
                                        Damaged
                                    </SelectItem>
                                </SelectContent>
                            </Select>

                            {errors.condition && (
                                <p className="text-sm text-red-500">
                                    {errors.condition.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Remarks */}

                    <Textarea
                        label="Remarks"
                        placeholder="Add transfer notes, handover details, accessories, condition notes, etc."
                        {...register("remarks")}
                        error={errors.remarks?.message}
                    />
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* Status */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <span>⚙️</span>
                        Transfer Status
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="max-w-md space-y-2">
                        <label className="text-sm font-medium">
                            Status
                            <span className="ml-1 text-red-500">
                                *
                            </span>
                        </label>

                        <Select
                            value={watch("status")}
                            onValueChange={(value) =>
                                setValue(
                                    "status",
                                    value as AssetTransferFormData["status"],
                                    {
                                        shouldValidate: true,
                                    }
                                )
                            }
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="Pending">
                                    Pending
                                </SelectItem>

                                <SelectItem value="Completed">
                                    Completed
                                </SelectItem>

                                <SelectItem value="Cancelled">
                                    Cancelled
                                </SelectItem>
                            </SelectContent>
                        </Select>

                        {errors.status && (
                            <p className="text-sm text-red-500">
                                {errors.status.message}
                            </p>
                        )}
                    </div>
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* Footer */}
            {/* ================================================= */}

            <div className="flex justify-end gap-3 border-t pt-6">
                <Button
                    type="button"
                    variant="outline"
                    onClick={() =>
                        navigate(
                            "/transactions/asset-transfer"
                        )
                    }
                >
                    Cancel
                </Button>

                <Button type="submit">
                    <ArrowRightLeft className="mr-2 h-4 w-4" />
                    {submitLabel}
                </Button>
            </div>
        </form>
    );
}