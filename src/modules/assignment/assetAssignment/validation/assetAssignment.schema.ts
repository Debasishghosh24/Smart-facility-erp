import { z } from "zod";

export const assetAssignmentSchema = z
    .object({
        assignmentId: z
            .string()
            .min(3, "Assignment ID is required")
            .max(20, "Assignment ID cannot exceed 20 characters"),

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

        expectedReturnDate: z
            .string()
            .min(1, "Expected Return Date is required"),

        // Assignment Details
        assignedBy: z
            .string()
            .min(2, "Assigned By is required")
            .max(100, "Assigned By cannot exceed 100 characters"),

        condition: z.enum([
            "Excellent",
            "Good",
            "Fair",
            "Damaged",
        ]),

        purpose: z
            .string()
            .min(3, "Purpose is required")
            .max(150, "Purpose cannot exceed 150 characters"),

        remarks: z
            .string()
            .max(500, "Remarks cannot exceed 500 characters"),

        // Status
        status: z.enum([
            "Assigned",
            "Returned",
            "Overdue",
        ]),
    })
    .refine(
        (data) => {
            if (
                !data.assignmentDate ||
                !data.expectedReturnDate
            ) {
                return true;
            }

            return (
                new Date(data.expectedReturnDate) >=
                new Date(data.assignmentDate)
            );
        },
        {
            message:
                "Expected Return Date cannot be before Assignment Date",
            path: ["expectedReturnDate"],
        }
    );

export type AssetAssignmentFormData =
    z.infer<typeof assetAssignmentSchema>;