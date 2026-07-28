import { z } from "zod"

export const departmentSchema = z.object({
  name: z
    .string()
    .min(3, "Department Name must be at least 3 characters"),

  shortCode: z
    .string()
    .min(2, "Short Code is required")
    .max(5, "Maximum 5 characters"),

  description: z
    .string()
    .min(5, "Description is required"),

  status: z.boolean(),
})

export type DepartmentFormData = z.infer<typeof departmentSchema>