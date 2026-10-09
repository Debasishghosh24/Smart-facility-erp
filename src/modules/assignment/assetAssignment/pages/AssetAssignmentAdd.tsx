import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ClipboardPlus } from "lucide-react";

import AssetAssignmentForm from "../components/AssetAssignmentForm";
import type { AssetAssignmentFormData } from "../validation/assetAssignment.schema";

export default function AssetAssignmentAdd() {
    const navigate = useNavigate();

    const handleSubmit = (
        data: AssetAssignmentFormData
    ) => {
        console.log("New Asset Assignment:", data);

        // TODO:
        // API create mutation will be added here later

        toast.success(
            "Asset assigned successfully."
        );

        navigate(
            "/transactions/asset-assignment"
        );
    };

    return (
        <div className="space-y-6">
            {/* ================================================= */}
            {/* Page Header */}
            {/* ================================================= */}

            <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                    <ClipboardPlus className="h-5 w-5 text-blue-600" />
                </div>

                <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                        Assign Asset
                    </h1>

                    <p className="mt-1 text-muted-foreground">
                        Assign an available asset to an employee
                        and record the assignment details.
                    </p>
                </div>
            </div>

            {/* ================================================= */}
            {/* Assignment Form */}
            {/* ================================================= */}

            <AssetAssignmentForm
                onSubmit={handleSubmit}
                submitLabel="Assign Asset"
            />
        </div>
    );
}