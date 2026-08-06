import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import EmployeeForm from "../components/EmployeeForm";
import type { EmployeeFormData } from "../validation/employee.schema";

export default function EmployeeAdd() {
    const navigate = useNavigate();

    const handleSubmit = (data: EmployeeFormData) => {
        console.log("Employee Data:", data);

        toast.success("Employee created successfully.");

        navigate("/employee");
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Add Employee
                </h1>

                <p className="text-muted-foreground">
                    Create a new employee profile.
                </p>
            </div>

            <EmployeeForm
                onSubmit={handleSubmit}
                submitLabel="Create Employee"
            />
        </div>
    );
}