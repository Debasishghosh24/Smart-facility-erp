import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

import { mockVendors } from "../mock/vendor.mock";
import type { Vendor } from "../types/vendor.types";

interface VendorContextType {
    vendors: Vendor[];
    addVendor: (item: Vendor) => void;
    updateVendor: (id: string, updatedItem: Partial<Vendor>) => void;
    deleteVendor: (id: string) => void;
}

const VendorContext = createContext<VendorContextType | undefined>(undefined);

interface VendorProviderProps {
    children: ReactNode;
}

export function VendorProvider({ children }: VendorProviderProps) {
    const [vendors, setVendors] = useState<Vendor[]>(() => {
        const saved = localStorage.getItem("vendors");
        if (saved) return JSON.parse(saved);
        return mockVendors;
    });

    useEffect(() => {
        localStorage.setItem("vendors", JSON.stringify(vendors));
    }, [vendors]);

    const addVendor = (item: Vendor) => {
        setVendors((prev) => [...prev, item]);
    };

    const updateVendor = (id: string, updatedItem: Partial<Vendor>) => {
        setVendors((prev) =>
            prev.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
        );
    };

    const deleteVendor = (id: string) => {
        setVendors((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <VendorContext.Provider
            value={{
                vendors,
                addVendor,
                updateVendor,
                deleteVendor,
            }}
        >
            {children}
        </VendorContext.Provider>
    );
}

export function useVendors() {
    const context = useContext(VendorContext);
    if (!context) {
        throw new Error("useVendors must be used inside VendorProvider");
    }
    return context;
}
