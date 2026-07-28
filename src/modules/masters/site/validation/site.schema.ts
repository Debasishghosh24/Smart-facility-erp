import { z } from "zod";

export const siteSchema = z.object({
    siteName: z
        .string()
        .min(3, "Site Name must be at least 3 characters"),

    siteCode: z
        .string()
        .min(3, "Site Code must be at least 3 characters"),

    department: z
        .string()
        .min(3, "Department must be at least 3 characters"),

    siteHead: z
        .string()
        .min(3, "Site Head must be at least 3 characters"),

    email: z
        .string()
        .email("Invalid email address"),

    contactNo: z
        .string()
        .min(3, "Contact Number must be at least 3 characters"),

    address: z
        .string()
        .min(3, "Address must be at least 3 characters"),

    city: z
        .string()
        .min(3, "City must be at least 3 characters"),

    state: z
        .string()
        .min(3, "State must be at least 3 characters"),

    pincode: z
        .string()
        .min(3, "Pincode must be at least 3 characters"),

    status: z.enum(["Active", "Inactive"]),
})