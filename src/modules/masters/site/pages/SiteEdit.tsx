import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

import { SiteForm } from "../components/SiteForm";
import { mockSites } from "../mock/site.mock";
import type { SiteFormData } from "../validation/site.schema";

export default function SiteEdit() {
    const { id } = useParams();
    const navigate = useNavigate();

    const site = useMemo(
        () => mockSites.find((item) => item.id === id),
        [id]
    );

    const handleSubmit = (data: SiteFormData) => {
        console.log("Updated Site:", data);

        toast.success("Site updated successfully.");

        navigate("/masters/site");
    };

    if (!site) {
        return (
            <div className="rounded-lg border border-red-200 bg-red-50 p-6">
                <h2 className="text-lg font-semibold text-red-600">
                    Site Not Found
                </h2>

                <p className="mt-2 text-sm text-red-500">
                    The requested site does not exist.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight">
                    Edit Site
                </h1>

                <p className="text-muted-foreground">
                    Update site information.
                </p>
            </div>

            {/* Form */}
            <SiteForm
                defaultValues={{
                    siteName: site.siteName,
                    siteCode: site.siteCode,
                    department: site.department,
                    siteHead: site.siteHead,
                    email: site.email,
                    contactNo: site.contactNo,
                    address: site.address,
                    city: site.city,
                    state: site.state,
                    status: site.status,
                }}
                submitLabel="Update Site"
                onSubmit={handleSubmit}
            />
        </div>
    );
}