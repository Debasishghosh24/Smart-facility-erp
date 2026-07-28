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
} from "lucide-react";

import {
    siteSchema,
    type SiteFormData,
} from "../validation/site.schema";

interface SiteFormProps {
    defaultValues?: Partial<SiteFormData>;
    submitLabel?: string;
    onSubmit: (data: SiteFormData) => void;
}

export function SiteForm({
    defaultValues,
    submitLabel = "Save Site",
    onSubmit,
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

            <Card>
                <CardHeader>
                    <CardTitle>General Information</CardTitle>
                    <Building2 className="h-5 w-5 text-primary" />
                    <CardDescription>
                        Basic information about the site.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">

                        <Input
                            placeholder="Site Name"
                            {...form.register("siteName")}
                        />

                        <Input
                            placeholder="Site Code"
                            {...form.register("siteCode")}
                        />

                        <DepartmentSelect
                            value={form.watch("department")}
                            onValueChange={(value) =>
                                form.setValue("department", value)
                            }
                        />

                        <Input
                            placeholder="Site Head"
                            {...form.register("siteHead")}
                        />

                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <Phone className="h-5 w-5 text-primary" />
                    <CardDescription>
                        Contact details of the site.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <Input
                            placeholder="Email Address"
                            {...form.register("email")}
                        />

                        <Input
                            placeholder="Contact Number"
                            {...form.register("contactNo")}
                        />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Address Information</CardTitle>
                    <MapPin className="h-5 w-5 text-primary" />
                    <CardDescription>
                        Enter the complete address of the site.
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                    <Textarea
                        placeholder="Address"
                        {...form.register("address")}
                    />

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <Input
                            placeholder="City"
                            {...form.register("city")}
                        />

                        <Input
                            placeholder="State"
                            {...form.register("state")}
                        />

                        <Input
                            placeholder="Pincode"
                            {...form.register("pincode")}
                        />
                    </div>
                </CardContent>
            </Card>



            <Card>


                <CardContent className="flex items-center justify-between">
                    <div>
                        <h4 className="font-medium">Site Status</h4>
                        <p className="text-sm text-muted-foreground">
                            Enable to activate, disable to deactivate.
                        </p>
                    </div>

                    <Switch
                        checked={form.watch("status") === "Active"}
                        onCheckedChange={(checked) =>
                            form.setValue("status", checked ? "Active" : "Inactive")
                        }
                    />
                </CardContent>
            </Card>



            <div className="flex justify-end gap-3 border-t pt-6">
                <Button
                    type="button"
                    variant="outline"
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