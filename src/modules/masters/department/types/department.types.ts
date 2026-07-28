export interface Department {
  id: string
  name: string
  shortCode: string
  description: string
  status: "Active" | "Inactive"
  createdAt: string
}