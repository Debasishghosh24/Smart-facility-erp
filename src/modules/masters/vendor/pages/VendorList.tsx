import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
    Building2,
    Globe2,
    Plus,
    ShieldCheck,
    ShieldX,
} from "lucide-react";

import { Button } from "@/component/ui/button";
import { Card, CardContent } from "@/component/ui/card";

import VendorTable from "../components/VendorTable";
import { useVendors } from "../context/vendorContext";

export default function VendorList() {
    const navigate = useNavigate();
    const { vendors } = useVendors();

    const totalVendors = vendors.length;

    const activeVendors = vendors.filter(
        (vendor) => vendor.status === "Active"
    ).length;

    const inactiveVendors = vendors.filter(
        (vendor) => vendor.status === "Inactive"
    ).length;

    const totalStates = useMemo(() => {
        return new Set(vendors.map((vendor) => vendor.state)).size;
    }, [vendors]);

    return (
        <div className="space-y-6">

            {/* Header */}

            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">

                <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                        Vendor Management
                    </h1>

                    <p className="text-muted-foreground">
                        Manage all vendors and suppliers across the organization.
                    </p>
                </div>

                <Button
                    onClick={() => navigate("/vendor/add")}
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Vendor
                </Button>

            </div>

            {/* Summary Cards */}

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

                <Card className="transition-all hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex items-center justify-between p-6">

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Total Vendors
                            </p>

                            <h2 className="mt-2 text-3xl font-bold">
                                {totalVendors}
                            </h2>
                        </div>

                        <Building2 className="h-11 w-11 text-blue-500" />

                    </CardContent>
                </Card>

                <Card className="transition-all hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex items-center justify-between p-6">

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Active Vendors
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-green-600">
                                {activeVendors}
                            </h2>
                        </div>

                        <ShieldCheck className="h-11 w-11 text-green-500" />

                    </CardContent>
                </Card>

                <Card className="transition-all hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex items-center justify-between p-6">

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Inactive Vendors
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-red-600">
                                {inactiveVendors}
                            </h2>
                        </div>

                        <ShieldX className="h-11 w-11 text-red-500" />

                    </CardContent>
                </Card>

                <Card className="transition-all hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex items-center justify-between p-6">

                        <div>
                            <p className="text-sm text-muted-foreground">
                                States Covered
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-indigo-600">
                                {totalStates}
                            </h2>
                        </div>

                        <Globe2 className="h-11 w-11 text-indigo-500" />

                    </CardContent>
                </Card>

            </div>

            {/* Vendor Table */}

            <VendorTable />

        </div>
    );
}