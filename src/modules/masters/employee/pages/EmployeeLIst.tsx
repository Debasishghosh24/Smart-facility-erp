import { Plus, Users, UserCheck, Briefcase, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/component/ui/button";
import {
    Card,
    CardContent,
} from "@/component/ui/card";

import EmployeeTable from "../components/EmployeeTable";
import { useEmployees } from "../context/employeeContext";

export default function EmployeeList() {
    const { employees } = useEmployees();
    const totalEmployees = employees.length;

    const activeEmployees = employees.filter(
        (employee) => employee.status === "Active"
    ).length;

    const permanentEmployees = employees.filter(
        (employee) => employee.employmentType === "Permanent"
    ).length;

    const interns = employees.filter(
        (employee) => employee.employmentType === "Intern"
    ).length;

    return (
        <div className="space-y-6">

            {/* Header */}

            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">
                        Employee Management
                    </h1>

                    <p className="text-muted-foreground">
                        Manage all employees from one place.
                    </p>
                </div>

                <Link to="/employee/add">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Employee
                    </Button>
                </Link>
            </div>

            {/* Summary Cards */}

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

                <Card>
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Total Employees
                            </p>

                            <h2 className="mt-2 text-3xl font-bold">
                                {totalEmployees}
                            </h2>
                        </div>

                        <Users className="h-10 w-10 text-blue-500" />
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Active
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-green-600">
                                {activeEmployees}
                            </h2>
                        </div>

                        <UserCheck className="h-10 w-10 text-green-500" />
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Permanent
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-indigo-600">
                                {permanentEmployees}
                            </h2>
                        </div>

                        <Briefcase className="h-10 w-10 text-indigo-500" />
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Interns
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-orange-600">
                                {interns}
                            </h2>
                        </div>

                        <GraduationCap className="h-10 w-10 text-orange-500" />
                    </CardContent>
                </Card>

            </div>

            {/* Employee Table */}

            <EmployeeTable />

        </div>
    );
}