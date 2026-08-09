import { z } from "zod";

export const assetCategorySchema = z.object({
    categoryCode: z
        .string()
        .min(2, "Category Code is required")
        .max(10, "Maximum 10 characters"),
    categoryName: z
        .string()
        .min(3, "Category Name must be 3 character")
        .max(50, "Maximum 50 characters"),

    description: z
        .string()
        .min(3, "Description must be 3 character")
        .max(100, "Maximum 100 characters"),

    assetType: z.enum([
        "IT",
        "Electrical",
        "Furniture",
        "Vehicle",
        "Other",
    ]),
    status: z.boolean(),


})
export type AssetCategoryFormData =
    z.infer<typeof assetCategorySchema>;