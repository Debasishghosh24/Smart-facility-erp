import { z } from "zod";

export const vendorSchema = z.object({
    vendorCode: z
        .string()
        .min(3, "Vendor Code is required")
        .max(10, "Vendor Code cannot exceed 10 characters"),

    vendorName: z
        .string()
        .min(3, "Vendor Name must be at least 3 characters"),

    companyName: z
        .string()
        .min(3, "Company Name is required"),

    gstNumber: z
        .string()
        .regex(
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{3}$/,
            "Please enter a valid GST Number"
        ),

    contactPerson: z
        .string()
        .min(3, "Contact Person is required"),

    email: z
        .email("Please enter a valid email address"),

    contactNo: z
        .string()
        .regex(
            /^[6-9]\d{9}$/,
            "Please enter a valid mobile number"
        ),

    address: z
        .string()
        .min(5, "Address is required"),

    city: z
        .string()
        .min(2, "City is required"),

    state: z
        .string()
        .min(2, "State is required"),

    pincode: z
        .string()
        .regex(
            /^[1-9][0-9]{5}$/,
            "Please enter a valid Pincode"
        ),

    status: z.boolean(),
});

export type VendorFormData = z.infer<typeof vendorSchema>;