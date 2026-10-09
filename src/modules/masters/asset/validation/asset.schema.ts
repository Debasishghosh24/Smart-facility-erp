import { z } from "zod";

export const assetSchema = z.object({
    assetCode: z
        .string()
        .min(3, "Asset Code is required")
        .max(20, "Asset Code cannot exceed 20 characters"),

    assetName: z
        .string()
        .min(3, "Asset Name must be at least 3 characters")
        .max(100, "Asset Name cannot exceed 100 characters"),

    category: z
        .string()
        .min(1, "Asset Category is required"),

    assetType: z
        .string()
        .min(1, "Asset Type is required"),

    serialNumber: z
        .string()
        .min(3, "Serial Number is required")
        .max(50, "Serial Number cannot exceed 50 characters"),

    modelNumber: z
        .string()
        .min(2, "Model Number is required")
        .max(50, "Model Number cannot exceed 50 characters"),

    manufacturer: z
        .string()
        .min(2, "Manufacturer is required")
        .max(100, "Manufacturer cannot exceed 100 characters"),

    vendor: z
        .string()
        .min(1, "Vendor is required"),

    department: z
        .string()
        .min(1, "Department is required"),

    site: z
        .string()
        .min(1, "Site is required"),

    purchaseDate: z
        .string()
        .min(1, "Purchase Date is required"),

    purchaseCost: z
        .number()
        .min(0, "Purchase Cost cannot be negative"),

    warrantyExpiry: z
        .string()
        .min(1, "Warranty Expiry Date is required"),

    status: z.enum([
        "Available",
        "Assigned",
        "Under Maintenance",
        "Retired",
        "Lost",
    ]),
});

export type AssetFormData = z.infer<typeof assetSchema>;