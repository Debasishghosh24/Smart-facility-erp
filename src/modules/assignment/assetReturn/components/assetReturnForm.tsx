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

import {
    ClipboardList,
    Laptop,
    UserRound,
    Building2,
    MapPin,
    CalendarDays,
} from "lucide-react";

import {
    assetReturnSchema,
    type AssetReturnFormData,
} from "../validation/assetReturnSchema";

import { mockAssetAssignments } from "@/modules/assignment/assetAssignment/mock/assetAssignment.mock";

interface AssetReturnFormProps {
    defaultValues?: Partial<AssetReturnFormData>;
    onSubmit: (data: AssetReturnFormData) => void;
    submitLabel?: string;
}

export default function AssetReturnForm({
    defaultValues,
    onSubmit,
    submitLabel = "Process Return",
}: AssetReturnFormProps) {
    const navigate = useNavigate();

    const form = useForm<AssetReturnFormData>({
        resolver: zodResolver(assetReturnSchema),

        defaultValues: {
            returnId: `RET${String(
                Math.floor(Math.random() * 9999)
            ).padStart(4, "0")}`,

            assignmentId: "",

            assetId: "",
            assetName: "",
            assetCode: "",

            employeeId: "",
            employeeName: "",

            department: "",
            site: "",

            assignmentDate: "",

            returnDate: "",

            returnedTo: "",

            condition: "Good",

            remarks: "",

            status: "Pending Inspection",

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

    const selectedAssignmentId =
        watch("assignmentId");

    const selectedAssignment =
        mockAssetAssignments.find(
            (assignment) =>
                assignment.assignmentId ===
                selectedAssignmentId
        );

    // =====================================================
    // Assignment Selection
    // =====================================================

    const handleAssignmentChange = (
        assignmentId: string
    ) => {
        const assignment =
            mockAssetAssignments.find(
                (item) =>
                    item.assignmentId === assignmentId
            );

        if (!assignment) return;

        setValue(
            "assignmentId",
            assignment.assignmentId,
            {
                shouldValidate: true,
            }
        );

        setValue(
            "assetId",
            assignment.assetId,
            {
                shouldValidate: true,
            }
        );

        setValue(
            "assetName",
            assignment.assetName,
            {
                shouldValidate: true,
            }
        );

        setValue(
            "assetCode",
            assignment.assetCode,
            {
                shouldValidate: true,
            }
        );

        setValue(
            "employeeId",
            assignment.employeeId,
            {
                shouldValidate: true,
            }
        );

        setValue(
            "employeeName",
            assignment.employeeName,
            {
                shouldValidate: true,
            }
        );

        // Assignment-time snapshots
        setValue(
            "department",
            assignment.department,
            {
                shouldValidate: true,
            }
        );

        setValue(
            "site",
            assignment.site,
            {
                shouldValidate: true,
            }
        );

        setValue(
            "assignmentDate",
            assignment.assignmentDate,
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
            {/* Return Information */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <ClipboardList className="h-5 w-5 text-blue-600" />
                        Asset Return
                    </CardTitle>

                    <CardDescription>
                        Process an asset return and record its
                        condition and inspection status.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="grid gap-5 md:grid-cols-2">
                        <Input
                            label="Return ID"
                            readOnly
                            className="cursor-not-allowed bg-slate-100 font-semibold"
                            {...register("returnId")}
                            error={errors.returnId?.message}
                        />

                        <Input
                            label="Returned To"
                            required
                            placeholder="Enter receiver name"
                            {...register("returnedTo")}
                            error={errors.returnedTo?.message}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* Assignment Selection */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <ClipboardList className="h-5 w-5 text-violet-600" />
                        Select Assignment
                    </CardTitle>

                    <CardDescription>
                        Select the active asset assignment that is
                        being returned.
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-5">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Assignment
                            <span className="ml-1 text-red-500">
                                *
                            </span>
                        </label>

                        <Select
                            value={selectedAssignmentId}
                            onValueChange={
                                handleAssignmentChange
                            }
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select an active assignment" />
                            </SelectTrigger>

                            <SelectContent>
                                {mockAssetAssignments
                                    .filter(
                                        (assignment) =>
                                            assignment.status ===
                                            "Assigned" ||
                                            assignment.assignmentId ===
                                            defaultValues?.assignmentId
                                    )
                                    .map((assignment) => (
                                        <SelectItem
                                            key={assignment.id}
                                            value={assignment.assignmentId}
                                        >
                                            {assignment.assignmentId} —{" "}
                                            {assignment.assetName} —{" "}
                                            {assignment.employeeName}
                                        </SelectItem>
                                    ))}
                            </SelectContent>
                        </Select>

                        {errors.assignmentId && (
                            <p className="text-sm text-red-500">
                                {errors.assignmentId.message}
                            </p>
                        )}
                    </div>

                    {/* ================================================= */}
                    {/* Assignment Summary */}
                    {/* ================================================= */}

                    {selectedAssignment && (
                        <div className="rounded-xl border bg-slate-50 p-5">
                            <div className="mb-5 flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                                        Active Assignment
                                    </p>

                                    <h3 className="mt-1 font-semibold text-slate-900">
                                        {selectedAssignment.assignmentId}
                                    </h3>

                                    <p className="text-sm text-muted-foreground">
                                        Assigned on{" "}
                                        {selectedAssignment.assignmentDate}
                                    </p>
                                </div>

                                <div className="rounded-lg bg-violet-100 px-3 py-1.5 text-xs font-semibold text-violet-700">
                                    Assigned
                                </div>
                            </div>

                            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                                {/* Asset */}

                                <div className="flex gap-2">
                                    <Laptop className="mt-0.5 h-4 w-4 text-blue-500" />

                                    <div className="min-w-0">
                                        <p className="text-xs text-muted-foreground">
                                            Asset
                                        </p>

                                        <p className="truncate text-sm font-medium">
                                            {selectedAssignment.assetName}
                                        </p>

                                        <p className="text-xs text-muted-foreground">
                                            {selectedAssignment.assetCode}
                                        </p>
                                    </div>
                                </div>

                                {/* Employee */}

                                <div className="flex gap-2">
                                    <UserRound className="mt-0.5 h-4 w-4 text-violet-500" />

                                    <div className="min-w-0">
                                        <p className="text-xs text-muted-foreground">
                                            Employee
                                        </p>

                                        <p className="truncate text-sm font-medium">
                                            {selectedAssignment.employeeName}
                                        </p>

                                        <p className="text-xs text-muted-foreground">
                                            {selectedAssignment.employeeId}
                                        </p>
                                    </div>
                                </div>

                                {/* Department */}

                                <div className="flex gap-2">
                                    <Building2 className="mt-0.5 h-4 w-4 text-slate-500" />

                                    <div className="min-w-0">
                                        <p className="text-xs text-muted-foreground">
                                            Department
                                        </p>

                                        <p className="truncate text-sm font-medium">
                                            {selectedAssignment.department}
                                        </p>
                                    </div>
                                </div>

                                {/* Site */}

                                <div className="flex gap-2">
                                    <MapPin className="mt-0.5 h-4 w-4 text-slate-500" />

                                    <div className="min-w-0">
                                        <p className="text-xs text-muted-foreground">
                                            Site
                                        </p>

                                        <p className="truncate text-sm font-medium">
                                            {selectedAssignment.site}
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
                        These details are captured from the original
                        assignment and cannot be modified.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="grid gap-5 md:grid-cols-3">
                        <Input
                            label="Employee"
                            readOnly
                            className="cursor-not-allowed bg-slate-100"
                            {...register("employeeName")}
                            error={errors.employeeName?.message}
                        />

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
            {/* Return Details */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <CalendarDays className="h-5 w-5 text-emerald-600" />
                        Return Details
                    </CardTitle>

                    <CardDescription>
                        Record when the asset was returned and its
                        condition at the time of return.
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-5">
                    <div className="grid gap-5 md:grid-cols-2">
                        {/* Assignment Date */}

                        <Input
                            label="Assignment Date"
                            type="date"
                            readOnly
                            className="cursor-not-allowed bg-slate-100"
                            {...register("assignmentDate")}
                            error={errors.assignmentDate?.message}
                        />

                        {/* Return Date */}

                        <Input
                            label="Return Date"
                            type="date"
                            required
                            {...register("returnDate")}
                            error={errors.returnDate?.message}
                        />
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                        {/* Condition */}

                        <div className="space-y-2">
                            <label className="text-sm font-medium">
                                Condition at Return
                                <span className="ml-1 text-red-500">
                                    *
                                </span>
                            </label>

                            <Select
                                value={watch("condition")}
                                onValueChange={(value) =>
                                    setValue(
                                        "condition",
                                        value as AssetReturnFormData["condition"],
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

                        {/* Status */}

                        <div className="space-y-2">
                            <label className="text-sm font-medium">
                                Return Status
                                <span className="ml-1 text-red-500">
                                    *
                                </span>
                            </label>

                            <Select
                                value={watch("status")}
                                onValueChange={(value) =>
                                    setValue(
                                        "status",
                                        value as AssetReturnFormData["status"],
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
                                    <SelectItem value="Pending Inspection">
                                        Pending Inspection
                                    </SelectItem>

                                    <SelectItem value="Returned">
                                        Returned
                                    </SelectItem>
                                </SelectContent>
                            </Select>

                            {errors.status && (
                                <p className="text-sm text-red-500">
                                    {errors.status.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Remarks */}

                    <Textarea
                        label="Remarks"
                        placeholder="Add notes about the returned asset, accessories, damage, inspection, etc."
                        {...register("remarks")}
                        error={errors.remarks?.message}
                    />
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* Footer Actions */}
            {/* ================================================= */}

            <div className="flex justify-end gap-3 border-t pt-6">
                <Button
                    type="button"
                    variant="outline"
                    onClick={() =>
                        navigate("/transactions/asset-return")
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