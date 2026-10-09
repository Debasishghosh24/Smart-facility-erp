import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { ClipboardEdit } from "lucide-react";

import AssetReturnForm from "../components/assetReturnForm";
import { mockAssetReturns } from "../mock/assetReturn.mock";

import type { AssetReturnFormData } from "../validation/assetReturnSchema";

export default function AssetReturnEdit() {
    const { id } = useParams();
    const navigate = useNavigate();

    // =====================================================
    // Find Return Record
    // =====================================================

    const returnRecord = useMemo(
        () =>
            mockAssetReturns.find(
                (item) => item.id === id
            ),
        [id]
    );

    // =====================================================
    // Submit
    // =====================================================

    const handleSubmit = (
        data: AssetReturnFormData
    ) => {
        console.log(
            "Updated Asset Return:",
            data
        );

        // TODO:
        // API update mutation will be added here later

        toast.success(
            "Asset return updated successfully."
        );

        navigate("/transactions/asset-return");
    };

    // =====================================================
    // Return Not Found
    // =====================================================

    if (!returnRecord) {
        return (
            <div className="space-y-4">
                <div className="rounded-xl border border-red-200 bg-red-50 p-6">
                    <h2 className="text-xl font-semibold text-red-600">
                        Return Record Not Found
                    </h2>

                    <p className="mt-2 text-sm text-red-500">
                        The asset return record you are looking
                        for does not exist or may have been
                        removed.
                    </p>

                    <button
                        type="button"
                        onClick={() =>
                            navigate(
                                "/transactions/asset-return"
                            )
                        }
                        className="mt-4 text-sm font-medium text-red-700 underline"
                    >
                        Back to Asset Returns
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* ================================================= */}
            {/* Page Header */}
            {/* ================================================= */}

            <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
                    <ClipboardEdit className="h-5 w-5 text-emerald-600" />
                </div>

                <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                        Edit Asset Return
                    </h1>

                    <p className="mt-1 text-muted-foreground">
                        Update return details, asset condition,
                        inspection status and remarks.
                    </p>
                </div>
            </div>

            {/* ================================================= */}
            {/* Return Form */}
            {/* ================================================= */}

            <AssetReturnForm
                defaultValues={{
                    returnId:
                        returnRecord.returnId,

                    assignmentId:
                        returnRecord.assignmentId,

                    assetId:
                        returnRecord.assetId,

                    assetName:
                        returnRecord.assetName,

                    assetCode:
                        returnRecord.assetCode,

                    employeeId:
                        returnRecord.employeeId,

                    employeeName:
                        returnRecord.employeeName,

                    department:
                        returnRecord.department,

                    site:
                        returnRecord.site,

                    assignmentDate:
                        returnRecord.assignmentDate,

                    returnDate:
                        returnRecord.returnDate,

                    returnedTo:
                        returnRecord.returnedTo,

                    condition:
                        returnRecord.condition,

                    remarks:
                        returnRecord.remarks,

                    status:
                        returnRecord.status,
                }}
                onSubmit={handleSubmit}
                submitLabel="Update Return"
            />
        </div>
    );
}