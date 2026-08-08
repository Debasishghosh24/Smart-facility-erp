export interface Vendor {
    id: string;

    vendorCode: string;

    vendorName: string;

    companyName: string;

    gstNumber: string;

    contactPerson: string;

    email: string;

    contactNo: string;

    address: string;

    city: string;

    state: string;

    pincode: string;

    status: "Active" | "Inactive";

    createdAt: string;
}