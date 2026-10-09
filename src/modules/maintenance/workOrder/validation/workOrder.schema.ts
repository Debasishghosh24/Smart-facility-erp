import { z } from "zod";

// =====================================================
// Work Order Validation Schema
// =====================================================

export const workOrderSchema = z.object({
    // =================================================
    // Work Order Identification
    // =================================================

    workOrderNumber: z
        .string()
        .min(1, "Work order number is required"),

    // =================================================
    // Asset Information
    // =================================================

    assetId: z
        .string()
        .min(1, "Asset is required"),

    assetCode: z
        .string()
        .min(1, "Asset code is required"),

    assetName: z
        .string()
        .min(1, "Asset name is required"),

    // =================================================
    // Maintenance Information
    // =================================================

    maintenanceType: z.enum([
        "Preventive",
        "Corrective",
        "Breakdown",
        "Inspection",
    ]),

    issueDescription: z
        .string()
        .min(5, "Issue description must be at least 5 characters")
        .max(500, "Issue description cannot exceed 500 characters"),

    // =================================================
    // Priority
    // =================================================

    priority: z.enum([
        "Low",
        "Medium",
        "High",
        "Critical",
    ]),

    // =================================================
    // Request Information
    // =================================================

    requestedBy: z
        .string()
        .min(1, "Requested by is required"),

    requestedDate: z
        .string()
        .min(1, "Requested date is required"),

    // =================================================
    // Assignment / Technician
    // =================================================

    assignedTo: z
        .string()
        .min(1, "Technician / assignee is required"),

    // =================================================
    // Vendor & Location
    // =================================================

    vendor: z
        .string()
        .min(1, "Vendor is required"),

    site: z
        .string()
        .min(1, "Site is required"),

    department: z
        .string()
        .min(1, "Department is required"),

    // =================================================
    // Maintenance Schedule
    // =================================================

    scheduledDate: z
        .string()
        .min(1, "Scheduled date is required"),

    startedDate: z
        .string()
        .optional(),

    completedDate: z
        .string()
        .optional(),

    // =================================================
    // Cost Information
    // =================================================

    estimatedCost: z
        .number({
            message: "Estimated cost must be a number",
        })
        .min(0, "Estimated cost cannot be negative"),

    actualCost: z
        .number({
            message: "Actual cost must be a number",
        })
        .min(0, "Actual cost cannot be negative")
        .optional(),

    // =================================================
    // Work Order Status
    // =================================================

    status: z.enum([
        "Open",
        "In Progress",
        "On Hold",
        "Completed",
        "Cancelled",
    ]),

    // =================================================
    // Additional Information
    // =================================================

    remarks: z
        .string()
        .max(500, "Remarks cannot exceed 500 characters")
        .optional(),

    // =================================================
    // System Information
    // =================================================

    createdAt: z
        .string()
        .min(1, "Created date is required"),
});

// =====================================================
// Inferred Type
// =====================================================

export type WorkOrderFormValues = z.infer<
    typeof workOrderSchema
>;