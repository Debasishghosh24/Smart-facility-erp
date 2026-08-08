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
    vendorSchema,
    type VendorFormData,
} from "../validation/vendor.schema";

interface VendorFormProps {
    defaultValues?: Partial<VendorFormData>;
    onSubmit: (data: VendorFormData) => void;
    submitLabel?: string;
}

export default function VendorForm({
    defaultValues,
    onSubmit,
    submitLabel = "Save Vendor",
}: VendorFormProps) {
    const navigate = useNavigate();

    const form = useForm<VendorFormData>({
        resolver: zodResolver(vendorSchema),
        defaultValues: {
            vendorCode: `VND${String(
                Math.floor(Math.random() * 9999)
            ).padStart(4, "0")}`,
            vendorName: "",
            companyName: "",
            gstNumber: "",
            contactPerson: "",
            email: "",
            contactNo: "",
            address: "",
            city: "",
            state: "",
            pincode: "",
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
            {/* Company Information */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <span>🏢</span> Company Information
                    </CardTitle>
                    <CardDescription>
                        Basic vendor and company details.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                        <Input
                            label="Vendor Code"
                            readOnly
                            className="bg-slate-100"
                            {...register("vendorCode")}
                            error={errors.vendorCode?.message}
                        />
                        <Input
                            label="Vendor Name"
                            required
                            placeholder="Enter Vendor Name"
                            {...register("vendorName")}
                            error={errors.vendorName?.message}
                        />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        <Input
                            label="Company Name"
                            required
                            placeholder="Enter Company Name"
                            {...register("companyName")}
                            error={errors.companyName?.message}
                        />
                        <Input
                            label="GST Number"
                            required
                            placeholder="19ABCDE1234F1Z5"
                            {...register("gstNumber")}
                            error={errors.gstNumber?.message}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Contact & Address Information */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <span>📞</span> Contact & Address Details
                    </CardTitle>
                    <CardDescription>
                        Contact person information, communication address and status.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-3">
                        <Input
                            label="Contact Person"
                            required
                            placeholder="Enter Contact Person Name"
                            {...register("contactPerson")}
                            error={errors.contactPerson?.message}
                        />
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

                    <Textarea
                        label="Address"
                        required
                        placeholder="Enter full address"
                        {...register("address")}
                        error={errors.address?.message}
                    />

                    <div className="grid gap-4 md:grid-cols-3">
                        <Input
                            label="City"
                            required
                            placeholder="Enter City"
                            {...register("city")}
                            error={errors.city?.message}
                        />
                        <Input
                            label="State"
                            required
                            placeholder="Enter State"
                            {...register("state")}
                            error={errors.state?.message}
                        />
                        <Input
                            label="Pincode"
                            required
                            placeholder="Enter Pincode"
                            {...register("pincode")}
                            error={errors.pincode?.message}
                        />
                    </div>

                    <div className="flex items-center pt-2">
                        <Switch
                            label="Active Status"
                            checked={watch("status")}
                            onCheckedChange={(value) => setValue("status", value)}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex justify-end gap-3">
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/vendor")}
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