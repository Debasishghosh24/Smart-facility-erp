import { Link } from "react-router-dom";
import { Button } from "@/component/ui/button";
import { Plus } from "lucide-react";

import { SiteTable } from "../components/SiteTable";

export default function SiteList() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">
                        Site Management
                    </h1>

                    <p className="text-sm text-muted-foreground">
                        Manage all sites from one place.
                    </p>
                </div>

                <Link to="/site/add">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Site
                    </Button>
                </Link>
            </div>

            {/* Table */}
            <SiteTable />
        </div>
    );
}