import type { WorkOrder } from "../types/workOrder.types";

export const workOrderMock: WorkOrder[] = [
    {
        id: "WO001",

        // =====================================================
        // Work Order Identification
        // =====================================================

        workOrderNumber: "WO-2026-0001",

        // =====================================================
        // Asset Information
        // =====================================================

        assetId: "AST001",
        assetCode: "AST0001",
        assetName: "Dell Latitude 5440",

        // =====================================================
        // Maintenance Information
        // =====================================================

        maintenanceType: "Corrective",

        issueDescription:
            "Laptop screen is flickering and occasionally turns black.",

        // =====================================================
        // Priority
        // =====================================================

        priority: "High",

        // =====================================================
        // Request Information
        // =====================================================

        requestedBy: "Arijit Roy",
        requestedDate: "2026-08-20",

        // =====================================================
        // Assignment / Technician
        // =====================================================

        assignedTo: "Rahul Sharma",

        // =====================================================
        // Vendor & Location
        // =====================================================

        vendor: "Tech Solutions Pvt. Ltd.",
        site: "Asansol HO",
        department: "Finance & Accounts",

        // =====================================================
        // Maintenance Schedule
        // =====================================================

        scheduledDate: "2026-08-21",
        startedDate: "2026-08-21",

        // =====================================================
        // Cost Information
        // =====================================================

        estimatedCost: 3500,
        actualCost: 3200,

        // =====================================================
        // Work Order Status
        // =====================================================

        status: "Completed",

        // =====================================================
        // Additional Information
        // =====================================================

        remarks:
            "Display cable replaced and laptop tested successfully.",

        // =====================================================
        // System Information
        // =====================================================

        createdAt: "2026-08-20",
    },

    {
        id: "WO002",

        workOrderNumber: "WO-2026-0002",

        assetId: "AST002",
        assetCode: "AST0002",
        assetName: "HP ProBook 450 G9",

        maintenanceType: "Preventive",

        issueDescription:
            "Scheduled preventive maintenance and system health check.",

        priority: "Medium",

        requestedBy: "Priya Das",
        requestedDate: "2026-08-22",

        assignedTo: "Sourav Ghosh",

        vendor: "Secure Systems India Pvt. Ltd.",
        site: "Durgapur Site",
        department: "Operations",

        scheduledDate: "2026-08-24",

        estimatedCost: 1500,

        status: "In Progress",

        remarks:
            "System cleaning, hardware inspection and software health check.",

        createdAt: "2026-08-22",
    },

    {
        id: "WO003",

        workOrderNumber: "WO-2026-0003",

        assetId: "AST003",
        assetCode: "AST0003",
        assetName: "Lenovo ThinkPad E14",

        maintenanceType: "Breakdown",

        issueDescription:
            "Laptop is not powering on despite being connected to power.",

        priority: "Critical",

        requestedBy: "Ankit Roy",
        requestedDate: "2026-08-25",

        assignedTo: "Rakesh Kumar",

        vendor: "Global IT Services",
        site: "Asansol HO",
        department: "IT",

        scheduledDate: "2026-08-25",

        estimatedCost: 5000,

        status: "Open",

        remarks:
            "Power issue reported by employee. Technician inspection required.",

        createdAt: "2026-08-25",
    },

    {
        id: "WO004",

        workOrderNumber: "WO-2026-0004",

        assetId: "AST004",
        assetCode: "AST0004",
        assetName: "HP LaserJet Pro Printer",

        maintenanceType: "Inspection",

        issueDescription:
            "Printer requires routine inspection and print quality check.",

        priority: "Low",

        requestedBy: "Sneha Paul",
        requestedDate: "2026-08-18",

        assignedTo: "Amit Verma",

        vendor: "Office World Enterprises",
        site: "Asansol HO",
        department: "Administration",

        scheduledDate: "2026-08-26",

        estimatedCost: 800,

        status: "On Hold",

        remarks:
            "Inspection postponed due to technician availability.",

        createdAt: "2026-08-18",
    },

    {
        id: "WO005",

        workOrderNumber: "WO-2026-0005",

        assetId: "AST005",
        assetCode: "AST0005",
        assetName: "Dell OptiPlex 7010",

        maintenanceType: "Corrective",

        issueDescription:
            "Desktop is running slowly and applications are frequently freezing.",

        priority: "Medium",

        requestedBy: "Sourav Ghosh",
        requestedDate: "2026-08-15",

        assignedTo: "Rahul Sharma",

        vendor: "Laptop Hub India",
        site: "Durgapur Site",
        department: "Finance",

        scheduledDate: "2026-08-16",
        startedDate: "2026-08-16",
        completedDate: "2026-08-17",

        estimatedCost: 2000,
        actualCost: 1800,

        status: "Completed",

        remarks:
            "System cleanup performed and unnecessary applications removed.",

        createdAt: "2026-08-15",
    },

    {
        id: "WO006",

        workOrderNumber: "WO-2026-0006",

        assetId: "AST006",
        assetCode: "AST0006",
        assetName: "Epson EcoTank L3250",

        maintenanceType: "Preventive",

        issueDescription:
            "Routine printer maintenance, ink system inspection and cleaning.",

        priority: "Low",

        requestedBy: "Ananya Mukherjee",
        requestedDate: "2026-08-10",

        assignedTo: "Puja Mondal",

        vendor: "Digital World Pvt. Ltd.",
        site: "Asansol HO",
        department: "Administration",

        scheduledDate: "2026-08-12",
        startedDate: "2026-08-12",
        completedDate: "2026-08-12",

        estimatedCost: 700,
        actualCost: 650,

        status: "Completed",

        remarks:
            "Printer cleaned and print quality checked successfully.",

        createdAt: "2026-08-10",
    },

    {
        id: "WO007",

        workOrderNumber: "WO-2026-0007",

        assetId: "AST007",
        assetCode: "AST0007",
        assetName: "Lenovo ThinkCentre M70",

        maintenanceType: "Breakdown",

        issueDescription:
            "Desktop randomly shuts down during operation.",

        priority: "High",

        requestedBy: "Debopriyo Chatterjee",
        requestedDate: "2026-08-27",

        assignedTo: "Rakesh Kumar",

        vendor: "Future Electronics India",
        site: "Asansol HO",
        department: "HR",

        scheduledDate: "2026-08-28",

        estimatedCost: 4500,

        status: "In Progress",

        remarks:
            "Power supply and motherboard are currently under inspection.",

        createdAt: "2026-08-27",
    },

    {
        id: "WO008",

        workOrderNumber: "WO-2026-0008",

        assetId: "AST008",
        assetCode: "AST0008",
        assetName: "Samsung Monitor 24 Inch",

        maintenanceType: "Corrective",

        issueDescription:
            "Monitor has horizontal lines appearing on the display.",

        priority: "Medium",

        requestedBy: "Puja Mondal",
        requestedDate: "2026-08-05",

        assignedTo: "Sourav Ghosh",

        vendor: "Prime Office Supplies",
        site: "Durgapur Site",
        department: "Operations",

        scheduledDate: "2026-08-06",
        startedDate: "2026-08-06",

        estimatedCost: 1800,

        status: "On Hold",

        remarks:
            "Waiting for replacement display panel from vendor.",

        createdAt: "2026-08-05",
    },

    {
        id: "WO009",

        workOrderNumber: "WO-2026-0009",

        assetId: "AST009",
        assetCode: "AST0009",
        assetName: "HP ProDesk 400 G7",

        maintenanceType: "Inspection",

        issueDescription:
            "General hardware inspection and performance assessment required.",

        priority: "Low",

        requestedBy: "Abhishek Saha",
        requestedDate: "2026-08-28",

        assignedTo: "Rahul Sharma",

        vendor: "NetCom Technologies",
        site: "Asansol HO",
        department: "IT",

        scheduledDate: "2026-09-01",

        estimatedCost: 1000,

        status: "Open",

        remarks:
            "Routine inspection requested by IT department.",

        createdAt: "2026-08-28",
    },

    {
        id: "WO010",

        workOrderNumber: "WO-2026-0010",

        assetId: "AST010",
        assetCode: "AST0010",
        assetName: "Canon ImageClass Printer",

        maintenanceType: "Corrective",

        issueDescription:
            "Printer is producing paper jams during printing.",

        priority: "High",

        requestedBy: "Rahul Roy",
        requestedDate: "2026-08-29",

        assignedTo: "Amit Verma",

        vendor: "Vision Infotech Solutions",
        site: "Asansol HO",
        department: "Accounts",

        scheduledDate: "2026-08-30",
        startedDate: "2026-08-30",
        completedDate: "2026-08-31",

        estimatedCost: 2500,
        actualCost: 2300,

        status: "Completed",

        remarks:
            "Paper feed mechanism cleaned and faulty roller replaced.",

        createdAt: "2026-08-29",
    },
];