import { Link } from "react-router-dom";
import {
    ClipboardList,
    Plus,
    Wrench,
} from "lucide-react";

import { Button } from "@/component/ui/button";

import { WorkOrderTable } from "../components/WorkOrderTable";
import { columns } from "../constants/workOrder.columns";
import { workOrderMock } from "../mock/workOrder.mock";

export default function WorkOrderList() {
    return (
        <div className="space-y-6">
            {/* ================================================= */}
            {/* PAGE HEADER                                      */}
            {/* ================================================= */}

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <Wrench className="h-5 w-5" />
                        </div>

                        <div>
                            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                                Work Orders
                            </h1>

                            <p className="text-sm text-muted-foreground">
                                Manage and track asset maintenance work orders.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Add Work Order */}

                <Link to="/maintenance/work-order/add">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Create Work Order
                    </Button>
                </Link>
            </div>

            {/* ================================================= */}
            {/* SUMMARY                                          */}
            {/* ================================================= */}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <SummaryCard
                    title="Total Work Orders"
                    value={workOrderMock.length}
                    icon={<ClipboardList className="h-5 w-5" />}
                />

                <SummaryCard
                    title="Open"
                    value={
                        workOrderMock.filter(
                            (item) => item.status === "Open"
                        ).length
                    }
                    icon={<ClipboardList className="h-5 w-5" />}
                />

                <SummaryCard
                    title="In Progress"
                    value={
                        workOrderMock.filter(
                            (item) =>
                                item.status === "In Progress"
                        ).length
                    }
                    icon={<Wrench className="h-5 w-5" />}
                />

                <SummaryCard
                    title="Completed"
                    value={
                        workOrderMock.filter(
                            (item) =>
                                item.status === "Completed"
                        ).length
                    }
                    icon={<ClipboardList className="h-5 w-5" />}
                />
            </div>

            {/* ================================================= */}
            {/* WORK ORDER TABLE                                 */}
            {/* ================================================= */}

            <WorkOrderTable
                data={workOrderMock}
                columns={columns}
            />
        </div>
    );
}

// =============================================================
// Summary Card
// =============================================================

interface SummaryCardProps {
    title: string;
    value: number;
    icon: React.ReactNode;
}

function SummaryCard({
    title,
    value,
    icon,
}: SummaryCardProps) {
    return (
        <div className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-muted-foreground">
                        {title}
                    </p>

                    <p className="mt-1 text-2xl font-semibold text-slate-900">
                        {value}
                    </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {icon}
                </div>
            </div>
        </div>
    );
}