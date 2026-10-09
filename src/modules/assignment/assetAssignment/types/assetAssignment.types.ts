export interface AssetAssignment {
    id: string;

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
    expectedReturnDate: string;

    // Assignment Details
    assignedBy: string;
    condition: "Excellent" | "Good" | "Fair" | "Damaged";
    purpose: string;
    remarks: string;

    // Transaction Status
    status: "Assigned" | "Returned" | "Overdue";

    createdAt: string;
}