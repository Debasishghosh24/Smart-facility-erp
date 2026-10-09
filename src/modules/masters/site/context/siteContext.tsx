import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

import { mockSites } from "../mock/site.mock";
import type { Site } from "../types/site.types";

interface SiteContextType {
    sites: Site[];
    addSite: (item: Site) => void;
    updateSite: (id: string, updatedItem: Partial<Site>) => void;
    deleteSite: (id: string) => void;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

interface SiteProviderProps {
    children: ReactNode;
}

export function SiteProvider({ children }: SiteProviderProps) {
    const [sites, setSites] = useState<Site[]>(() => {
        const saved = localStorage.getItem("sites");
        if (saved) return JSON.parse(saved);
        return mockSites;
    });

    useEffect(() => {
        localStorage.setItem("sites", JSON.stringify(sites));
    }, [sites]);

    const addSite = (item: Site) => {
        setSites((prev) => [...prev, item]);
    };

    const updateSite = (id: string, updatedItem: Partial<Site>) => {
        setSites((prev) =>
            prev.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
        );
    };

    const deleteSite = (id: string) => {
        setSites((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <SiteContext.Provider
            value={{
                sites,
                addSite,
                updateSite,
                deleteSite,
            }}
        >
            {children}
        </SiteContext.Provider>
    );
}

export function useSites() {
    const context = useContext(SiteContext);
    if (!context) {
        throw new Error("useSites must be used inside SiteProvider");
    }
    return context;
}
