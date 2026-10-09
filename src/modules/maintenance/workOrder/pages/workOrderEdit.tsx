import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Pencil } from "lucide-react";

import { Button } from "@/component/ui/button";

import { WorkOrderForm } from "../components/WorkOrderForm";
import { workOrderMock } from "../mock/workOrder.mock";
import type { WorkOrderFormValues } from "../validation/workOrder.schema";

export default function WorkOrderEdit() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    // =====================================================
    // Find Work Order
    // =====================================================

    const workOrder = workOrderMock.find(
        (item) => item.id === id
    );

    // =====================================================
    // Handle Update
    // =====================================================

    const handleUpdateWorkOrder = (
        data: WorkOrderFormValues
    ) => {
        console.log("Update Work Order:", {
            id,
            ...data,
        });



        navigate("/maintenance/work-order");
    };

    // =====================================================
    // Work Order Not Found
    // =====================================================

    if (!workOrder) {
        return (
            <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                    <Pencil className="h-5 w-5 text-red-500" />
                </div>

                <h2 className="text-lg font-semibold text-slate-900">
                    Work Order Not Found
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                    The work order you are trying to edit does not exist.
                </p>

                <Button
                    type="button"
                    variant="outline"
                    className="mt-4"
                    onClick={() =>
                        navigate("/maintenance/work-order")
                    }
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Work Orders
                </Button>
            </div>
        );
    }

    // =====================================================
    // Convert WorkOrder → Form Values
    // =====================================================

    const defaultValues: WorkOrderFormValues = {
        workOrderNumber: workOrder.workOrderNumber,

        assetId: workOrder.assetId,
        assetCode: workOrder.assetCode,
        assetName: workOrder.assetName,

        maintenanceType: workOrder.maintenanceType,

        issueDescription: workOrder.issueDescription,

        priority: workOrder.priority,

        requestedBy: workOrder.requestedBy,
        requestedDate: workOrder.requestedDate,

        assignedTo: workOrder.assignedTo,

        vendor: workOrder.vendor,
        site: workOrder.site,
        department: workOrder.department,

        scheduledDate: workOrder.scheduledDate,
        startedDate: workOrder.startedDate ?? "",
        completedDate: workOrder.completedDate ?? "",

        estimatedCost: workOrder.estimatedCost,
        actualCost: workOrder.actualCost,

        status: workOrder.status,

        remarks: workOrder.remarks ?? "",

        createdAt: workOrder.createdAt,
    };

    return (
        <div className="space-y-6">
            {/* ================================================= */}
            {/* PAGE HEADER                                      */}
            {/* ================================================= */}

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                    {/* Back */}

                    <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => navigate(-1)}
                        className="h-9 w-9"
                    >
                        <ArrowLeft className="h-4 w-4" />
                    </Button>

                    <div>
                        <div className="flex items-center gap-2">
                            <Pencil className="h-5 w-5 text-primary" />

                            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                                Edit Work Order
                            </h1>
                        </div>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Update the details of{" "}
                            <span className="font-medium text-slate-700">
                                {workOrder.workOrderNumber}
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            {/* ================================================= */}
            {/* FORM                                             */}
            {/* ================================================= */}

            <WorkOrderForm
                defaultValues={defaultValues}
                onSubmit={handleUpdateWorkOrder}
                submitLabel="Update Work Order"
            />
        </div>
    );
}