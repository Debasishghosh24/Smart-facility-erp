export interface Asset {
    id: string;

    assetCode: string;
    assetName: string;

    category: string;
    assetType: string;

    serialNumber: string;
    modelNumber: string;
    manufacturer: string;

    vendor: string;
    department: string;
    site: string;

    purchaseDate: string;
    purchaseCost: number;
    warrantyExpiry: string;

    status:
    | "Available"
    | "Assigned"
    | "Under Maintenance"
    | "Retired"
    | "Lost";

    createdAt: string;
}