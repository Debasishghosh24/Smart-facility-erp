export interface WorkOrder {
    id: string;

    // =====================================================
    // Work Order Identification
    // =====================================================

    workOrderNumber: string;

    // =====================================================
    // Asset Information
    // =====================================================

    assetId: string;
    assetCode: string;
    assetName: string;

    // =====================================================
    // Maintenance Information
    // =====================================================

    maintenanceType:
    | "Preventive"
    | "Corrective"
    | "Breakdown"
    | "Inspection";

    issueDescription: string;

    // =====================================================
    // Priority
    // =====================================================

    priority:
    | "Low"
    | "Medium"
    | "High"
    | "Critical";

    // =====================================================
    // Request Information
    // =====================================================

    requestedBy: string;
    requestedDate: string;

    // =====================================================
    // Assignment / Technician
    // =====================================================

    assignedTo: string;

    // =====================================================
    // Vendor & Location
    // =====================================================

    vendor: string;
    site: string;
    department: string;

    // =====================================================
    // Maintenance Schedule
    // =====================================================

    scheduledDate: string;
    startedDate?: string;
    completedDate?: string;

    // =====================================================
    // Cost Information
    // =====================================================

    estimatedCost: number;
    actualCost?: number;

    // =====================================================
    // Work Order Status
    // =====================================================

    status:
    | "Open"
    | "In Progress"
    | "On Hold"
    | "Completed"
    | "Cancelled";

    // =====================================================
    // Additional Information
    // =====================================================

    remarks?: string;

    createdAt: string;
}