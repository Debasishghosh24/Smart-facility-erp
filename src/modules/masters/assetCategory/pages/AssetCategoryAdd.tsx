import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import AssetCategoryForm from "../components/AssetCategoryForm";

import type { AssetCategoryFormData } from "../validation/assetCategory.schema";

export default function AssetCategoryAdd() {
    const navigate = useNavigate();

    const handleSubmit = (data: AssetCategoryFormData) => {
        console.log("New Asset Category:", data);

        // TODO:
        // API mutation will be added here later

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