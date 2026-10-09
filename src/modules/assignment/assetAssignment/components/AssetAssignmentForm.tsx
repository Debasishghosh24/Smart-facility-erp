import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

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

import { Laptop, UserRound, MapPin, Building2 } from "lucide-react";

import {
    assetAssignmentSchema,
    type AssetAssignmentFormData,
} from "../validation/assetAssignment.schema";

import { mockAssets } from "@/modules/masters/asset/mock/asset.mock";
import { mockEmployees } from "@/modules/masters/employee/mock/employee.mock";

interface AssetAssignmentFormProps {
    defaultValues?: Partial<AssetAssignmentFormData>;
    onSubmit: (data: AssetAssignmentFormData) => void;
    submitLabel?: string;
}

export default function AssetAssignmentForm({
    defaultValues,
    onSubmit,
    submitLabel = "Assign Asset",
}: AssetAssignmentFormProps) {
    const navigate = useNavigate();

    const form = useForm<AssetAssignmentFormData>({
        resolver: zodResolver(assetAssignmentSchema),

        defaultValues: {
            assignmentId: `ASN${String(
                Math.floor(Math.random() * 9999)
            ).padStart(4, "0")}`,

            assetId: "",
            assetName: "",
            assetCode: "",

            employeeId: "",
            employeeName: "",

            department: "",
            site: "",

            assignmentDate: "",
            expectedReturnDate: "",

            assignedBy: "",
            condition: "Good",
            purpose: "",
            remarks: "",

            status: "Assigned",

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
    const selectedEmployeeId = watch("employeeId");

    const selectedAsset = mockAssets.find(
        (asset) => asset.id === selectedAssetId
    );

    const selectedEmployee = mockEmployees.find(
        (employee) => employee.id === selectedEmployeeId
    );

    // =====================================================
    // Asset Selection
    // =====================================================

    const handleAssetChange = (assetId: string) => {
        const asset = mockAssets.find(
            (item) => item.id === assetId
        );

        if (!asset) return;

        setValue("assetId", asset.id, {
            shouldValidate: true,
        });

        setValue("assetName", asset.assetName, {
            shouldValidate: true,
        });

        setValue("assetCode", asset.assetCode, {
            shouldValidate: true,
        });
    };

    // =====================================================
    // Employee Selection
    // =====================================================

    const handleEmployeeChange = (employeeId: string) => {
        const employee = mockEmployees.find(
            (item) => item.id === employeeId
        );

        if (!employee) return;

        setValue("employeeId", employee.id, {
            shouldValidate: true,
        });

        setValue("employeeName", `${employee.firstName} ${employee.lastName}`, {
            shouldValidate: true,
        });

        // Option B:
        // Employee's current Department & Site
        // become assignment-time snapshots.

        setValue("department", employee.department, {
            shouldValidate: true,
        });

        setValue("site", employee.site, {
            shouldValidate: true,
        });
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto max-w-6xl space-y-6"
        >
            {/* ================================================= */}
            {/* Assignment Information */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <span>🔗</span>
                        Asset Assignment
                    </CardTitle>

                    <CardDescription>
                        Assign an available asset to an employee and
                        record the assignment details.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="grid gap-5 md:grid-cols-2">
                        <Input
                            label="Assignment ID"
                            readOnly
                            className="cursor-not-allowed bg-slate-100 font-semibold"
                            {...register("assignmentId")}
                            error={errors.assignmentId?.message}
                        />

                        <Input
                            label="Assigned By"
                            required
                            placeholder="Enter person responsible for assignment"
                            {...register("assignedBy")}
                            error={errors.assignedBy?.message}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* Asset Selection */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Laptop className="h-5 w-5 text-blue-600" />
                        Select Asset
                    </CardTitle>

                    <CardDescription>
                        Select the asset that you want to assign.
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-5">
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
                                <SelectValue placeholder="Select an asset" />
                            </SelectTrigger>

                            <SelectContent>
                                {mockAssets
                                    .filter(
                                        (asset) =>
                                            asset.status === "Available" ||
                                            asset.id === defaultValues?.assetId
                                    )
                                    .map((asset) => (
                                        <SelectItem
                                            key={asset.id}
                                            value={asset.id}
                                        >
                                            {asset.assetCode} — {asset.assetName}
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

                    {/* Asset Summary */}

                    {selectedAsset && (
                        <div className="rounded-xl border bg-slate-50 p-5">
                            <div className="mb-4 flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                                        Selected Asset
                                    </p>

                                    <h3 className="mt-1 font-semibold text-slate-900">
                                        {selectedAsset.assetName}
                                    </h3>

                                    <p className="text-sm text-muted-foreground">
                                        {selectedAsset.assetCode}
                                    </p>
                                </div>

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                                    <Laptop className="h-5 w-5 text-blue-600" />
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                <div>
                                    <p className="text-xs text-muted-foreground">
                                        Category
                                    </p>

                                    <p className="mt-1 text-sm font-medium">
                                        {selectedAsset.category}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-muted-foreground">
                                        Vendor
                                    </p>

                                    <p className="mt-1 text-sm font-medium">
                                        {selectedAsset.vendor}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-muted-foreground">
                                        Current Site
                                    </p>

                                    <p className="mt-1 flex items-center gap-1 text-sm font-medium">
                                        <MapPin className="h-3.5 w-3.5 text-slate-400" />
                                        {selectedAsset.site}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-muted-foreground">
                                        Current Status
                                    </p>

                                    <p className="mt-1 text-sm font-medium text-emerald-600">
                                        {selectedAsset.status}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* Employee Selection */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <UserRound className="h-5 w-5 text-violet-600" />
                        Assign To Employee
                    </CardTitle>

                    <CardDescription>
                        Select the employee who will receive this asset.
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-5">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Employee
                            <span className="ml-1 text-red-500">*</span>
                        </label>

                        <Select
                            value={selectedEmployeeId}
                            onValueChange={handleEmployeeChange}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select employee" />
                            </SelectTrigger>

                            <SelectContent>
                                {mockEmployees
                                    .filter(
                                        (employee) =>
                                            employee.status === "Active" ||
                                            employee.id ===
                                            defaultValues?.employeeId
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

                        {errors.employeeId && (
                            <p className="text-sm text-red-500">
                                {errors.employeeId.message}
                            </p>
                        )}
                    </div>

                    {/* Employee Summary */}

                    {selectedEmployee && (
                        <div className="rounded-xl border bg-slate-50 p-5">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-100 font-semibold text-violet-700">
                                    {selectedEmployee.firstName.charAt(0)}
                                    {selectedEmployee.lastName.charAt(0)}
                                </div>

                                <div>
                                    <p className="font-semibold text-slate-900">
                                        {selectedEmployee.firstName}{" "}
                                        {selectedEmployee.lastName}
                                    </p>

                                    <p className="text-sm text-muted-foreground">
                                        {selectedEmployee.employeeId} •{" "}
                                        {selectedEmployee.designation}
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="flex items-start gap-2">
                                    <Building2 className="mt-0.5 h-4 w-4 text-slate-400" />

                                    <div>
                                        <p className="text-xs text-muted-foreground">
                                            Department
                                        </p>

                                        <p className="text-sm font-medium">
                                            {selectedEmployee.department}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2">
                                    <MapPin className="mt-0.5 h-4 w-4 text-slate-400" />

                                    <div>
                                        <p className="text-xs text-muted-foreground">
                                            Site
                                        </p>

                                        <p className="text-sm font-medium">
                                            {selectedEmployee.site}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* Assignment Snapshot */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <span>📌</span>
                        Assignment Snapshot
                    </CardTitle>

                    <CardDescription>
                        Department and site are automatically captured
                        from the employee at the time of assignment.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="grid gap-5 md:grid-cols-2">
                        <Input
                            label="Department"
                            readOnly
                            className="cursor-not-allowed bg-slate-100"
                            {...register("department")}
                            error={errors.department?.message}
                        />

                        <Input
                            label="Site"
                            readOnly
                            className="cursor-not-allowed bg-slate-100"
                            {...register("site")}
                            error={errors.site?.message}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* Assignment Dates */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <span>📅</span>
                        Assignment Period
                    </CardTitle>

                    <CardDescription>
                        Define when the asset is assigned and when it is
                        expected to be returned.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="grid gap-5 md:grid-cols-2">
                        <Input
                            label="Assignment Date"
                            type="date"
                            required
                            {...register("assignmentDate")}
                            error={errors.assignmentDate?.message}
                        />

                        <Input
                            label="Expected Return Date"
                            type="date"
                            required
                            {...register("expectedReturnDate")}
                            error={errors.expectedReturnDate?.message}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* Assignment Details */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <span>📝</span>
                        Assignment Details
                    </CardTitle>

                    <CardDescription>
                        Record the condition and purpose of the asset
                        assignment.
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-5">
                    <div className="grid gap-5 md:grid-cols-2">
                        {/* Condition */}

                        <div className="space-y-2">
                            <label className="text-sm font-medium">
                                Condition at Assignment
                                <span className="ml-1 text-red-500">*</span>
                            </label>

                            <Select
                                value={watch("condition")}
                                onValueChange={(
                                    value
                                ) =>
                                    setValue(
                                        "condition",
                                        value as AssetAssignmentFormData["condition"],
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

                        {/* Purpose */}

                        <Input
                            label="Purpose"
                            required
                            placeholder="e.g. Official Work"
                            {...register("purpose")}
                            error={errors.purpose?.message}
                        />
                    </div>

                    <Textarea
                        label="Remarks"
                        placeholder="Add any additional notes about this assignment..."
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
                        Assignment Status
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Status
                        </label>

                        <Select
                            value={watch("status")}
                            onValueChange={(value) =>
                                setValue(
                                    "status",
                                    value as AssetAssignmentFormData["status"],
                                    {
                                        shouldValidate: true,
                                    }
                                )
                            }
                        >
                            <SelectTrigger className="w-full md:w-1/2">
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="Assigned">
                                    Assigned
                                </SelectItem>

                                <SelectItem value="Returned">
                                    Returned
                                </SelectItem>

                                <SelectItem value="Overdue">
                                    Overdue
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
                        navigate("/transactions/asset-assignment")
                    }
                >
                    Cancel
                </Button>

                <Button type="submit">
                    {submitLabel}
                </Button>
            </div>
        </form>
    );
}