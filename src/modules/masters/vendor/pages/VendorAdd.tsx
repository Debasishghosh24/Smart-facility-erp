import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import VendorForm from "../components/VendorForm";
import type { VendorFormData } from "../validation/vendor.schema";

export default function VendorAdd() {
    const navigate = useNavigate();

    const handleSubmit = (data: VendorFormData) => {
        console.log("New Vendor:", data);

        // TODO:
        // API call or mutation will be added here later

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