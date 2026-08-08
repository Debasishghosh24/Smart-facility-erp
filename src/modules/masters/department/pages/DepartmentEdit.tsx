import { useMemo } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/component/ui/button";

import DepartmentForm from "../components/DepartmentForm";
import { departmentMock } from "../mock/department.mock";
import type { DepartmentFormData } from "../validation/department.schema";

export default function DepartmentEdit() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const existingData = useMemo(() => {
        return departmentMock.find((item) => item.id === id);
    }, [id]);

    const defaultValues: Partial<DepartmentFormData> = useMemo(() => {
        return existingData
            ? {
                name: existingData.name,
                shortCode: existingData.shortCode,
                description: existingData.description,
                status: existingData.status === "Active",
            }
            : {};
    }, [existingData]);

    const handleSubmit = (data: DepartmentFormData) => {
        console.log("Updating Department data for id:", id, data);
        navigate("/department");
    };

    if (!existingData) {
        return (
            <div className="rounded-lg border border-red-200 bg-red-50 p-8">
                <h2 className="text-xl font-semibold text-red-600">
                    Department Not Found
                </h2>
                <p className="mt-2 text-red-500">
                    The requested department does not exist.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Breadcrumbs & Page Header Row */}
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 mb-1">
                        <span>Masters</span>
                        <span>&gt;</span>
                        <span>Department</span>
                        <span>&gt;</span>
                        <span className="text-slate-600 font-semibold">Edit Department</span>
                    </div>

                    <h1 className="text-2xl font-bold tracking-tight text-slate-800">
                        Edit Department
                    </h1>

                    <p className="text-sm text-slate-500">
                        Modify information for department: {existingData.name} ({existingData.shortCode}).
                    </p>
                </div>

                <Link to="/department">
                    <Button variant="outline" className="border-slate-200 text-slate-700 bg-white hover:bg-slate-50">
                        <ArrowLeft className="mr-2 h-4 w-4 text-slate-500" />
                        Back to Departments
                    </Button>
                </Link>
            </div>

            {/* Form */}
            <DepartmentForm
                mode="edit"
                defaultValues={defaultValues}
                onSubmit={handleSubmit}
                onCancel={() => navigate("/department")}
            />
        </div>
    );
}