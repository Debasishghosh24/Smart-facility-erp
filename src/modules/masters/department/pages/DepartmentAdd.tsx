import { useNavigate } from "react-router-dom";
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
            <h1 className="text-2xl font-semibold">Add Department</h1>

            <DepartmentForm
                mode="add"
                onSubmit={handleSubmit}
            />
        </div>
    );
}