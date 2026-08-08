import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/component/ui/button";

import DepartmentForm from "../components/DepartmentForm";
import type { DepartmentFormData } from "../validation/department.schema";

export default function DepartmentAdd() {
    const navigate = useNavigate();

    const handleSubmit = (data: DepartmentFormData) => {
        console.log("Submitting new Department:", data);
        navigate("/department");
    };

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
                        <span className="text-slate-600 font-semibold">Add New Department</span>
                    </div>

                    <h1 className="text-2xl font-bold tracking-tight text-slate-800">
                        Add New Department
                    </h1>

                    <p className="text-sm text-slate-500">
                        Create a new department for your organization.
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
                mode="add"
                onSubmit={handleSubmit}
                onCancel={() => navigate("/department")}
            />
        </div>
    );
}