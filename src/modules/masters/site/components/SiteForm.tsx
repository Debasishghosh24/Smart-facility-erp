import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/component/ui/button";
import { Input } from "@/component/ui/input";
import { Textarea } from "@/component/ui/textarea";
import { Switch } from "@/component/ui/switch";
import { DepartmentSelect } from "@/shared/components/department-select/DepartmentSelect";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/component/ui/card";

import {
    Building2,
    Phone,
    MapPin,
    Mail,
    Shield,
    X,
    Save,
} from "lucide-react";

import {
    siteSchema,
    type SiteFormData,
} from "../validation/site.schema";

interface SiteFormProps {
    defaultValues?: Partial<SiteFormData>;
    submitLabel?: string;
    onSubmit: (data: SiteFormData) => void;
    onCancel?: () => void;
}

export function SiteForm({
    defaultValues,
    submitLabel = "Save Site",
    onSubmit,
    onCancel,
}: SiteFormProps) {
    const form = useForm<SiteFormData>({
        resolver: zodResolver(siteSchema),
        defaultValues: {
            siteName: "",
            siteCode: "",
            department: "",
            siteHead: "",
            email: "",
            contactNo: "",
            address: "",
            city: "",
            state: "",
            pincode: "",
            status: "Active",
            ...defaultValues,
        },
    });

    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
        >
            {/* ================= General Information ================= */}
            <Card className="border-slate-100 shadow-sm">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100/50">
                        <Building2 className="h-6 w-6" />
                    </div>
                    <div>
                        <CardTitle className="text-lg font-bold text-slate-800">General Information</CardTitle>
                        <CardDescription className="text-sm text-slate-500">
                            Basic information about the site.
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-slate-700">
                                Site Name <span className="text-red-500">*</span>
                            </label>
                            <Input
                                placeholder="Enter site name"
                                className="h-10 border-slate-200 focus-visible:ring-blue-500 placeholder:text-slate-400"
                                {...form.register("siteName")}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-slate-700">
                                Site Code <span className="text-red-500">*</span>
                            </label>
                            <Input
                                placeholder="Enter site code"
                                className="h-10 border-slate-200 focus-visible:ring-blue-500 placeholder:text-slate-400"
                                {...form.register("siteCode")}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-slate-700">
                                Department <span className="text-red-500">*</span>
                            </label>
                            <DepartmentSelect
                                value={form.watch("department")}
                                onValueChange={(value) =>
                                    form.setValue("department", value)
                                }
                                placeholder="Select department"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-slate-700">
                                Site Head <span className="text-red-500">*</span>
                            </label>
                            <Input
                                placeholder="Enter site head name"
                                className="h-10 border-slate-200 focus-visible:ring-blue-500 placeholder:text-slate-400"
                                {...form.register("siteHead")}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* ================= Contact Information ================= */}
            <Card className="border-slate-100 shadow-sm">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100/50">
                        <Phone className="h-6 w-6" />
                    </div>
                    <div>
                        <CardTitle className="text-lg font-bold text-slate-800">Contact Information</CardTitle>
                        <CardDescription className="text-sm text-slate-500">
                            Contact details of the site.
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-slate-700">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                <Input
                                    placeholder="Enter email address"
                                    className="h-10 pl-10 border-slate-200 focus-visible:ring-blue-500 placeholder:text-slate-400"
                                    {...form.register("email")}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-slate-700">
                                Contact Number
                            </label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                <Input
                                    placeholder="Enter contact number"
                                    className="h-10 pl-10 border-slate-200 focus-visible:ring-blue-500 placeholder:text-slate-400"
                                    {...form.register("contactNo")}
                                />
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* ================= Address Information ================= */}
            <Card className="border-slate-100 shadow-sm">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-605 border border-purple-100/50">
                        <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                        <CardTitle className="text-lg font-bold text-slate-800">Address Information</CardTitle>
                        <CardDescription className="text-sm text-slate-500">
                            Enter the complete address of the site.
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent className="space-y-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-700">
                            Address <span className="text-red-500">*</span>
                        </label>
                        <Textarea
                            placeholder="Enter complete address"
                            className="min-h-[100px] border-slate-200 focus-visible:ring-blue-500 placeholder:text-slate-400"
                            {...form.register("address")}
                        />
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-slate-700">
                                City <span className="text-red-500">*</span>
                            </label>
                            <Input
                                placeholder="Enter city"
                                className="h-10 border-slate-200 focus-visible:ring-blue-500 placeholder:text-slate-400"
                                {...form.register("city")}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-slate-700">
                                State <span className="text-red-500">*</span>
                            </label>
                            <Input
                                placeholder="Enter state"
                                className="h-10 border-slate-200 focus-visible:ring-blue-500 placeholder:text-slate-400"
                                {...form.register("state")}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-slate-700">
                                Pincode <span className="text-red-500">*</span>
                            </label>
                            <Input
                                placeholder="Enter pincode"
                                className="h-10 border-slate-200 focus-visible:ring-blue-500 placeholder:text-slate-400"
                                {...form.register("pincode")}
                            />
                        </div>
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
                        <CardTitle className="text-lg font-bold text-slate-800">Site Status</CardTitle>
                        <CardDescription className="text-sm text-slate-500">
                            Enable or disable this site.
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent className="pt-2">
                    <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 p-5">
                        <div className="space-y-0.5">
                            <h4 className="text-sm font-bold text-slate-800">Active Site</h4>
                            <p className="text-xs text-slate-550">
                                This site will be available throughout the system.
                            </p>
                        </div>

                        <div className="flex items-center gap-2.5">
                            <Switch
                                id="active-toggle"
                                checked={form.watch("status") === "Active"}
                                onCheckedChange={(checked) =>
                                    form.setValue("status", checked ? "Active" : "Inactive")
                                }
                            />
                            <label htmlFor="active-toggle" className="text-sm font-semibold text-slate-650 cursor-pointer">
                                Active
                            </label>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Actions Footer */}
            <div className="flex justify-end gap-3 pt-4">
                <Button
                    type="button"
                    variant="outline"
                    onClick={onCancel}
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
                    {submitLabel}
                </Button>
            </div>
        </form>
    );
}