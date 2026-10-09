import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";


import {
    AlertCircle,
    CalendarDays,
    FileText,
    IndianRupee,
    MapPin,
    Package,
    User,
    Wrench,
} from "lucide-react";

import { Button } from "@/component/ui/button";
import { Input } from "@/component/ui/input";
import { Textarea } from "@/component/ui/textarea";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/component/ui/select";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/component/ui/card";



import {
    workOrderSchema,
    type WorkOrderFormValues,
} from "../validation/workOrder.schema";


interface WorkOrderFormProps {
    defaultValues?: Partial<WorkOrderFormValues>;

    onSubmit: (
        data: WorkOrderFormValues
    ) => void | Promise<void>;

    submitLabel?: string;

    isSubmitting?: boolean;
}



export function WorkOrderForm({
    defaultValues,
    onSubmit,
    submitLabel = "Create Work Order",
    isSubmitting = false,
}: WorkOrderFormProps) {
    const form = useForm<WorkOrderFormValues>({
        resolver: zodResolver(workOrderSchema),
        defaultValues: {
            workOrderNumber: "",
            assetId: "",
            assetCode: "",
            assetName: "",

            maintenanceType: "Corrective",

            issueDescription: "",

            priority: "Medium",

            requestedBy: "",
            requestedDate: "",

            assignedTo: "",

            vendor: "",
            site: "",
            department: "",

            scheduledDate: "",
            startedDate: "",
            completedDate: "",

            estimatedCost: 0,
            actualCost: undefined,

            status: "Open",

            remarks: "",

            createdAt: "",

            ...defaultValues,
        },
    });

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = form;

    const maintenanceType = watch("maintenanceType");
    const priority = watch("priority");
    const status = watch("status");

    const handleFormSubmit: SubmitHandler<
        WorkOrderFormValues
    > = async (data) => {
        await onSubmit(data);
    };

    return (
        <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="space-y-6"
        >
            {/* ================================================= */}
            {/* WORK ORDER INFORMATION                            */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        Work Order Information
                    </CardTitle>
                </CardHeader>

                <CardContent className="grid gap-6 md:grid-cols-2">
                    {/* Work Order Number */}

                    <FormField
                        label="Work Order Number"
                        required
                        error={errors.workOrderNumber?.message}
                    >
                        <Input
                            placeholder="WO-2026-0001"
                            {...register("workOrderNumber")}
                        />
                    </FormField>

                    {/* Maintenance Type */}

                    <FormField
                        label="Maintenance Type"
                        required
                        error={errors.maintenanceType?.message}
                    >
                        <Select
                            value={maintenanceType}
                            onValueChange={(value) =>
                                setValue(
                                    "maintenanceType",
                                    value as WorkOrderFormValues["maintenanceType"],
                                    {
                                        shouldValidate: true,
                                    }
                                )
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select maintenance type" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="Preventive">
                                    Preventive
                                </SelectItem>

                                <SelectItem value="Corrective">
                                    Corrective
                                </SelectItem>

                                <SelectItem value="Breakdown">
                                    Breakdown
                                </SelectItem>

                                <SelectItem value="Inspection">
                                    Inspection
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </FormField>

                    {/* Priority */}

                    <FormField
                        label="Priority"
                        required
                        error={errors.priority?.message}
                    >
                        <Select
                            value={priority}
                            onValueChange={(value) =>
                                setValue(
                                    "priority",
                                    value as WorkOrderFormValues["priority"],
                                    {
                                        shouldValidate: true,
                                    }
                                )
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select priority" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="Low">
                                    Low
                                </SelectItem>

                                <SelectItem value="Medium">
                                    Medium
                                </SelectItem>

                                <SelectItem value="High">
                                    High
                                </SelectItem>

                                <SelectItem value="Critical">
                                    Critical
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </FormField>

                    {/* Status */}

                    <FormField
                        label="Status"
                        required
                        error={errors.status?.message}
                    >
                        <Select
                            value={status}
                            onValueChange={(value) =>
                                setValue(
                                    "status",
                                    value as WorkOrderFormValues["status"],
                                    {
                                        shouldValidate: true,
                                    }
                                )
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="Open">
                                    Open
                                </SelectItem>

                                <SelectItem value="In Progress">
                                    In Progress
                                </SelectItem>

                                <SelectItem value="On Hold">
                                    On Hold
                                </SelectItem>

                                <SelectItem value="Completed">
                                    Completed
                                </SelectItem>

                                <SelectItem value="Cancelled">
                                    Cancelled
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </FormField>
                </CardContent>
            </Card>

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

                <CardContent className="grid gap-6 md:grid-cols-3">
                    {/* Asset ID */}

                    <FormField
                        label="Asset ID"
                        required
                        error={errors.assetId?.message}
                    >
                        <Input
                            placeholder="AST001"
                            {...register("assetId")}
                        />
                    </FormField>

                    {/* Asset Code */}

                    <FormField
                        label="Asset Code"
                        required
                        error={errors.assetCode?.message}
                    >
                        <Input
                            placeholder="AST0001"
                            {...register("assetCode")}
                        />
                    </FormField>

                    {/* Asset Name */}

                    <FormField
                        label="Asset Name"
                        required
                        error={errors.assetName?.message}
                    >
                        <Input
                            placeholder="Dell Latitude 5440"
                            {...register("assetName")}
                        />
                    </FormField>
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* ISSUE / MAINTENANCE DETAILS                       */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Wrench className="h-5 w-5 text-primary" />
                        Maintenance Details
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <FormField
                        label="Issue / Maintenance Description"
                        required
                        error={errors.issueDescription?.message}
                    >
                        <Textarea
                            placeholder="Describe the issue or maintenance work required..."
                            className="min-h-[120px] resize-none"
                            {...register("issueDescription")}
                        />
                    </FormField>
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

                <CardContent className="grid gap-6 md:grid-cols-2">
                    {/* Requested By */}

                    <FormField
                        label="Requested By"
                        required
                        error={errors.requestedBy?.message}
                    >
                        <Input
                            placeholder="Employee name"
                            {...register("requestedBy")}
                        />
                    </FormField>

                    {/* Requested Date */}

                    <FormField
                        label="Requested Date"
                        required
                        error={errors.requestedDate?.message}
                    >
                        <Input
                            type="date"
                            {...register("requestedDate")}
                        />
                    </FormField>

                    {/* Assigned To */}

                    <FormField
                        label="Assigned To"
                        required
                        error={errors.assignedTo?.message}
                    >
                        <Input
                            placeholder="Technician / Assignee"
                            {...register("assignedTo")}
                        />
                    </FormField>

                    {/* Vendor */}

                    <FormField
                        label="Vendor"
                        required
                        error={errors.vendor?.message}
                    >
                        <Input
                            placeholder="Vendor name"
                            {...register("vendor")}
                        />
                    </FormField>
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* LOCATION                                          */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        Location
                    </CardTitle>
                </CardHeader>

                <CardContent className="grid gap-6 md:grid-cols-2">
                    {/* Site */}

                    <FormField
                        label="Site"
                        required
                        error={errors.site?.message}
                    >
                        <Input
                            placeholder="Asansol HO"
                            {...register("site")}
                        />
                    </FormField>

                    {/* Department */}

                    <FormField
                        label="Department"
                        required
                        error={errors.department?.message}
                    >
                        <Input
                            placeholder="IT"
                            {...register("department")}
                        />
                    </FormField>
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* SCHEDULE                                          */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <CalendarDays className="h-5 w-5 text-primary" />
                        Maintenance Schedule
                    </CardTitle>
                </CardHeader>

                <CardContent className="grid gap-6 md:grid-cols-3">
                    {/* Scheduled Date */}

                    <FormField
                        label="Scheduled Date"
                        required
                        error={errors.scheduledDate?.message}
                    >
                        <Input
                            type="date"
                            {...register("scheduledDate")}
                        />
                    </FormField>

                    {/* Started Date */}

                    <FormField
                        label="Started Date"
                        error={errors.startedDate?.message}
                    >
                        <Input
                            type="date"
                            {...register("startedDate")}
                        />
                    </FormField>

                    {/* Completed Date */}

                    <FormField
                        label="Completed Date"
                        error={errors.completedDate?.message}
                    >
                        <Input
                            type="date"
                            {...register("completedDate")}
                        />
                    </FormField>
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* COST INFORMATION                                   */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <IndianRupee className="h-5 w-5 text-primary" />
                        Cost Information
                    </CardTitle>
                </CardHeader>

                <CardContent className="grid gap-6 md:grid-cols-2">
                    {/* Estimated Cost */}

                    <FormField
                        label="Estimated Cost"
                        required
                        error={errors.estimatedCost?.message}
                    >
                        <Input
                            type="number"
                            min="0"
                            step="0.01"
                            placeholder="0"
                            {...register("estimatedCost", {
                                valueAsNumber: true,
                            })}
                        />
                    </FormField>

                    {/* Actual Cost */}

                    <FormField
                        label="Actual Cost"
                        error={errors.actualCost?.message}
                    >
                        <Input
                            type="number"
                            min="0"
                            step="0.01"
                            placeholder="0"
                            {...register("actualCost", {
                                valueAsNumber: true,
                            })}
                        />
                    </FormField>
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* REMARKS                                           */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle>Additional Information</CardTitle>
                </CardHeader>

                <CardContent>
                    <FormField
                        label="Remarks"
                        error={errors.remarks?.message}
                    >
                        <Textarea
                            placeholder="Add any additional remarks..."
                            className="min-h-[100px] resize-none"
                            {...register("remarks")}
                        />
                    </FormField>
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* FORM ACTIONS                                       */}
            {/* ================================================= */}

            <div className="flex flex-col-reverse gap-3 border-t pt-5 sm:flex-row sm:justify-end">
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => window.history.back()}
                    disabled={isSubmitting}
                >
                    Cancel
                </Button>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting
                        ? "Saving..."
                        : submitLabel}
                </Button>
            </div>
        </form>
    );
}

// =====================================================
// Form Field Wrapper
// =====================================================

interface FormFieldProps {
    label: string;
    required?: boolean;
    error?: string;
    children: React.ReactNode;
}

function FormField({
    label,
    required = false,
    error,
    children,
}: FormFieldProps) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium">
                {label}

                {required && (
                    <span className="ml-1 text-red-500">
                        *
                    </span>
                )}
            </label>

            {children}

            {error && (
                <div className="flex items-center gap-1.5 text-xs text-red-500">
                    <AlertCircle className="h-3.5 w-3.5" />

                    <span>{error}</span>
                </div>
            )}
        </div>
    );
}