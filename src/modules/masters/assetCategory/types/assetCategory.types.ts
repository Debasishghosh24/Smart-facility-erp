export interface AssetCategory {
    id: string;
    categoryCode: string;
    categoryName: string;
    description: string;
    assetType: "IT" | "Electrical" | "Furniture" | "Vehicle" | "Other";
    status: "Active" | "Inactive";
    createdAt: string;
}