import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus } from "lucide-react";

import { Button } from "@/component/ui/button";

import { WorkOrderForm } from "../components/WorkOrderForm";
import type { WorkOrderFormValues } from "../validation/workOrder.schema";

export default function WorkOrderAdd() {
    const navigate = useNavigate();

    // =====================================================
    // Create Work Order
    // =====================================================

    const handleCreateWorkOrder = (
        data: WorkOrderFormValues
    ) => {
        console.log("Create Work Order:", data);

        // Backend integration হলে এখানে API call হবে

        navigate("/maintenance/work-order");
    };

    return (
        <div className="space-y-6">
            {/* ================================================= */}
            {/* PAGE HEADER                                      */}
            {/* ================================================= */}

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                    {/* Back Button */}

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
                            <Plus className="h-5 w-5 text-primary" />

                            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                                Create Work Order
                            </h1>
                        </div>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Create a new maintenance work order for an asset.
                        </p>
                    </div>
                </div>
            </div>

            {/* ================================================= */}
            {/* FORM                                             */}
            {/* ================================================= */}

            <WorkOrderForm
                onSubmit={handleCreateWorkOrder}
                submitLabel="Create Work Order"
            />
        </div>
    );
}