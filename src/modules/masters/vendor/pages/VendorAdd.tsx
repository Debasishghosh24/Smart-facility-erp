import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import VendorForm from "../components/VendorForm";
import type { VendorFormData } from "../validation/vendor.schema";
import { useVendors } from "../context/vendorContext";

export default function VendorAdd() {
    const navigate = useNavigate();
    const { addVendor } = useVendors();

    const handleSubmit = (data: VendorFormData) => {
        addVendor({
            id: `VEN-${Date.now()}`,
            ...data,
            status: data.status ? "Active" : "Inactive",
            createdAt: new Date().toISOString().split("T")[0]
        });

        toast.success("Vendor created successfully.");

        navigate("/vendor");
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Add Vendor
                </h1>

                <p className="text-muted-foreground">
                    Register a new vendor or supplier.
                </p>
            </div>

            <VendorForm
                onSubmit={handleSubmit}
                submitLabel="Save Vendor"
            />
        </div>
    );
}