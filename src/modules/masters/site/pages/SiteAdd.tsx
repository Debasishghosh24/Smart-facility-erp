import { useNavigate } from "react-router-dom";

import { toast } from "sonner";

import { SiteForm } from "../components/SiteForm";
import type { SiteFormData } from "../validation/site.schema";

export default function SiteAdd() {
    const navigate = useNavigate();

    const handleSubmit = (data: SiteFormData) => {
        console.log("Site Data :", data);

        toast.success("Site created successfully.");

        navigate("/masters/site");
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight">
                    Add New Site
                </h1>

                <p className="text-muted-foreground">
                    Create a new site for your organization.
                </p>
            </div>

            {/* Form */}
            <SiteForm
                onSubmit={handleSubmit}
            />
        </div>
    );
}