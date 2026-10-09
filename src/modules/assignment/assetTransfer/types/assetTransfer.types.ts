export interface AssetTransfer {
    id: string;

    transferId: string;

    // =====================================================
    // Asset Information
    // =====================================================

    assetId: string;
    assetName: string;
    assetCode: string;

    // =====================================================
    // Current / From Assignment
    // =====================================================

    fromEmployeeId: string;
    fromEmployeeName: string;

    fromDepartment: string;
    fromSite: string;

    // =====================================================
    // New / To Assignment
    // =====================================================

    toEmployeeId: string;
    toEmployeeName: string;

    toDepartment: string;
    toSite: string;

    // =====================================================
    // Transfer Information
    // =====================================================

    transferDate: string;

    transferReason:
    | "Employee Transfer"
    | "Department Change"
    | "Site Transfer"
    | "Project Allocation"
    | "Replacement"
    | "Other";

    condition:
    | "Excellent"
    | "Good"
    | "Fair"
    | "Damaged";

    transferredBy: string;

    remarks: string;

    // =====================================================
    // Transaction Status
    // =====================================================

    status:
    | "Pending"
    | "Completed"
    | "Cancelled";

    createdAt: string;
}