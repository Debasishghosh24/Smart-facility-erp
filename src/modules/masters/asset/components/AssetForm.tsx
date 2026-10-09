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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/component/ui/select";

import {
    assetSchema,
    type AssetFormData,
} from "../validation/asset.schema";

import { mockAssetCategories } from "@/modules/masters/assetCategory/mock/assetCategory.mock";
import { mockVendors } from "@/modules/masters/vendor/mock/vendor.mock";
import { departmentMock as mockDepartments } from "@/modules/masters/department/mock/department.mock";
import { mockSites } from "@/modules/masters/site/mock/site.mock";

interface AssetFormProps {
    defaultValues?: Partial<AssetFormData>;
    onSubmit: (data: AssetFormData) => void;
    submitLabel?: string;
}

export default function AssetForm({
    defaultValues,
    onSubmit,
    submitLabel = "Save Asset",
}: AssetFormProps) {
    const navigate = useNavigate();

    const form = useForm<AssetFormData>({
        resolver: zodResolver(assetSchema),

        defaultValues: {
            assetCode: `AST${String(
                Math.floor(Math.random() * 9999)
            ).padStart(4, "0")}`,

            assetName: "",
            category: "",
            assetType: "",

            serialNumber: "",
            modelNumber: "",
            manufacturer: "",

            vendor: "",
            department: "",
            site: "",

            purchaseDate: "",
            purchaseCost: 0,
            warrantyExpiry: "",

            status: "Available",

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

    const selectedCategory = watch("category");
    const selectedVendor = watch("vendor");
    const selectedDepartment = watch("department");
    const selectedSite = watch("site");
    const selectedStatus = watch("status");

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto max-w-6xl space-y-6"
        >
            {/* ================================================= */}
            {/* Basic Asset Information */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <span>💻</span>
                        Basic Asset Information
                    </CardTitle>

                    <CardDescription>
                        Enter the basic identification and classification
                        details of the asset.
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-5">
                    <div className="grid gap-5 md:grid-cols-2">
                        <Input
                            label="Asset Code"
                            readOnly
                            className="cursor-not-allowed bg-slate-100 font-semibold"
                            {...register("assetCode")}
                            error={errors.assetCode?.message}
                        />

                        <Input
                            label="Asset Name"
                            required
                            placeholder="e.g. Dell Latitude 5440"
                            {...register("assetName")}
                            error={errors.assetName?.message}
                        />
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                        {/* Category */}

                        <div className="space-y-2">
                            <label className="text-sm font-medium">
                                Asset Category
                                <span className="ml-1 text-red-500">*</span>
                            </label>

                            <Select
                                value={selectedCategory}
                                onValueChange={(value) => {
                                    setValue("category", value, {
                                        shouldValidate: true,
                                    });

                                    const category =
                                        mockAssetCategories.find(
                                            (item) => item.categoryName === value
                                        );

                                    if (category) {
                                        setValue(
                                            "assetType",
                                            category.assetType,
                                            {
                                                shouldValidate: true,
                                            }
                                        );
                                    }
                                }}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>

                                <SelectContent>
                                    {mockAssetCategories
                                        .filter(
                                            (category) =>
                                                category.status === "Active"
                                        )
                                        .map((category) => (
                                            <SelectItem
                                                key={category.id}
                                                value={category.categoryName}
                                            >
                                                {category.categoryName}
                                            </SelectItem>
                                        ))}
                                </SelectContent>
                            </Select>

                            {errors.category && (
                                <p className="text-sm text-red-500">
                                    {errors.category.message}
                                </p>
                            )}
                        </div>

                        {/* Asset Type */}

                        <div className="space-y-2">
                            <label className="text-sm font-medium">
                                Asset Type
                                <span className="ml-1 text-red-500">*</span>
                            </label>

                            <Select
                                value={watch("assetType")}
                                onValueChange={(value) =>
                                    setValue(
                                        "assetType",
                                        value,
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
                    </div>
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* Technical Information */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <span>🔧</span>
                        Technical Information
                    </CardTitle>

                    <CardDescription>
                        Enter the technical identification details of
                        the asset.
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-5">
                    <div className="grid gap-5 md:grid-cols-3">
                        <Input
                            label="Serial Number"
                            required
                            placeholder="Enter Serial Number"
                            {...register("serialNumber")}
                            error={errors.serialNumber?.message}
                        />

                        <Input
                            label="Model Number"
                            required
                            placeholder="Enter Model Number"
                            {...register("modelNumber")}
                            error={errors.modelNumber?.message}
                        />

                        <Input
                            label="Manufacturer"
                            required
                            placeholder="e.g. Dell"
                            {...register("manufacturer")}
                            error={errors.manufacturer?.message}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* Ownership & Location */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <span>🏢</span>
                        Ownership & Location
                    </CardTitle>

                    <CardDescription>
                        Connect this asset with the responsible vendor,
                        department and site.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="grid gap-5 md:grid-cols-3">
                        {/* Vendor */}

                        <div className="space-y-2">
                            <label className="text-sm font-medium">
                                Vendor
                                <span className="ml-1 text-red-500">*</span>
                            </label>

                            <Select
                                value={selectedVendor}
                                onValueChange={(value) =>
                                    setValue("vendor", value, {
                                        shouldValidate: true,
                                    })
                                }
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Vendor" />
                                </SelectTrigger>

                                <SelectContent>
                                    {mockVendors
                                        .filter(
                                            (vendor) =>
                                                vendor.status === "Active"
                                        )
                                        .map((vendor) => (
                                            <SelectItem
                                                key={vendor.id}
                                                value={vendor.vendorName}
                                            >
                                                {vendor.vendorName}
                                            </SelectItem>
                                        ))}
                                </SelectContent>
                            </Select>

                            {errors.vendor && (
                                <p className="text-sm text-red-500">
                                    {errors.vendor.message}
                                </p>
                            )}
                        </div>

                        {/* Department */}

                        <div className="space-y-2">
                            <label className="text-sm font-medium">
                                Department
                                <span className="ml-1 text-red-500">*</span>
                            </label>

                            <Select
                                value={selectedDepartment}
                                onValueChange={(value) =>
                                    setValue("department", value, {
                                        shouldValidate: true,
                                    })
                                }
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Department" />
                                </SelectTrigger>

                                <SelectContent>
                                    {mockDepartments
                                        .filter(
                                            (department) =>
                                                department.status === "Active"
                                        )
                                        .map((department) => (
                                            <SelectItem
                                                key={department.id}
                                                value={department.name}
                                            >
                                                {department.name}
                                            </SelectItem>
                                        ))}
                                </SelectContent>
                            </Select>

                            {errors.department && (
                                <p className="text-sm text-red-500">
                                    {errors.department.message}
                                </p>
                            )}
                        </div>

                        {/* Site */}

                        <div className="space-y-2">
                            <label className="text-sm font-medium">
                                Site
                                <span className="ml-1 text-red-500">*</span>
                            </label>

                            <Select
                                value={selectedSite}
                                onValueChange={(value) =>
                                    setValue("site", value, {
                                        shouldValidate: true,
                                    })
                                }
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Site" />
                                </SelectTrigger>

                                <SelectContent>
                                    {mockSites
                                        .filter(
                                            (site) =>
                                                site.status === "Active"
                                        )
                                        .map((site) => (
                                            <SelectItem
                                                key={site.id}
                                                value={site.siteName}
                                            >
                                                {site.siteName}
                                            </SelectItem>
                                        ))}
                                </SelectContent>
                            </Select>

                            {errors.site && (
                                <p className="text-sm text-red-500">
                                    {errors.site.message}
                                </p>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* Purchase Information */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <span>💰</span>
                        Purchase Information
                    </CardTitle>

                    <CardDescription>
                        Record purchase cost, purchase date and warranty
                        information.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="grid gap-5 md:grid-cols-3">
                        <Input
                            label="Purchase Date"
                            type="date"
                            required
                            {...register("purchaseDate")}
                            error={errors.purchaseDate?.message}
                        />

                        <Input
                            label="Purchase Cost"
                            type="number"
                            required
                            placeholder="Enter purchase cost"
                            {...register("purchaseCost", {
                                valueAsNumber: true,
                            })}
                            error={errors.purchaseCost?.message}
                        />

                        <Input
                            label="Warranty Expiry"
                            type="date"
                            required
                            {...register("warrantyExpiry")}
                            error={errors.warrantyExpiry?.message}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* Asset Status */}
            {/* ================================================= */}

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <span>⚙️</span>
                        Asset Status
                    </CardTitle>

                    <CardDescription>
                        Define the current operational status of this
                        asset.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="grid gap-5 md:grid-cols-2">
                        {/* Status */}

                        <div className="space-y-2">
                            <label className="text-sm font-medium">
                                Current Status
                                <span className="ml-1 text-red-500">*</span>
                            </label>

                            <Select
                                value={selectedStatus}
                                onValueChange={(value) =>
                                    setValue(
                                        "status",
                                        value as AssetFormData["status"],
                                        {
                                            shouldValidate: true,
                                        }
                                    )
                                }
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Status" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="Available">
                                        Available
                                    </SelectItem>

                                    <SelectItem value="Assigned">
                                        Assigned
                                    </SelectItem>

                                    <SelectItem value="Under Maintenance">
                                        Under Maintenance
                                    </SelectItem>

                                    <SelectItem value="Retired">
                                        Retired
                                    </SelectItem>

                                    <SelectItem value="Lost">
                                        Lost
                                    </SelectItem>
                                </SelectContent>
                            </Select>

                            {errors.status && (
                                <p className="text-sm text-red-500">
                                    {errors.status.message}
                                </p>
                            )}
                        </div>

                        {/* Live Preview */}

                        <div className="rounded-xl border bg-slate-50 p-4">
                            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                                Asset Preview
                            </p>

                            <div className="mt-3 flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl">
                                    💻
                                </div>

                                <div className="min-w-0">
                                    <p className="truncate font-semibold">
                                        {watch("assetName") ||
                                            "Asset Name"}
                                    </p>

                                    <p className="text-sm text-muted-foreground">
                                        {watch("assetCode") ||
                                            "AST0000"}
                                    </p>

                                    <p className="mt-1 text-xs text-muted-foreground">
                                        {selectedCategory ||
                                            "No Category"}{" "}
                                        •{" "}
                                        {selectedStatus}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* ================================================= */}
            {/* Footer */}
            {/* ================================================= */}

            <div className="flex justify-end gap-3 border-t pt-6">
                <Button
                    type="button"
                    variant="outline"
                    onClick={() =>
                        navigate("/asset")
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