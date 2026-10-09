import { z } from "zod";

export const assetReturnSchema = z
    .object({
        returnId: z
            .string()
            .min(3, "Return ID is required")
            .max(20, "Return ID cannot exceed 20 characters"),

        // Original Assignment
        assignmentId: z
            .string()
            .min(1, "Assignment is required"),

        // Asset
        assetId: z
            .string()
            .min(1, "Asset is required"),

        assetName: z
            .string()
            .min(1, "Asset Name is required"),

        assetCode: z
            .string()
            .min(1, "Asset Code is required"),

        // Employee
        employeeId: z
            .string()
            .min(1, "Employee is required"),

        employeeName: z
            .string()
            .min(1, "Employee Name is required"),

        // Snapshot
        department: z
            .string()
            .min(1, "Department is required"),

        site: z
            .string()
            .min(1, "Site is required"),

        // Assignment
        assignmentDate: z
            .string()
            .min(1, "Assignment Date is required"),

        // Return
        returnDate: z
            .string()
            .min(1, "Return Date is required"),

        returnedTo: z
            .string()
            .min(2, "Returned To is required")
            .max(100, "Returned To cannot exceed 100 characters"),

        // Condition
        condition: z.enum([
            "Excellent",
            "Good",
            "Fair",
            "Damaged",
        ]),

        // Additional Information
        remarks: z
            .string()
            .max(500, "Remarks cannot exceed 500 characters"),

        // Status
        status: z.enum([
            "Returned",
            "Pending Inspection",
        ]),
    })
    .refine(
        (data) => {
            if (
                !data.assignmentDate ||
                !data.returnDate
            ) {
                return true;
            }

            return (
                new Date(data.returnDate) >=
                new Date(data.assignmentDate)
            );
        },
        {
            message:
                "Return Date cannot be before Assignment Date",
            path: ["returnDate"],
        }
    );

export type AssetReturnFormData =
    z.infer<typeof assetReturnSchema>;