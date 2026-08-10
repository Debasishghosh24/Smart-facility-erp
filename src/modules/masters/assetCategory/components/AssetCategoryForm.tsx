import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/component/ui/card";

import { Button } from "@/component/ui/button";

import Input from "@/shared/components/input";
import Textarea from "@/shared/components/textarea";
import Switch from "@/shared/components/switch";

import {
    assetCategorySchema,
    type AssetCategoryFormData,
} from "../validation/assetCategory.schema";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/component/ui/select";

interface AssetCategoryFormProps {
    defaultValues?: Partial<AssetCategoryFormData>;
    onSubmit: (data: AssetCategoryFormData) => void;
    submitLabel?: string;
}

export default function AssetCategoryForm({
    defaultValues,
    onSubmit,
    submitLabel = "Save Category",
}: AssetCategoryFormProps) {
    const navigate = useNavigate();

    const form = useForm<AssetCategoryFormData>({
        resolver: zodResolver(assetCategorySchema),

        defaultValues: {
            categoryCode: `CAT${String(
                Math.floor(Math.random() * 999)
            ).padStart(3, "0")}`,

            categoryName: "",

            description: "",

            assetType: "IT",

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

    const assetType = watch("assetType");
    const status = watch("status");

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto max-w-5xl space-y-6"
        >
            {/* ================================================= */}
            {/* Category Information */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <span>🗂️</span>
                        Category Information
                    </CardTitle>

                    <CardDescription>
                        Basic information about the asset category.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="grid gap-5 md:grid-cols-2">
                        {/* Category Code */}

                        <Input
                            label="Category Code"
                            readOnly
                            className="cursor-not-allowed bg-slate-100 font-semibold"
                            {...register("categoryCode")}
                            error={errors.categoryCode?.message}
                        />

                        {/* Category Name */}

                        <Input
                            label="Category Name"
                            required
                            placeholder="Enter Category Name"
                            {...register("categoryName")}
                            error={errors.categoryName?.message}
                        />
                    </div>

                    {/* Description */}

                    <div className="mt-5">
                        <Textarea
                            label="Description"
                            required
                            placeholder="Describe this asset category..."
                            {...register("description")}
                            error={errors.description?.message}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* Asset Classification */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <span>🏷️</span>
                        Asset Classification
                    </CardTitle>

                    <CardDescription>
                        Define the type of assets that belong to this category.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="grid gap-5 md:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">
                                Asset Type
                                <span className="ml-1 text-red-500">*</span>
                            </label>

                            <Select
                                value={assetType}
                                onValueChange={(value) =>
                                    setValue(
                                        "assetType",
                                        value as AssetCategoryFormData["assetType"],
                                        {
                                            shouldValidate: true,
                                        }
                                    )
                                }
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Asset Type" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="IT">
                                        IT
                                    </SelectItem>

                                    <SelectItem value="Electrical">
                                        Electrical
                                    </SelectItem>

                                    <SelectItem value="Furniture">
                                        Furniture
                                    </SelectItem>

                                    <SelectItem value="Vehicle">
                                        Vehicle
                                    </SelectItem>

                                    <SelectItem value="Other">
                                        Other
                                    </SelectItem>
                                </SelectContent>
                            </Select>

                            {errors.assetType && (
                                <p className="text-sm text-red-500">
                                    {errors.assetType.message}
                                </p>
                            )}
                        </div>

                        {/* Category Preview */}

                        <div className="rounded-xl border bg-slate-50 p-2">
                            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                                Category Preview
                            </p>

                            <div className="mt-3 flex items-center gap-2">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl">
                                    🗂️
                                </div>

                                <div>
                                    <p className="font-semibold">
                                        {watch("categoryName") ||
                                            "Category Name"}
                                    </p>

                                    <p className="text-sm text-muted-foreground">
                                        {assetType}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* Category Status */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <span>⚙️</span>
                        Category Status
                    </CardTitle>

                    <CardDescription>
                        Control whether this category can be used for new assets.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="flex items-center justify-between rounded-xl border bg-slate-50 p-4">
                        <div>
                            <p className="font-medium">
                                Active Category
                            </p>

                            <p className="text-sm text-muted-foreground">
                                {status
                                    ? "This category is available for asset creation."
                                    : "This category is currently inactive."}
                            </p>
                        </div>

                        <Switch
                            label=""
                            checked={status}
                            onCheckedChange={(value) =>
                                setValue("status", value, {
                                    shouldValidate: true,
                                })
                            }
                        />
                    </div>
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* Footer Actions */}
            {/* ================================================= */}

            <div className="flex justify-end gap-3 border-t pt-6">
                <Button
                    type="button"
                    variant="outline"
                    onClick={() =>
                        navigate("/asset-category")
                    }
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