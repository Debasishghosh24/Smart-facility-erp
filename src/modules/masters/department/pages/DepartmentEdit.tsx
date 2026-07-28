import { useNavigate, useParams } from "react-router-dom";
import DepartmentForm from "../components/DepartmentForm";
import { departmentMock } from "../mock/department.mock";
import type { DepartmentFormData } from "../validation/department.schema";

export default function DepartmentEdit() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const existingData = departmentMock.find((item) => item.id === id);

    const defaultValues: Partial<DepartmentFormData> = existingData
        ? {
            name: existingData.name,
            shortCode: existingData.shortCode,
            description: existingData.description,
            status: existingData.status === "Active",
        }
        : {};

    const handleSubmit = (data: DepartmentFormData) => {
        console.log("Updating Department data for id:", id, data);
        navigate("/department");
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold">Edit Department</h1>

            <DepartmentForm
                mode="edit"
                defaultValues={defaultValues}
                onSubmit={handleSubmit}
            />
        </div>
    );
}