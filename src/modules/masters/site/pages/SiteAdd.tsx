import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/component/ui/button";

import { SiteForm } from "../components/SiteForm";
import type { SiteFormData } from "../validation/site.schema";
import { useSites } from "../context/siteContext";

export default function SiteAdd() {
    const navigate = useNavigate();
    const { addSite } = useSites();

    const handleSubmit = (data: SiteFormData) => {
        addSite({
            id: `SIT-${Date.now()}`,
            ...data,
            createdAt: new Date().toISOString().split("T")[0]
        });
        toast.success("Site created successfully.");
        navigate("/site");
    };

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
                        <span className="text-slate-600 font-semibold">Add New Site</span>
                    </div>

                    <h1 className="text-2xl font-bold tracking-tight text-slate-800">
                        Add New Site
                    </h1>

                    <p className="text-sm text-slate-500">
                        Create a new site for your organization.
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
                onSubmit={handleSubmit}
                onCancel={() => navigate("/site")}
            />
        </div>
    );
}