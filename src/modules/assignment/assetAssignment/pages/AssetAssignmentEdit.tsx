import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { ClipboardEdit } from "lucide-react";

import AssetAssignmentForm from "../components/AssetAssignmentForm";
import { mockAssetAssignments } from "../mock/assetAssignment.mock";

import type { AssetAssignmentFormData } from "../validation/assetAssignment.schema";

export default function AssetAssignmentEdit() {
    const { id } = useParams();
    const navigate = useNavigate();

    const assignment = useMemo(
        () =>
            mockAssetAssignments.find(
                (item) => item.id === id
            ),
        [id]
    );

    // =====================================================
    // Submit
    // =====================================================

    const handleSubmit = (
        data: AssetAssignmentFormData
    ) => {
        console.log(
            "Updated Asset Assignment:",
            data
        );

        // TODO:
        // API update mutation will be added here later

        toast.success(
            "Asset assignment updated successfully."
        );

        navigate(
            "/transactions/asset-assignment"
        );
    };

    // =====================================================
    // Assignment Not Found
    // =====================================================

    if (!assignment) {
        return (
            <div className="space-y-4">
                <div className="rounded-xl border border-red-200 bg-red-50 p-6">
                    <h2 className="text-xl font-semibold text-red-600">
                        Assignment Not Found
                    </h2>

                    <p className="mt-2 text-sm text-red-500">
                        The asset assignment you are looking
                        for does not exist or may have been
                        removed.
                    </p>

                    <button
                        type="button"
                        onClick={() =>
                            navigate(
                                "/transactions/asset-assignment"
                            )
                        }
                        className="mt-4 text-sm font-medium text-red-700 underline"
                    >
                        Back to Asset Assignments
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
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                    <ClipboardEdit className="h-5 w-5 text-blue-600" />
                </div>

                <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                        Edit Asset Assignment
                    </h1>

                    <p className="mt-1 text-muted-foreground">
                        Update assignment details, employee,
                        assignment period and status.
                    </p>
                </div>
            </div>

            {/* ================================================= */}
            {/* Assignment Form */}
            {/* ================================================= */}

            <AssetAssignmentForm
                defaultValues={{
                    assignmentId:
                        assignment.assignmentId,

                    assetId: assignment.assetId,
                    assetName: assignment.assetName,
                    assetCode: assignment.assetCode,

                    employeeId:
                        assignment.employeeId,
                    employeeName:
                        assignment.employeeName,

                    department:
                        assignment.department,

                    site: assignment.site,

                    assignmentDate:
                        assignment.assignmentDate,

                    expectedReturnDate:
                        assignment.expectedReturnDate,

                    assignedBy:
                        assignment.assignedBy,

                    condition:
                        assignment.condition,

                    purpose:
                        assignment.purpose,

                    remarks:
                        assignment.remarks,

                    status:
                        assignment.status,
                }}
                onSubmit={handleSubmit}
                submitLabel="Update Assignment"
            />
        </div>
    );
}