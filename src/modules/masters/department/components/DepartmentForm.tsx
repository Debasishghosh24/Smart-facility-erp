import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Input from "@/shared/components/input";
import Textarea from "@/shared/components/textarea";
import Switch from "@/shared/components/switch";
import { Button } from "@/component/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/component/ui/card";

import {
    Briefcase,
    Shield,
    X,
    Save,
} from "lucide-react";

import {
    departmentSchema,
    type DepartmentFormData,
} from "../validation/department.schema";

interface DepartmentFormProps {
    mode: "add" | "edit";
    defaultValues?: Partial<DepartmentFormData>;
    onSubmit: (data: DepartmentFormData) => void;
    onCancel?: () => void;
}

export default function DepartmentForm({
    mode,
    defaultValues,
    onSubmit,
    onCancel,
}: DepartmentFormProps) {
    const navigate = useNavigate();
    const handleCancel = onCancel || (() => navigate("/department"));

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
    } = useForm<DepartmentFormData>({
        resolver: zodResolver(departmentSchema),
        defaultValues: {
            name: "",
            shortCode: "",
            description: "",
            status: true,
            ...defaultValues,
        },
    });

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
        >
            {/* ================= General Information ================= */}
            <Card className="border-slate-100 shadow-sm">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100/50">
                        <Briefcase className="h-6 w-6" />
                    </div>
                    <div>
                        <CardTitle className="text-lg font-bold text-slate-800">Department Information</CardTitle>
                        <CardDescription className="text-sm text-slate-500">
                            Enter the details for this department.
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-slate-700">
                                Department Name <span className="text-red-500">*</span>
                            </label>
                            <Input
                                placeholder="Enter department name"
                                className="h-10 border-slate-200 focus-visible:ring-blue-500 placeholder:text-slate-400"
                                {...register("name")}
                                error={errors.name?.message}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-slate-700">
                                Short Code <span className="text-red-500">*</span>
                            </label>
                            <Input
                                placeholder="Enter short code"
                                className="h-10 border-slate-200 focus-visible:ring-blue-500 placeholder:text-slate-400"
                                {...register("shortCode")}
                                error={errors.shortCode?.message}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-700">
                            Description
                        </label>
                        <Textarea
                            placeholder="Enter department description"
                            className="min-h-[100px] border-slate-200 focus-visible:ring-blue-500 placeholder:text-slate-400"
                            {...register("description")}
                            error={errors.description?.message}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* ================= Status Information ================= */}
            <Card className="border-slate-100 shadow-sm">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 border border-amber-100/50">
                        <Shield className="h-6 w-6" />
                    </div>
                    <div>
                        <CardTitle className="text-lg font-bold text-slate-800">Department Status</CardTitle>
                        <CardDescription className="text-sm text-slate-500">
                            Enable or disable this department.
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent className="pt-2">
                    <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 p-5">
                        <div className="space-y-0.5">
                            <h4 className="text-sm font-bold text-slate-800">Active Department</h4>
                            <p className="text-xs text-slate-550">
                                This department will be active and available.
                            </p>
                        </div>

                        <div className="flex items-center gap-2.5">
                            <Switch
                                label="Active"
                                checked={watch("status")}
                                onCheckedChange={(checked) =>
                                    setValue("status", checked)
                                }
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Actions Footer */}
            <div className="flex justify-end gap-3 pt-4">
                <Button
                    type="button"
                    variant="outline"
                    onClick={handleCancel}
                    className="h-10 border-slate-200 text-slate-700 bg-white hover:bg-slate-50"
                >
                    <X className="mr-2 h-4 w-4 text-slate-500" />
                    Cancel
                </Button>

                <Button
                    type="submit"
                    className="h-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                >
                    <Save className="mr-2 h-4 w-4" />
                    {mode === "add" ? "Save Department" : "Update Department"}
                </Button>
            </div>
        </form>
    );
}