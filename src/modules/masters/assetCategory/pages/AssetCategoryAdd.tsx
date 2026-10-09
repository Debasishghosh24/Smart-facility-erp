import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import AssetCategoryForm from "../components/AssetCategoryForm";

import type { AssetCategoryFormData } from "../validation/assetCategory.schema";
import { useAssetCategories } from "../context/assetCategoryContext";

export default function AssetCategoryAdd() {
    const navigate = useNavigate();
    const { addAssetCategory } = useAssetCategories();

    const handleSubmit = (data: AssetCategoryFormData) => {
        addAssetCategory({
            id: `CAT-${Date.now()}`,
            ...data,
            status: data.status ? "Active" : "Inactive",
            createdAt: new Date().toISOString().split("T")[0]
        });

        toast.success("Asset category created successfully.");

        navigate("/asset-category");
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Add Asset Category
                </h1>

                <p className="text-muted-foreground">
                    Create a new category to organize and classify assets.
                </p>
            </div>

            {/* Form */}
            <AssetCategoryForm
                onSubmit={handleSubmit}
                submitLabel="Save Category"
            />
        </div>
    );
}