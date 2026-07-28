import { useMemo } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/component/ui/button";

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
        navigate("/site");
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
            {/* Breadcrumbs & Page Header Row */}
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 mb-1">
                        <span>Masters</span>
                        <span>&gt;</span>
                        <span>Site</span>
                        <span>&gt;</span>
                        <span className="text-slate-600 font-semibold">Edit Site</span>
                    </div>

                    <h1 className="text-2xl font-bold tracking-tight text-slate-800">
                        Edit Site
                    </h1>

                    <p className="text-sm text-slate-500">
                        Update site information.
                    </p>
                </div>

                <Link to="/site">
                    <Button variant="outline" className="border-slate-200 text-slate-700 bg-white hover:bg-slate-50">
                        <ArrowLeft className="mr-2 h-4 w-4 text-slate-500" />
                        Back to Sites
                    </Button>
                </Link>
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
                    pincode: site.pincode,
                    status: site.status,
                }}
                submitLabel="Update Site"
                onSubmit={handleSubmit}
                onCancel={() => navigate("/site")}
            />
        </div>
    );
}