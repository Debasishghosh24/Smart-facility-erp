import { z } from "zod";

export const assetTransferSchema = z
    .object({
        // =====================================================
        // Asset Information
        // =====================================================

        assetId: z
            .string()
            .min(1, "Asset is required"),

        assetName: z
            .string()
            .min(1, "Asset Name is required"),

        assetCode: z
            .string()
            .min(1, "Asset Code is required"),

        // =====================================================
        // FROM - Current Assignment
        // =====================================================

        fromEmployeeId: z
            .string()
            .min(1, "Current employee is required"),

        fromEmployeeName: z
            .string()
            .min(1, "Current employee name is required"),

        fromDepartment: z
            .string()
            .min(1, "Current department is required"),

        fromSite: z
            .string()
            .min(1, "Current site is required"),

        // =====================================================
        // TO - New Assignment
        // =====================================================

        toEmployeeId: z
            .string()
            .min(1, "New employee is required"),

        toEmployeeName: z
            .string()
            .min(1, "New employee name is required"),

        toDepartment: z
            .string()
            .min(1, "New department is required"),

        toSite: z
            .string()
            .min(1, "New site is required"),

        // =====================================================
        // Transfer Information
        // =====================================================

        transferDate: z
            .string()
            .min(1, "Transfer date is required"),

        transferReason: z.enum([
            "Employee Transfer",
            "Department Change",
            "Site Transfer",
            "Project Allocation",
            "Replacement",
            "Other",
        ]),

        // =====================================================
        // Asset Condition
        // =====================================================

        condition: z.enum([
            "Excellent",
            "Good",
            "Fair",
            "Damaged",
        ]),

        // =====================================================
        // Transfer Responsibility
        // =====================================================

        transferredBy: z
            .string()
            .min(2, "Transferred By is required")
            .max(
                100,
                "Transferred By cannot exceed 100 characters"
            ),

        // =====================================================
        // Additional Information
        // =====================================================

        remarks: z
            .string()
            .max(
                500,
                "Remarks cannot exceed 500 characters"
            ),

        // =====================================================
        // Status
        // =====================================================

        status: z.enum([
            "Pending",
            "Completed",
            "Cancelled",
        ]),
    })

    // =======================================================
    // Prevent Same Employee Transfer
    // =======================================================

    .refine(
        (data) =>
            data.fromEmployeeId !== data.toEmployeeId,
        {
            message:
                "Asset cannot be transferred to the same employee",
            path: ["toEmployeeId"],
        }
    )

    // =======================================================
    // Prevent Same Department + Site Transfer
    // =======================================================

    .refine(
        (data) =>
            !(
                data.fromDepartment ===
                data.toDepartment &&
                data.fromSite === data.toSite
            ),
        {
            message:
                "New employee must belong to a different department or site",
            path: ["toEmployeeId"],
        }
    )

    // =======================================================
    // Transfer Date Validation
    // =======================================================

    .refine(
        (data) => {
            if (!data.transferDate) {
                return true;
            }

            const transferDate = new Date(
                data.transferDate
            );

            return !Number.isNaN(
                transferDate.getTime()
            );
        },
        {
            message: "Invalid transfer date",
            path: ["transferDate"],
        }
    );

export type AssetTransferFormData =
    z.infer<typeof assetTransferSchema>;