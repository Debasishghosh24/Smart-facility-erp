import type { AssetAssignment } from "../types/assetAssignment.types";

export const mockAssetAssignments: AssetAssignment[] = [
    {
        id: "1",
        assignmentId: "ASN0001",

        assetId: "1",
        assetName: "Dell Latitude 5440",
        assetCode: "AST0001",

        employeeId: "1",
        employeeName: "Rahul Sharma",

        department: "Information Technology",
        site: "Kolkata Head Office",

        assignmentDate: "2025-01-15",
        expectedReturnDate: "2028-01-14",

        assignedBy: "Amit Kumar",
        condition: "Excellent",
        purpose: "Official Work",
        remarks: "Primary laptop assigned for software development activities.",

        status: "Assigned",
        createdAt: "2025-01-15",
    },

    {
        id: "2",
        assignmentId: "ASN0002",

        assetId: "2",
        assetName: "HP ProBook 450 G10",
        assetCode: "AST0002",

        employeeId: "2",
        employeeName: "Priya Das",

        department: "Human Resources",
        site: "Kharagpur Office",

        assignmentDate: "2025-01-20",
        expectedReturnDate: "2028-01-19",

        assignedBy: "Rina Sen",
        condition: "Excellent",
        purpose: "HR Operations",
        remarks: "Assigned for HR and employee management activities.",

        status: "Assigned",
        createdAt: "2025-01-20",
    },

    {
        id: "3",
        assignmentId: "ASN0003",

        assetId: "4",
        assetName: "Dell P2422H Monitor",
        assetCode: "AST0004",

        employeeId: "8",
        employeeName: "Debopriyo Chatterjee",

        department: "Information Technology",
        site: "Kolkata Head Office",

        assignmentDate: "2025-02-05",
        expectedReturnDate: "2028-02-04",

        assignedBy: "Rahul Sharma",
        condition: "Good",
        purpose: "Development Work",
        remarks: "External monitor assigned for frontend development.",

        status: "Assigned",
        createdAt: "2025-02-05",
    },

    {
        id: "4",
        assignmentId: "ASN0004",

        assetId: "3",
        assetName: "Lenovo ThinkCentre M90",
        assetCode: "AST0003",

        employeeId: "3",
        employeeName: "Arijit Roy",

        department: "Finance & Accounts",
        site: "Asansol Regional Office",

        assignmentDate: "2025-02-10",
        expectedReturnDate: "2028-02-09",

        assignedBy: "Neha Gupta",
        condition: "Good",
        purpose: "Accounting Operations",
        remarks: "Desktop assigned for finance and accounting work.",

        status: "Assigned",
        createdAt: "2025-02-10",
    },

    {
        id: "5",
        assignmentId: "ASN0005",

        assetId: "14",
        assetName: "Featherlite Office Chair",
        assetCode: "AST0014",

        employeeId: "4",
        employeeName: "Sneha Paul",

        department: "Sales",
        site: "Siliguri Branch",

        assignmentDate: "2025-02-15",
        expectedReturnDate: "2030-02-14",

        assignedBy: "Ankit Verma",
        condition: "Excellent",
        purpose: "Workstation",
        remarks: "Ergonomic chair assigned to sales workstation.",

        status: "Assigned",
        createdAt: "2025-02-15",
    },

    {
        id: "6",
        assignmentId: "ASN0006",

        assetId: "5",
        assetName: "HP LaserJet Pro M404",
        assetCode: "AST0005",

        employeeId: "10",
        employeeName: "Abhishek Saha",

        department: "Administration",
        site: "Kolkata Head Office",

        assignmentDate: "2025-02-20",
        expectedReturnDate: "2027-02-19",

        assignedBy: "Rahul Sharma",
        condition: "Good",
        purpose: "Office Printing",
        remarks: "Printer assigned to administration department.",

        status: "Assigned",
        createdAt: "2025-02-20",
    },

    {
        id: "7",
        assignmentId: "ASN0007",

        assetId: "9",
        assetName: "APC Smart-UPS 1500VA",
        assetCode: "AST0009",

        employeeId: "7",
        employeeName: "Rakesh Kumar",

        department: "Maintenance",
        site: "Midnapore Service Center",

        assignmentDate: "2025-03-01",
        expectedReturnDate: "2028-02-28",

        assignedBy: "Prabir Roy",
        condition: "Excellent",
        purpose: "Power Backup",
        remarks: "UPS assigned for critical maintenance workstation.",

        status: "Assigned",
        createdAt: "2025-03-01",
    },

    {
        id: "8",
        assignmentId: "ASN0008",

        assetId: "10",
        assetName: "Voltas Split AC 1.5 Ton",
        assetCode: "AST0010",

        employeeId: "10",
        employeeName: "Abhishek Saha",

        department: "Administration",
        site: "Kharagpur Office",

        assignmentDate: "2025-03-05",
        expectedReturnDate: "2027-03-04",

        assignedBy: "Rahul Sharma",
        condition: "Good",
        purpose: "Office Facility",
        remarks: "AC installed in administration office.",

        status: "Assigned",
        createdAt: "2025-03-05",
    },

    {
        id: "9",
        assignmentId: "ASN0009",

        assetId: "13",
        assetName: "Godrej Office Desk",
        assetCode: "AST0013",

        employeeId: "2",
        employeeName: "Priya Das",

        department: "Human Resources",
        site: "Kolkata Head Office",

        assignmentDate: "2025-03-10",
        expectedReturnDate: "2030-03-09",

        assignedBy: "Rina Sen",
        condition: "Excellent",
        purpose: "HR Workstation",
        remarks: "Dedicated workstation for HR operations.",

        status: "Assigned",
        createdAt: "2025-03-10",
    },

    {
        id: "10",
        assignmentId: "ASN0010",

        assetId: "18",
        assetName: "Mahindra Bolero Pickup",
        assetCode: "AST0018",

        employeeId: "5",
        employeeName: "Sourav Ghosh",

        department: "Operations",
        site: "Haldia Plant",

        assignmentDate: "2025-03-15",
        expectedReturnDate: "2027-09-19",

        assignedBy: "Debashis Paul",
        condition: "Good",
        purpose: "Operational Transportation",
        remarks: "Utility vehicle assigned for plant operations.",

        status: "Assigned",
        createdAt: "2025-03-15",
    },

    {
        id: "11",
        assignmentId: "ASN0011",

        assetId: "19",
        assetName: "Hikvision CCTV Camera",
        assetCode: "AST0019",

        employeeId: "10",
        employeeName: "Abhishek Saha",

        department: "Administration",
        site: "Kharagpur Office",

        assignmentDate: "2025-03-20",
        expectedReturnDate: "2028-03-19",

        assignedBy: "Rahul Sharma",
        condition: "Excellent",
        purpose: "Security Monitoring",
        remarks: "CCTV device assigned for facility surveillance.",

        status: "Assigned",
        createdAt: "2025-03-20",
    },

    {
        id: "12",
        assignmentId: "ASN0012",

        assetId: "20",
        assetName: "Essl Biometric Attendance Device",
        assetCode: "AST0020",

        employeeId: "2",
        employeeName: "Priya Das",

        department: "Human Resources",
        site: "Kolkata Head Office",

        assignmentDate: "2025-03-25",
        expectedReturnDate: "2027-03-24",

        assignedBy: "Rina Sen",
        condition: "Excellent",
        purpose: "Employee Attendance",
        remarks: "Biometric device assigned for attendance management.",

        status: "Assigned",
        createdAt: "2025-03-25",
    },

    {
        id: "13",
        assignmentId: "ASN0013",

        assetId: "21",
        assetName: "ZKTeco Access Controller",
        assetCode: "AST0021",

        employeeId: "10",
        employeeName: "Abhishek Saha",

        department: "Administration",
        site: "Kolkata Head Office",

        assignmentDate: "2025-04-01",
        expectedReturnDate: "2028-03-31",

        assignedBy: "Rahul Sharma",
        condition: "Good",
        purpose: "Access Control",
        remarks: "Access control device installed at main entrance.",

        status: "Assigned",
        createdAt: "2025-04-01",
    },

    {
        id: "14",
        assignmentId: "ASN0014",

        assetId: "22",
        assetName: "Epson Projector",
        assetCode: "AST0022",

        employeeId: "6",
        employeeName: "Ananya Mukherjee",

        department: "Marketing",
        site: "Burdwan Office",

        assignmentDate: "2025-04-05",
        expectedReturnDate: "2028-04-04",

        assignedBy: "Sayan Dutta",
        condition: "Excellent",
        purpose: "Presentation and Training",
        remarks: "Projector assigned for presentations and meetings.",

        status: "Assigned",
        createdAt: "2025-04-05",
    },

    {
        id: "15",
        assignmentId: "ASN0015",

        assetId: "23",
        assetName: "Samsung Galaxy S24",
        assetCode: "AST0023",

        employeeId: "4",
        employeeName: "Sneha Paul",

        department: "Sales",
        site: "Siliguri Branch",

        assignmentDate: "2025-04-10",
        expectedReturnDate: "2027-04-09",

        assignedBy: "Ankit Verma",
        condition: "Excellent",
        purpose: "Official Communication",
        remarks: "Company mobile phone issued for client communication.",

        status: "Assigned",
        createdAt: "2025-04-10",
    },

    {
        id: "16",
        assignmentId: "ASN0016",

        assetId: "24",
        assetName: "Apple iPad Air",
        assetCode: "AST0024",

        employeeId: "6",
        employeeName: "Ananya Mukherjee",

        department: "Marketing",
        site: "Burdwan Office",

        assignmentDate: "2025-04-15",
        expectedReturnDate: "2027-04-14",

        assignedBy: "Sayan Dutta",
        condition: "Good",
        purpose: "Field Marketing",
        remarks: "Tablet assigned for marketing presentations and field activities.",

        status: "Assigned",
        createdAt: "2025-04-15",
    },

    {
        id: "17",
        assignmentId: "ASN0017",

        assetId: "1",
        assetName: "Dell Latitude 5440",
        assetCode: "AST0001",

        employeeId: "8",
        employeeName: "Debopriyo Chatterjee",

        department: "Information Technology",
        site: "Kolkata Head Office",

        assignmentDate: "2024-05-10",
        expectedReturnDate: "2025-05-09",

        assignedBy: "Rahul Sharma",
        condition: "Good",
        purpose: "Frontend Development",
        remarks: "Previous assignment completed after internship period.",

        status: "Returned",
        createdAt: "2024-05-10",
    },

    {
        id: "18",
        assignmentId: "ASN0018",

        assetId: "6",
        assetName: "Canon ImageRunner 2925i",
        assetCode: "AST0006",

        employeeId: "10",
        employeeName: "Abhishek Saha",

        department: "Administration",
        site: "Burdwan Office",

        assignmentDate: "2025-04-20",
        expectedReturnDate: "2027-04-19",

        assignedBy: "Rahul Sharma",
        condition: "Fair",
        purpose: "Document Processing",
        remarks: "Printer is currently sent for maintenance.",

        status: "Overdue",
        createdAt: "2025-04-20",
    },

    {
        id: "19",
        assignmentId: "ASN0019",

        assetId: "26",
        assetName: "Kent RO Water Purifier",
        assetCode: "AST0026",

        employeeId: "10",
        employeeName: "Abhishek Saha",

        department: "Administration",
        site: "Kharagpur Office",

        assignmentDate: "2025-05-01",
        expectedReturnDate: "2027-04-30",

        assignedBy: "Rahul Sharma",
        condition: "Good",
        purpose: "Employee Facility",
        remarks: "Water purifier assigned for office facility use.",

        status: "Assigned",
        createdAt: "2025-05-01",
    },

    {
        id: "20",
        assignmentId: "ASN0020",

        assetId: "27",
        assetName: "Lenovo ThinkPad E14",
        assetCode: "AST0027",

        employeeId: "7",
        employeeName: "Rakesh Kumar",

        department: "Maintenance",
        site: "Midnapore Service Center",

        assignmentDate: "2025-05-05",
        expectedReturnDate: "2028-05-04",

        assignedBy: "Prabir Roy",
        condition: "Excellent",
        purpose: "Maintenance Operations",
        remarks: "Laptop assigned for field maintenance reporting.",

        status: "Assigned",
        createdAt: "2025-05-05",
    },

    {
        id: "21",
        assignmentId: "ASN0021",

        assetId: "28",
        assetName: "LG 55 Inch Display",
        assetCode: "AST0028",

        employeeId: "6",
        employeeName: "Ananya Mukherjee",

        department: "Marketing",
        site: "Kolkata Head Office",

        assignmentDate: "2025-05-10",
        expectedReturnDate: "2028-05-09",

        assignedBy: "Sayan Dutta",
        condition: "Excellent",
        purpose: "Marketing Presentation",
        remarks: "Display installed in marketing conference room.",

        status: "Assigned",
        createdAt: "2025-05-10",
    },

    {
        id: "22",
        assignmentId: "ASN0022",

        assetId: "30",
        assetName: "Dell OptiPlex 7010",
        assetCode: "AST0030",

        employeeId: "3",
        employeeName: "Arijit Roy",

        department: "Finance & Accounts",
        site: "Asansol Regional Office",

        assignmentDate: "2025-05-15",
        expectedReturnDate: "2028-05-14",

        assignedBy: "Neha Gupta",
        condition: "Excellent",
        purpose: "Finance Operations",
        remarks: "Desktop assigned for accounting operations.",

        status: "Assigned",
        createdAt: "2025-05-15",
    },

    {
        id: "23",
        assignmentId: "ASN0023",

        assetId: "25",
        assetName: "ABC Fire Extinguisher",
        assetCode: "AST0025",

        employeeId: "5",
        employeeName: "Sourav Ghosh",

        department: "Operations",
        site: "Haldia Plant",

        assignmentDate: "2025-05-20",
        expectedReturnDate: "2027-05-19",

        assignedBy: "Debashis Paul",
        condition: "Good",
        purpose: "Fire Safety",
        remarks: "Safety equipment assigned to plant operations.",

        status: "Assigned",
        createdAt: "2025-05-20",
    },

    {
        id: "24",
        assignmentId: "ASN0024",

        assetId: "17",
        assetName: "Maruti Suzuki Ertiga",
        assetCode: "AST0017",

        employeeId: "5",
        employeeName: "Sourav Ghosh",

        department: "Operations",
        site: "Kolkata Head Office",

        assignmentDate: "2024-08-20",
        expectedReturnDate: "2025-08-19",

        assignedBy: "Debashis Paul",
        condition: "Good",
        purpose: "Official Transportation",
        remarks: "Vehicle returned after completion of operational assignment.",

        status: "Returned",
        createdAt: "2024-08-20",
    },

    {
        id: "25",
        assignmentId: "ASN0025",

        assetId: "8",
        assetName: "Cisco Catalyst 9200",
        assetCode: "AST0008",

        employeeId: "8",
        employeeName: "Debopriyo Chatterjee",

        department: "Information Technology",
        site: "Kolkata Head Office",

        assignmentDate: "2025-06-01",
        expectedReturnDate: "2028-05-31",

        assignedBy: "Rahul Sharma",
        condition: "Excellent",
        purpose: "Network Infrastructure",
        remarks: "Network equipment assigned to IT infrastructure team.",

        status: "Assigned",
        createdAt: "2025-06-01",
    },
];