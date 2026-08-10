import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

import AssetCategoryForm from "../components/AssetCategoryForm";
import { mockAssetCategories } from "../mock/assetCategory.mock";

import type { AssetCategoryFormData } from "../validation/assetCategory.schema";

export default function AssetCategoryEdit() {
    const { id } = useParams();

    const navigate = useNavigate();

    const category = useMemo(
        () =>
            mockAssetCategories.find(
                (item) => item.id === id
            ),
        [id]
    );

    const handleSubmit = (data: AssetCategoryFormData) => {
        console.log("Updated Asset Category:", data);

        // TODO:
        // API update mutation will be added here later

        toast.success(
            "Asset category updated successfully."
        );

        navigate("/asset-category");
    };

    // Category not found
    if (!category) {
        return (
            <div className="rounded-xl border border-red-200 bg-red-50 p-8">
                <h2 className="text-xl font-semibold text-red-600">
                    Asset Category Not Found
                </h2>

                <p className="mt-2 text-sm text-red-500">
                    The asset category you are looking for does not
                    exist or may have been removed.
                </p>

                <button
                    type="button"
                    onClick={() =>
                        navigate("/asset-category")
                    }
                    className="mt-4 text-sm font-medium text-red-700 underline"
                >
                    Back to Asset Categories
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Page Header */}

            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Edit Asset Category
                </h1>

                <p className="text-muted-foreground">
                    Update the information and classification of
                    this asset category.
                </p>
            </div>

            {/* Form */}

            <AssetCategoryForm
                defaultValues={{
                    categoryCode: category.categoryCode,
                    categoryName: category.categoryName,
                    description: category.description,
                    assetType: category.assetType,
                    status: category.status === "Active",
                }}
                onSubmit={handleSubmit}
                submitLabel="Update Category"
            />
        </div>
    );
}