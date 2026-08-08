import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

import VendorForm from "../components/VendorForm";
import { mockVendors } from "../mock/vendor.mock";

import type { VendorFormData } from "../validation/vendor.schema";

export default function VendorEdit() {
    const { id } = useParams();

    const navigate = useNavigate();

    const vendor = useMemo(
        () => mockVendors.find((item) => item.id === id),
        [id]
    );

    const handleSubmit = (data: VendorFormData) => {
        console.log("Updated Vendor:", data);

        // TODO:
        // Update API Call

        toast.success("Vendor updated successfully.");

        navigate("/vendor");
    };

    if (!vendor) {
        return (
            <div className="rounded-lg border border-red-200 bg-red-50 p-8">
                <h2 className="text-xl font-semibold text-red-600">
                    Vendor Not Found
                </h2>

                <p className="mt-2 text-red-500">
                    The requested vendor does not exist.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}

            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Edit Vendor
                </h1>

                <p className="text-muted-foreground">
                    Update vendor information.
                </p>
            </div>

            <VendorForm
                defaultValues={{
                    vendorCode: vendor.vendorCode,
                    vendorName: vendor.vendorName,
                    companyName: vendor.companyName,
                    gstNumber: vendor.gstNumber,
                    contactPerson: vendor.contactPerson,
                    email: vendor.email,
                    contactNo: vendor.contactNo,
                    address: vendor.address,
                    city: vendor.city,
                    state: vendor.state,
                    pincode: vendor.pincode,
                    status: vendor.status === "Active",
                }}
                onSubmit={handleSubmit}
                submitLabel="Update Vendor"
            />
        </div>
    );
}