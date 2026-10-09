import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ClipboardPlus } from "lucide-react";

import AssetReturnForm from "../components/assetReturnForm";

import type { AssetReturnFormData } from "../validation/assetReturnSchema";

export default function AssetReturnAdd() {
    const navigate = useNavigate();

    const handleSubmit = (
        data: AssetReturnFormData
    ) => {
        console.log("New Asset Return:", data);

        // TODO:
        // API create mutation will be added here later

        toast.success(
            "Asset return processed successfully."
        );

        navigate("/transactions/asset-return");
    };

    return (
        <div className="space-y-6">
            {/* ================================================= */}
            {/* Page Header */}
            {/* ================================================= */}

            <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
                    <ClipboardPlus className="h-5 w-5 text-emerald-600" />
                </div>

                <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                        Process Asset Return
                    </h1>

                    <p className="mt-1 text-muted-foreground">
                        Record the return of an assigned asset,
                        inspect its condition and update the return
                        status.
                    </p>
                </div>
            </div>

            {/* ================================================= */}
            {/* Return Form */}
            {/* ================================================= */}

            <AssetReturnForm
                onSubmit={handleSubmit}
                submitLabel="Process Return"
            />
        </div>
    );
}