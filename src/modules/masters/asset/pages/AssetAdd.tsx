import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import AssetForm from "../components/AssetForm";
import type { AssetFormData } from "../validation/asset.schema";
import type { Asset } from "../types/asset.types";
import { useAssets } from "../context/assetContext";

export default function AssetAdd() {
    const navigate = useNavigate();

    const { addAsset } = useAssets();

    const handleSubmit = (data: AssetFormData) => {
        const newAsset: Asset = {
            id: crypto.randomUUID(),

            assetCode: data.assetCode,
            assetName: data.assetName,

            category: data.category,
            assetType: data.assetType,

            serialNumber: data.serialNumber,
            modelNumber: data.modelNumber,
            manufacturer: data.manufacturer,

            vendor: data.vendor,
            department: data.department,
            site: data.site,

            purchaseDate: data.purchaseDate,
            purchaseCost: data.purchaseCost,
            warrantyExpiry: data.warrantyExpiry,

            status: data.status,

            createdAt: new Date()
                .toISOString()
                .split("T")[0],
        };

        // Add asset to global AssetContext state
        addAsset(newAsset);

        console.log("New Asset:", newAsset);

        toast.success("Asset created successfully.");

        navigate("/asset");
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}

            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Add Asset
                </h1>

                <p className="text-muted-foreground">
                    Register a new asset and assign its ownership,
                    location and purchase information.
                </p>
            </div>

            {/* Asset Form */}

            <AssetForm
                onSubmit={handleSubmit}
                submitLabel="Save Asset"
            />
        </div>
    );
}