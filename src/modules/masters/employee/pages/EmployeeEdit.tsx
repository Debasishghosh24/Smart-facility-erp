import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

import EmployeeForm from "../components/EmployeeForm";

import { useEmployees } from "../context/employeeContext";

import type { EmployeeFormData } from "../validation/employee.schema";

export default function EmployeeEdit() {
    const { id } = useParams();

    const navigate = useNavigate();
    const { employees, updateEmployee } = useEmployees();

    const employee = useMemo(
        () => employees.find((item) => item.id === id),
        [id, employees]
    );

    const handleSubmit = (data: EmployeeFormData) => {
        if (id) {
            updateEmployee(id, {
                ...data,
                status: data.status ? "Active" : "Inactive"
            });
            toast.success("Employee updated successfully.");
            navigate("/employee");
        }
    };

    if (!employee) {
        return (
            <div className="rounded-lg border border-red-300 bg-red-50 p-8">
                <h2 className="text-xl font-semibold text-red-600">
                    Employee Not Found
                </h2>

                <p className="mt-2 text-red-500">
                    The employee you are looking for does not exist.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Edit Employee
                </h1>

                <p className="text-muted-foreground">
                    Update employee information.
                </p>
            </div>

            <EmployeeForm
                defaultValues={{
                    employeeId: employee.employeeId,
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    department: employee.department,
                    site: employee.site,
                    designation: employee.designation,
                    email: employee.email,
                    contactNo: employee.contactNo,
                    joiningDate: employee.joiningDate,
                    employmentType: employee.employmentType,
                    reportingManager: employee.reportingManager,
                    status: employee.status === "Active",
                }}
                onSubmit={handleSubmit}
                submitLabel="Update Employee"
            />
        </div>
    );
}