export interface Employee {
    id: string;

    employeeId: string;

    firstName: string;
    lastName: string;

    department: string;
    site: string;

    designation: string;

    email: string;
    contactNo: string;

    joiningDate: string;

    employmentType:
    | "Permanent"
    | "Contract"
    | "Intern";

    reportingManager: string;

    status: "Active" | "Inactive";

    createdAt: string;
}