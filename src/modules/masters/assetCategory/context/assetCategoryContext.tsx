import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

import { mockAssetCategories } from "../mock/assetCategory.mock";
import type { AssetCategory } from "../types/assetCategory.types";

interface AssetCategoryContextType {
    assetCategories: AssetCategory[];
    addAssetCategory: (item: AssetCategory) => void;
    updateAssetCategory: (id: string, updatedItem: Partial<AssetCategory>) => void;
    deleteAssetCategory: (id: string) => void;
}

const AssetCategoryContext = createContext<AssetCategoryContextType | undefined>(undefined);

interface AssetCategoryProviderProps {
    children: ReactNode;
}

export function AssetCategoryProvider({ children }: AssetCategoryProviderProps) {
    const [assetCategories, setAssetCategories] = useState<AssetCategory[]>(() => {
        const saved = localStorage.getItem("assetCategories");
        if (saved) return JSON.parse(saved);
        return mockAssetCategories;
    });

    useEffect(() => {
        localStorage.setItem("assetCategories", JSON.stringify(assetCategories));
    }, [assetCategories]);

    const addAssetCategory = (item: AssetCategory) => {
        setAssetCategories((prev) => [...prev, item]);
    };

    const updateAssetCategory = (id: string, updatedItem: Partial<AssetCategory>) => {
        setAssetCategories((prev) =>
            prev.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
        );
    };

    const deleteAssetCategory = (id: string) => {
        setAssetCategories((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <AssetCategoryContext.Provider
            value={{
                assetCategories,
                addAssetCategory,
                updateAssetCategory,
                deleteAssetCategory,
            }}
        >
            {children}
        </AssetCategoryContext.Provider>
    );
}

export function useAssetCategories() {
    const context = useContext(AssetCategoryContext);
    if (!context) {
        throw new Error("useAssetCategories must be used inside AssetCategoryProvider");
    }
    return context;
}
