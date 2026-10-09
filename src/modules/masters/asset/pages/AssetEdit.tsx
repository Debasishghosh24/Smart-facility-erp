import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

import AssetForm from "../components/AssetForm";
import { useAssets } from "../context/assetContext";

import type { AssetFormData } from "../validation/asset.schema";

export default function AssetEdit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { assets, updateAsset } = useAssets();

    const asset = useMemo(
        () =>
            assets.find(
                (item) => item.id === id
            ),
        [assets, id]
    );
    const handleSubmit = (data: AssetFormData) => {
        updateAsset(id!, data);

        toast.success("Asset updated successfully.");

        navigate("/asset");
    };



    if (!asset) {
        return (
            <div className="rounded-xl border border-red-200 bg-red-50 p-8">
                <h2 className="text-xl font-semibold text-red-600">
                    Asset Not Found
                </h2>

                <p className="mt-2 text-sm text-red-500">
                    The asset you are looking for does not exist
                    or may have been removed.
                </p>

                <button
                    type="button"
                    onClick={() =>
                        navigate("/asset")
                    }
                    className="mt-4 text-sm font-medium text-red-700 underline"
                >
                    Back to Asset Master
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-6">


            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Edit Asset
                </h1>

                <p className="text-muted-foreground">
                    Update asset information, ownership, location,
                    purchase and operational details.
                </p>
            </div>



            <AssetForm
                defaultValues={{
                    assetCode: asset.assetCode,
                    assetName: asset.assetName,

                    category: asset.category,
                    assetType: asset.assetType,

                    serialNumber: asset.serialNumber,
                    modelNumber: asset.modelNumber,
                    manufacturer: asset.manufacturer,

                    vendor: asset.vendor,
                    department: asset.department,
                    site: asset.site,

                    purchaseDate: asset.purchaseDate,
                    purchaseCost: asset.purchaseCost,
                    warrantyExpiry: asset.warrantyExpiry,

                    status: asset.status,
                }}
                onSubmit={handleSubmit}
                submitLabel="Update Asset"
            />
        </div>
    );
}