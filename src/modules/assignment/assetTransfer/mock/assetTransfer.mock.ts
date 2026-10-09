import type { AssetTransfer } from "../types/assetTransfer.types";

export const mockAssetTransfers: AssetTransfer[] = [
    {
        id: "1",
        transferId: "TRF0001",

        assetId: "1",
        assetName: "Dell Latitude 5440",
        assetCode: "AST0001",

        fromEmployeeId: "EMP008",
        fromEmployeeName: "Debopriyo Chatterjee",
        fromDepartment: "Information Technology",
        fromSite: "Kolkata Head Office",

        toEmployeeId: "EMP002",
        toEmployeeName: "Priya Das",
        toDepartment: "Human Resources",
        toSite: "Kharagpur Office",

        transferDate: "2025-02-10",

        transferReason: "Employee Transfer",

        condition: "Good",

        transferredBy: "Rahul Sharma",

        remarks:
            "Laptop transferred after employee relocation to Kharagpur Office.",

        status: "Completed",

        createdAt: "2025-02-10",
    },

    {
        id: "2",
        transferId: "TRF0002",

        assetId: "2",
        assetName: "HP ProBook 450 G10",
        assetCode: "AST0002",

        fromEmployeeId: "EMP002",
        fromEmployeeName: "Priya Das",
        fromDepartment: "Human Resources",
        fromSite: "Kharagpur Office",

        toEmployeeId: "EMP004",
        toEmployeeName: "Sneha Paul",
        toDepartment: "Sales",
        toSite: "Siliguri Branch",

        transferDate: "2025-03-05",

        transferReason: "Site Transfer",

        condition: "Excellent",

        transferredBy: "Rina Sen",

        remarks:
            "Laptop transferred to Siliguri Branch for sales operations.",

        status: "Completed",

        createdAt: "2025-03-05",
    },

    {
        id: "3",
        transferId: "TRF0003",

        assetId: "3",
        assetName: "Lenovo ThinkCentre M90",
        assetCode: "AST0003",

        fromEmployeeId: "EMP003",
        fromEmployeeName: "Arijit Roy",
        fromDepartment: "Finance & Accounts",
        fromSite: "Asansol Regional Office",

        toEmployeeId: "EMP010",
        toEmployeeName: "Abhishek Saha",
        toDepartment: "Administration",
        toSite: "Kolkata Head Office",

        transferDate: "2025-03-18",

        transferReason: "Department Change",

        condition: "Good",

        transferredBy: "Neha Gupta",

        remarks:
            "Desktop transferred after department restructuring.",

        status: "Completed",

        createdAt: "2025-03-18",
    },

    {
        id: "4",
        transferId: "TRF0004",

        assetId: "4",
        assetName: "Dell P2422H Monitor",
        assetCode: "AST0004",

        fromEmployeeId: "EMP008",
        fromEmployeeName: "Debopriyo Chatterjee",
        fromDepartment: "Information Technology",
        fromSite: "Kolkata Head Office",

        toEmployeeId: "EMP007",
        toEmployeeName: "Rakesh Kumar",
        toDepartment: "Maintenance",
        toSite: "Midnapore Service Center",

        transferDate: "2025-04-01",

        transferReason: "Project Allocation",

        condition: "Excellent",

        transferredBy: "Rahul Sharma",

        remarks:
            "Monitor transferred for service center workstation setup.",

        status: "Completed",

        createdAt: "2025-04-01",
    },

    {
        id: "5",
        transferId: "TRF0005",

        assetId: "5",
        assetName: "HP LaserJet Pro M404",
        assetCode: "AST0005",

        fromEmployeeId: "EMP010",
        fromEmployeeName: "Abhishek Saha",
        fromDepartment: "Administration",
        fromSite: "Kolkata Head Office",

        toEmployeeId: "EMP003",
        toEmployeeName: "Arijit Roy",
        toDepartment: "Finance & Accounts",
        toSite: "Asansol Regional Office",

        transferDate: "2025-04-15",

        transferReason: "Site Transfer",

        condition: "Good",

        transferredBy: "Rahul Sharma",

        remarks:
            "Printer transferred to Asansol office for accounts department use.",

        status: "Completed",

        createdAt: "2025-04-15",
    },

    {
        id: "6",
        transferId: "TRF0006",

        assetId: "6",
        assetName: "Canon ImageRunner 2925i",
        assetCode: "AST0006",

        fromEmployeeId: "EMP010",
        fromEmployeeName: "Abhishek Saha",
        fromDepartment: "Administration",
        fromSite: "Burdwan Office",

        toEmployeeId: "EMP006",
        toEmployeeName: "Ananya Mukherjee",
        toDepartment: "Marketing",
        toSite: "Kolkata Head Office",

        transferDate: "2025-05-02",

        transferReason: "Project Allocation",

        condition: "Fair",

        transferredBy: "Sayan Dutta",

        remarks:
            "Multifunction printer transferred for marketing documentation requirements.",

        status: "Completed",

        createdAt: "2025-05-02",
    },

    {
        id: "7",
        transferId: "TRF0007",

        assetId: "8",
        assetName: "Cisco Catalyst 9200",
        assetCode: "AST0008",

        fromEmployeeId: "EMP008",
        fromEmployeeName: "Debopriyo Chatterjee",
        fromDepartment: "Information Technology",
        fromSite: "Kolkata Head Office",

        toEmployeeId: "EMP007",
        toEmployeeName: "Rakesh Kumar",
        toDepartment: "Maintenance",
        toSite: "Midnapore Service Center",

        transferDate: "2025-05-12",

        transferReason: "Site Transfer",

        condition: "Excellent",

        transferredBy: "Rahul Sharma",

        remarks:
            "Network equipment transferred for service center network expansion.",

        status: "Completed",

        createdAt: "2025-05-12",
    },

    {
        id: "8",
        transferId: "TRF0008",

        assetId: "9",
        assetName: "APC Smart-UPS 1500VA",
        assetCode: "AST0009",

        fromEmployeeId: "EMP007",
        fromEmployeeName: "Rakesh Kumar",
        fromDepartment: "Maintenance",
        fromSite: "Midnapore Service Center",

        toEmployeeId: "EMP008",
        toEmployeeName: "Debopriyo Chatterjee",
        toDepartment: "Information Technology",
        toSite: "Kolkata Head Office",

        transferDate: "2025-05-20",

        transferReason: "Replacement",

        condition: "Good",

        transferredBy: "Prabir Roy",

        remarks:
            "UPS transferred to IT department as replacement backup equipment.",

        status: "Completed",

        createdAt: "2025-05-20",
    },

    {
        id: "9",
        transferId: "TRF0009",

        assetId: "10",
        assetName: "Voltas Split AC 1.5 Ton",
        assetCode: "AST0010",

        fromEmployeeId: "EMP010",
        fromEmployeeName: "Abhishek Saha",
        fromDepartment: "Administration",
        fromSite: "Kharagpur Office",

        toEmployeeId: "EMP005",
        toEmployeeName: "Sourav Ghosh",
        toDepartment: "Operations",
        toSite: "Haldia Plant",

        transferDate: "2025-06-01",

        transferReason: "Site Transfer",

        condition: "Good",

        transferredBy: "Debashis Paul",

        remarks:
            "Air conditioner transferred to Haldia Plant administration area.",

        status: "Completed",

        createdAt: "2025-06-01",
    },

    {
        id: "10",
        transferId: "TRF0010",

        assetId: "13",
        assetName: "Godrej Office Desk",
        assetCode: "AST0013",

        fromEmployeeId: "EMP002",
        fromEmployeeName: "Priya Das",
        fromDepartment: "Human Resources",
        fromSite: "Kolkata Head Office",

        toEmployeeId: "EMP004",
        toEmployeeName: "Sneha Paul",
        toDepartment: "Sales",
        toSite: "Siliguri Branch",

        transferDate: "2025-06-08",

        transferReason: "Site Transfer",

        condition: "Good",

        transferredBy: "Rina Sen",

        remarks:
            "Office desk transferred as part of workstation allocation.",

        status: "Completed",

        createdAt: "2025-06-08",
    },

    {
        id: "11",
        transferId: "TRF0011",

        assetId: "14",
        assetName: "Featherlite Office Chair",
        assetCode: "AST0014",

        fromEmployeeId: "EMP004",
        fromEmployeeName: "Sneha Paul",
        fromDepartment: "Sales",
        fromSite: "Siliguri Branch",

        toEmployeeId: "EMP006",
        toEmployeeName: "Ananya Mukherjee",
        toDepartment: "Marketing",
        toSite: "Burdwan Office",

        transferDate: "2025-06-15",

        transferReason: "Employee Transfer",

        condition: "Good",

        transferredBy: "Ankit Verma",

        remarks:
            "Chair transferred during employee workstation reallocation.",

        status: "Completed",

        createdAt: "2025-06-15",
    },

    {
        id: "12",
        transferId: "TRF0012",

        assetId: "18",
        assetName: "Mahindra Bolero Pickup",
        assetCode: "AST0018",

        fromEmployeeId: "EMP005",
        fromEmployeeName: "Sourav Ghosh",
        fromDepartment: "Operations",
        fromSite: "Haldia Plant",

        toEmployeeId: "EMP007",
        toEmployeeName: "Rakesh Kumar",
        toDepartment: "Maintenance",
        toSite: "Midnapore Service Center",

        transferDate: "2025-06-22",

        transferReason: "Project Allocation",

        condition: "Fair",

        transferredBy: "Debashis Paul",

        remarks:
            "Vehicle transferred for maintenance and field service operations.",

        status: "Completed",

        createdAt: "2025-06-22",
    },

    {
        id: "13",
        transferId: "TRF0013",

        assetId: "19",
        assetName: "Hikvision CCTV Camera",
        assetCode: "AST0019",

        fromEmployeeId: "EMP010",
        fromEmployeeName: "Abhishek Saha",
        fromDepartment: "Administration",
        fromSite: "Kolkata Head Office",

        toEmployeeId: "EMP005",
        toEmployeeName: "Sourav Ghosh",
        toDepartment: "Operations",
        toSite: "Haldia Plant",

        transferDate: "2025-07-01",

        transferReason: "Site Transfer",

        condition: "Excellent",

        transferredBy: "Rahul Sharma",

        remarks:
            "CCTV equipment transferred for Haldia Plant security expansion.",

        status: "Completed",

        createdAt: "2025-07-01",
    },

    {
        id: "14",
        transferId: "TRF0014",

        assetId: "20",
        assetName: "Essl Biometric Attendance Device",
        assetCode: "AST0020",

        fromEmployeeId: "EMP002",
        fromEmployeeName: "Priya Das",
        fromDepartment: "Human Resources",
        fromSite: "Kolkata Head Office",

        toEmployeeId: "EMP010",
        toEmployeeName: "Abhishek Saha",
        toDepartment: "Administration",
        toSite: "Kharagpur Office",

        transferDate: "2025-07-10",

        transferReason: "Site Transfer",

        condition: "Excellent",

        transferredBy: "Rina Sen",

        remarks:
            "Biometric device transferred to Kharagpur Office.",

        status: "Completed",

        createdAt: "2025-07-10",
    },

    {
        id: "15",
        transferId: "TRF0015",

        assetId: "21",
        assetName: "ZKTeco Access Controller",
        assetCode: "AST0021",

        fromEmployeeId: "EMP010",
        fromEmployeeName: "Abhishek Saha",
        fromDepartment: "Administration",
        fromSite: "Kolkata Head Office",

        toEmployeeId: "EMP007",
        toEmployeeName: "Rakesh Kumar",
        toDepartment: "Maintenance",
        toSite: "Midnapore Service Center",

        transferDate: "2025-07-18",

        transferReason: "Site Transfer",

        condition: "Good",

        transferredBy: "Prabir Roy",

        remarks:
            "Access controller transferred for service center security setup.",

        status: "Completed",

        createdAt: "2025-07-18",
    },

    {
        id: "16",
        transferId: "TRF0016",

        assetId: "22",
        assetName: "Epson Projector",
        assetCode: "AST0022",

        fromEmployeeId: "EMP006",
        fromEmployeeName: "Ananya Mukherjee",
        fromDepartment: "Marketing",
        fromSite: "Burdwan Office",

        toEmployeeId: "EMP003",
        toEmployeeName: "Arijit Roy",
        toDepartment: "Finance & Accounts",
        toSite: "Asansol Regional Office",

        transferDate: "2025-07-25",

        transferReason: "Project Allocation",

        condition: "Good",

        transferredBy: "Sayan Dutta",

        remarks:
            "Projector transferred for regional office presentation requirements.",

        status: "Completed",

        createdAt: "2025-07-25",
    },

    {
        id: "17",
        transferId: "TRF0017",

        assetId: "23",
        assetName: "Samsung Galaxy S24",
        assetCode: "AST0023",

        fromEmployeeId: "EMP004",
        fromEmployeeName: "Sneha Paul",
        fromDepartment: "Sales",
        fromSite: "Siliguri Branch",

        toEmployeeId: "EMP006",
        toEmployeeName: "Ananya Mukherjee",
        toDepartment: "Marketing",
        toSite: "Kolkata Head Office",

        transferDate: "2025-08-01",

        transferReason: "Replacement",

        condition: "Good",

        transferredBy: "Ankit Verma",

        remarks:
            "Mobile device transferred to marketing team for business communication.",

        status: "Completed",

        createdAt: "2025-08-01",
    },

    {
        id: "18",
        transferId: "TRF0018",

        assetId: "24",
        assetName: "Apple iPad Air",
        assetCode: "AST0024",

        fromEmployeeId: "EMP006",
        fromEmployeeName: "Ananya Mukherjee",
        fromDepartment: "Marketing",
        fromSite: "Burdwan Office",

        toEmployeeId: "EMP004",
        toEmployeeName: "Sneha Paul",
        toDepartment: "Sales",
        toSite: "Siliguri Branch",

        transferDate: "2025-08-08",

        transferReason: "Project Allocation",

        condition: "Excellent",

        transferredBy: "Sayan Dutta",

        remarks:
            "Tablet transferred to sales team for customer demonstrations.",

        status: "Completed",

        createdAt: "2025-08-08",
    },

    {
        id: "19",
        transferId: "TRF0019",

        assetId: "27",
        assetName: "Lenovo ThinkPad E14",
        assetCode: "AST0027",

        fromEmployeeId: "EMP007",
        fromEmployeeName: "Rakesh Kumar",
        fromDepartment: "Maintenance",
        fromSite: "Midnapore Service Center",

        toEmployeeId: "EMP008",
        toEmployeeName: "Debopriyo Chatterjee",
        toDepartment: "Information Technology",
        toSite: "Kolkata Head Office",

        transferDate: "2025-08-12",

        transferReason: "Department Change",

        condition: "Good",

        transferredBy: "Prabir Roy",

        remarks:
            "Laptop transferred back to IT department for technical operations.",

        status: "Completed",

        createdAt: "2025-08-12",
    },

    {
        id: "20",
        transferId: "TRF0020",

        assetId: "28",
        assetName: "LG 55 Inch Display",
        assetCode: "AST0028",

        fromEmployeeId: "EMP006",
        fromEmployeeName: "Ananya Mukherjee",
        fromDepartment: "Marketing",
        fromSite: "Kolkata Head Office",

        toEmployeeId: "EMP010",
        toEmployeeName: "Abhishek Saha",
        toDepartment: "Administration",
        toSite: "Kolkata Head Office",

        transferDate: "2025-08-18",

        transferReason: "Department Change",

        condition: "Excellent",

        transferredBy: "Sayan Dutta",

        remarks:
            "Display transferred to administration for conference room management.",

        status: "Completed",

        createdAt: "2025-08-18",
    },

    {
        id: "21",
        transferId: "TRF0021",

        assetId: "30",
        assetName: "Dell OptiPlex 7010",
        assetCode: "AST0030",

        fromEmployeeId: "EMP003",
        fromEmployeeName: "Arijit Roy",
        fromDepartment: "Finance & Accounts",
        fromSite: "Asansol Regional Office",

        toEmployeeId: "EMP002",
        toEmployeeName: "Priya Das",
        toDepartment: "Human Resources",
        toSite: "Kolkata Head Office",

        transferDate: "2025-08-20",

        transferReason: "Replacement",

        condition: "Good",

        transferredBy: "Neha Gupta",

        remarks:
            "Desktop transferred to HR department after finance workstation upgrade.",

        status: "Completed",

        createdAt: "2025-08-20",
    },

    {
        id: "22",
        transferId: "TRF0022",

        assetId: "25",
        assetName: "ABC Fire Extinguisher",
        assetCode: "AST0025",

        fromEmployeeId: "EMP005",
        fromEmployeeName: "Sourav Ghosh",
        fromDepartment: "Operations",
        fromSite: "Haldia Plant",

        toEmployeeId: "EMP010",
        toEmployeeName: "Abhishek Saha",
        toDepartment: "Administration",
        toSite: "Kharagpur Office",

        transferDate: "2025-08-22",

        transferReason: "Site Transfer",

        condition: "Good",

        transferredBy: "Debashis Paul",

        remarks:
            "Safety equipment transferred to Kharagpur Office during safety infrastructure update.",

        status: "Completed",

        createdAt: "2025-08-22",
    },

    {
        id: "23",
        transferId: "TRF0023",

        assetId: "26",
        assetName: "Kent RO Water Purifier",
        assetCode: "AST0026",

        fromEmployeeId: "EMP010",
        fromEmployeeName: "Abhishek Saha",
        fromDepartment: "Administration",
        fromSite: "Kharagpur Office",

        toEmployeeId: "EMP007",
        toEmployeeName: "Rakesh Kumar",
        toDepartment: "Maintenance",
        toSite: "Midnapore Service Center",

        transferDate: "2025-08-24",

        transferReason: "Replacement",

        condition: "Fair",

        transferredBy: "Rahul Sharma",

        remarks:
            "Water purifier transferred for maintenance inspection.",

        status: "Pending",

        createdAt: "2025-08-24",
    },

    {
        id: "24",
        transferId: "TRF0024",

        assetId: "19",
        assetName: "Hikvision CCTV Camera",
        assetCode: "AST0019",

        fromEmployeeId: "EMP005",
        fromEmployeeName: "Sourav Ghosh",
        fromDepartment: "Operations",
        fromSite: "Haldia Plant",

        toEmployeeId: "EMP010",
        toEmployeeName: "Abhishek Saha",
        toDepartment: "Administration",
        toSite: "Kolkata Head Office",

        transferDate: "2025-08-26",

        transferReason: "Replacement",

        condition: "Damaged",

        transferredBy: "Debashis Paul",

        remarks:
            "Camera transferred to administration for damage assessment and replacement processing.",

        status: "Pending",

        createdAt: "2025-08-26",
    },

    {
        id: "25",
        transferId: "TRF0025",

        assetId: "20",
        assetName: "Essl Biometric Attendance Device",
        assetCode: "AST0020",

        fromEmployeeId: "EMP010",
        fromEmployeeName: "Abhishek Saha",
        fromDepartment: "Administration",
        fromSite: "Kharagpur Office",

        toEmployeeId: "EMP002",
        toEmployeeName: "Priya Das",
        toDepartment: "Human Resources",
        toSite: "Kolkata Head Office",

        transferDate: "2025-08-28",

        transferReason: "Department Change",

        condition: "Excellent",

        transferredBy: "Rina Sen",

        remarks:
            "Biometric attendance device transferred back to HR for centralized attendance management.",

        status: "Completed",

        createdAt: "2025-08-28",
    },
];