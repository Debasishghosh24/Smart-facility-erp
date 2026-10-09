import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ArrowRightLeft } from "lucide-react";

import AssetTransferForm from "../components/assetTransferForm";

import type { AssetTransferFormData } from "../validation/assetTransferSchema";

export default function AssetTransferAdd() {
    const navigate = useNavigate();



    const handleSubmit = (
        data: AssetTransferFormData
    ) => {
        console.log("New Asset Transfer:", data);

        // TODO:
        // API create mutation will be added here later.
        //
        // Example future flow:
        // 1. Create transfer transaction
        // 2. Update current assignment
        // 3. Update asset's current employee/site
        // 4. Create movement history
        // 5. Show success message

        toast.success(
            "Asset transfer created successfully."
        );

        navigate("/transactions/asset-transfer");
    };

    return (
        <div className="space-y-6">
            {/* ================================================= */}
            {/* Page Header */}
            {/* ================================================= */}

            <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                    <ArrowRightLeft className="h-5 w-5 text-blue-600" />
                </div>

                <div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-3xl font-bold tracking-tight">
                            New Asset Transfer
                        </h1>

                        <span className="hidden rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 sm:inline-flex">
                            New
                        </span>
                    </div>

                    <p className="mt-1 max-w-2xl text-muted-foreground">
                        Transfer an assigned asset from its current
                        employee, department or site to a new
                        destination.
                    </p>
                </div>
            </div>

            {/* ================================================= */}
            {/* Transfer Form */}
            {/* ================================================= */}

            <AssetTransferForm
                onSubmit={handleSubmit}
                submitLabel="Complete Transfer"
            />
        </div>
    );
}