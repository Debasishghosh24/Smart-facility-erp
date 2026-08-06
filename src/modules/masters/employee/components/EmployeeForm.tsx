import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { Button } from "@/component/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/component/ui/card";
import Input from "@/shared/components/input";
import Switch from "@/shared/components/switch";
import { DepartmentSelect } from "@/shared/components/department-select/DepartmentSelect";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/component/ui/select";

import {
    employeeSchema,
    type EmployeeFormData,
} from "../validation/employee.schema";
import SiteSelect from "@/shared/components/siteSelect";

interface EmployeeFormProps {
    defaultValues?: Partial<EmployeeFormData>;
    onSubmit: (data: EmployeeFormData) => void;
    submitLabel?: string;
}

export default function EmployeeForm({
    defaultValues,
    onSubmit,
    submitLabel = "Save Employee",
}: EmployeeFormProps) {
    const navigate = useNavigate();

    const form = useForm<EmployeeFormData>({
        resolver: zodResolver(employeeSchema),
        defaultValues: {
            employeeId: `EMP${String(
                Math.floor(Math.random() * 9999)
            ).padStart(4, "0")}`,
            firstName: "",
            lastName: "",
            department: "",
            site: "",
            designation: "",
            joiningDate: "",
            employmentType: "Permanent",
            reportingManager: "",
            email: "",
            contactNo: "",
            status: true,
            ...defaultValues,
        },
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
    } = form;

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 max-w-5xl mx-auto"
        >
            {/* Personal Information */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <span>👤</span> Personal Information
                    </CardTitle>
                    <CardDescription>
                        Basic contact and personal details of the employee.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                        <Input
                            label="First Name"
                            required
                            placeholder="Enter First Name"
                            {...register("firstName")}
                            error={errors.firstName?.message}
                        />
                        <Input
                            label="Last Name"
                            required
                            placeholder="Enter Last Name"
                            {...register("lastName")}
                            error={errors.lastName?.message}
                        />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        <Input
                            label="Email Address"
                            required
                            type="email"
                            placeholder="example@domain.com"
                            {...register("email")}
                            error={errors.email?.message}
                        />
                        <Input
                            label="Contact Number"
                            required
                            placeholder="9876543210"
                            {...register("contactNo")}
                            error={errors.contactNo?.message}
                        />
                    </div>
                </CardContent>
            </Card>



            {/* Employment Details */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <span>💼</span> Employment Details
                    </CardTitle>
                    <CardDescription>
                        Job role, department, location and status details.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-3">
                        <Input
                            label="Employee ID"
                            readOnly
                            {...register("employeeId")}
                            error={errors.employeeId?.message}
                        />

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Department <span className="text-red-500">*</span></label>
                            <DepartmentSelect
                                value={watch("department")}
                                onValueChange={(value) => setValue("department", value)}
                            />
                            {errors.department && (
                                <p className="text-sm text-red-500">{errors.department.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">
                                Site
                                <span className="text-red-500"> *</span>
                            </label>

                            <SiteSelect
                                value={watch("site")}
                                onValueChange={(value) =>
                                    setValue("site", value)
                                }
                            />

                            {errors.site && (
                                <p className="text-sm text-red-500">
                                    {errors.site.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        <Input
                            label="Designation"
                            required
                            placeholder="Software Engineer"
                            {...register("designation")}
                            error={errors.designation?.message}
                        />

                        <Input
                            label="Joining Date"
                            required
                            type="date"
                            {...register("joiningDate")}
                            error={errors.joiningDate?.message}
                        />

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Employment Type <span className="text-red-500">*</span></label>
                            <Select
                                value={watch("employmentType")}
                                onValueChange={(value: "Permanent" | "Contract" | "Intern") =>
                                    setValue("employmentType", value)
                                }
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Permanent">Permanent</SelectItem>
                                    <SelectItem value="Contract">Contract</SelectItem>
                                    <SelectItem value="Intern">Intern</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.employmentType && (
                                <p className="text-sm text-red-500">{errors.employmentType.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <Input
                            label="Reporting Manager"
                            required
                            placeholder="Enter Manager's Name"
                            {...register("reportingManager")}
                            error={errors.reportingManager?.message}
                        />

                        <div className="flex items-end pb-2">
                            <Switch
                                label="Active Status"
                                checked={watch("status")}
                                onCheckedChange={(value) => setValue("status", value)}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex justify-end gap-3 max-w-5xl mx-auto">
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/employee")}
                >
                    Cancel
                </Button>
                <Button type="submit">
                    {submitLabel}
                </Button>
            </div>
        </form>
    );
}