export interface Site {
    id: string;

    siteName: string;
    siteCode: string;

    department: string;

    siteHead: string;

    email: string;
    contactNo: string;

    address: string;
    city: string;
    state: string;
    pincode: string;

    status: "Active" | "Inactive";

    createdAt: string;
}