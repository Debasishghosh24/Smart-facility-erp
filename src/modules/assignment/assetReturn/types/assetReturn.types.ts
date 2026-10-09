export interface AssetReturn {
    id: string;

    returnId: string;

    // Original Assignment
    assignmentId: string;

    // Asset Information
    assetId: string;
    assetName: string;
    assetCode: string;

    // Employee Information
    employeeId: string;
    employeeName: string;

    // Snapshot Information
    department: string;
    site: string;

    // Assignment Information
    assignmentDate: string;

    // Return Information
    returnDate: string;
    returnedTo: string;

    // Asset Condition at Return
    condition:
    | "Excellent"
    | "Good"
    | "Fair"
    | "Damaged";

    // Additional Information
    remarks: string;

    // Return Status
    status: "Returned" | "Pending Inspection";

    createdAt: string;
}