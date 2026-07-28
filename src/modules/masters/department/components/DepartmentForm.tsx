import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Input from "@/shared/components/input";
import Textarea from "@/shared/components/textarea";
import Switch from "@/shared/components/switch";

import {
    departmentSchema,
    type DepartmentFormData,
} from "../validation/department.schema";

interface DepartmentFormProps {
    mode: "add" | "edit";
    defaultValues?: Partial<DepartmentFormData>;
    onSubmit: (data: DepartmentFormData) => void;
}

export default function DepartmentForm({
    mode,
    defaultValues,
    onSubmit,
}: DepartmentFormProps) {
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
            <Input
                label="Department Name"
                placeholder="Enter Department name"
                required
                {...register("name")}
                error={errors.name?.message}
            />

            <Input
                label="Short Code"
                placeholder="Enter short code"
                required
                {...register("shortCode")}
                error={errors.shortCode?.message}
            />

            <Textarea
                label="Description"
                placeholder="Enter description"
                {...register("description")}
                error={errors.description?.message}
            />

            <Switch
                label="Status"
                checked={watch("status")}
                onCheckedChange={(value) =>
                    setValue("status", value)
                }
            />

            <div className="flex justify-end gap-3">
                <button
                    type="button"
                    className="rounded-lg border px-4 py-2"
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white"
                >
                    {mode === "add" ? "Save" : "Update"}
                </button>
            </div>
        </form>
    );
}