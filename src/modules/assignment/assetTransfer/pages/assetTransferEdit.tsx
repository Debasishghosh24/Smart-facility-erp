import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { ArrowRightLeft, Pencil } from "lucide-react";

import AssetTransferForm from "../components/assetTransferForm";
import { mockAssetTransfers } from "../mock/assetTransfer.mock";

import type { AssetTransferFormData } from "../validation/assetTransferSchema";

export default function AssetTransferEdit() {
    const { id } = useParams();
    const navigate = useNavigate();

    // =====================================================
    // Find Existing Transfer
    // =====================================================

    const transferRecord = useMemo(
        () =>
            mockAssetTransfers.find(
                (item) => item.id === id
            ),
        [id]
    );

    // =====================================================
    // Submit Handler
    // =====================================================

    const handleSubmit = (
        data: AssetTransferFormData
    ) => {
        console.log(
            "Updated Asset Transfer:",
            data
        );

        // TODO:
        // API update mutation will be added here later.
        //
        // Example future flow:
        // 1. Update transfer transaction
        // 2. Update destination employee/site
        // 3. Update asset movement history
        // 4. Maintain audit history

        toast.success(
            "Asset transfer updated successfully."
        );

        navigate("/transactions/asset-transfer");
    };

    // =====================================================
    // Transfer Not Found
    // =====================================================

    if (!transferRecord) {
        return (
            <div className="space-y-6">
                <div className="rounded-xl border border-red-200 bg-red-50 p-6">
                    <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100">
                            <ArrowRightLeft className="h-5 w-5 text-red-600" />
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-red-700">
                                Transfer Record Not Found
                            </h2>

                            <p className="mt-1 text-sm text-red-600">
                                The asset transfer record you are
                                looking for does not exist or may have
                                been removed.
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() =>
                            navigate(
                                "/transactions/asset-transfer"
                            )
                        }
                        className="mt-5 text-sm font-medium text-red-700 underline underline-offset-4 hover:text-red-800"
                    >
                        Back to Asset Transfers
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
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                    <Pencil className="h-5 w-5 text-blue-600" />
                </div>

                <div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-3xl font-bold tracking-tight">
                            Edit Asset Transfer
                        </h1>

                        <span className="hidden rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 sm:inline-flex">
                            {transferRecord.transferId}
                        </span>
                    </div>

                    <p className="mt-1 max-w-2xl text-muted-foreground">
                        Update the asset transfer details,
                        destination, transfer reason, condition or
                        status.
                    </p>
                </div>
            </div>

            {/* ================================================= */}
            {/* Transfer Form */}
            {/* ================================================= */}

            <AssetTransferForm
                defaultValues={{
                    assetId: transferRecord.assetId,
                    assetName: transferRecord.assetName,
                    assetCode: transferRecord.assetCode,

                    fromEmployeeId:
                        transferRecord.fromEmployeeId,

                    fromEmployeeName:
                        transferRecord.fromEmployeeName,

                    fromDepartment:
                        transferRecord.fromDepartment,

                    fromSite:
                        transferRecord.fromSite,

                    toEmployeeId:
                        transferRecord.toEmployeeId,

                    toEmployeeName:
                        transferRecord.toEmployeeName,

                    toDepartment:
                        transferRecord.toDepartment,

                    toSite:
                        transferRecord.toSite,

                    transferDate:
                        transferRecord.transferDate,

                    transferReason:
                        transferRecord.transferReason,

                    condition:
                        transferRecord.condition,

                    transferredBy:
                        transferRecord.transferredBy,

                    remarks:
                        transferRecord.remarks,

                    status:
                        transferRecord.status,
                }}
                onSubmit={handleSubmit}
                submitLabel="Update Transfer"
            />
        </div>
    );
}