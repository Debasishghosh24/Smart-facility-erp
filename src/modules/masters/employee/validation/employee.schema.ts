import { z } from "zod";

export const employeeSchema = z.object({
    employeeId: z
        .string()
        .min(3, "Employee ID is required"),

    firstName: z
        .string()
        .min(2, "First Name must be at least 2 characters"),

    lastName: z
        .string()
        .min(2, "Last Name must be at least 2 characters"),

    department: z
        .string()
        .min(1, "Department is required"),

    site: z
        .string()
        .min(1, "Site is required"),

    designation: z
        .string()
        .min(2, "Designation is required"),

    email: z
        .email("Please enter a valid email address"),

    contactNo: z
        .string()
        .regex(/^[6-9]\d{9}$/, "Please enter a valid mobile number"),

    joiningDate: z
        .string()
        .min(1, "Joining Date is required"),

    employmentType: z.enum([
        "Permanent",
        "Contract",
        "Intern",
    ]),

    reportingManager: z
        .string()
        .min(2, "Reporting Manager is required"),

    status: z.boolean(),
});

export type EmployeeFormData = z.infer<typeof employeeSchema>;