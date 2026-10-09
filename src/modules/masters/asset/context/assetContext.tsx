import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

import { mockAssets } from "../mock/asset.mock";
import type { Asset } from "../types/asset.types";

interface AssetContextType {
    assets: Asset[];

    addAsset: (asset: Asset) => void;

    updateAsset: (
        id: string,
        updatedAsset: Partial<Asset>
    ) => void;

    deleteAsset: (id: string) => void;

    retireAsset: (id: string) => void;
}

const AssetContext = createContext<
    AssetContextType | undefined
>(undefined);

interface AssetProviderProps {
    children: ReactNode;
}

export function AssetProvider({
    children,
}: AssetProviderProps) {

    // =====================================================
    // LOAD ASSETS
    // =====================================================

    const [assets, setAssets] = useState<Asset[]>(() => {
        const savedAssets =
            localStorage.getItem("assets");

        if (savedAssets) {
            return JSON.parse(savedAssets);
        }

        return mockAssets;
    });

    // =====================================================
    // SAVE ASSETS TO LOCAL STORAGE
    // =====================================================

    useEffect(() => {
        localStorage.setItem(
            "assets",
            JSON.stringify(assets)
        );
    }, [assets]);

    // =====================================================
    // ADD ASSET
    // =====================================================

    const addAsset = (asset: Asset) => {
        setAssets((previousAssets) => [
            ...previousAssets,
            asset,
        ]);
    };

    // =====================================================
    // UPDATE ASSET
    // =====================================================

    const updateAsset = (
        id: string,
        updatedAsset: Partial<Asset>
    ) => {
        setAssets((previousAssets) =>
            previousAssets.map((asset) =>
                asset.id === id
                    ? {
                        ...asset,
                        ...updatedAsset,
                    }
                    : asset
            )
        );
    };

    // =====================================================
    // DELETE ASSET
    // =====================================================

    const deleteAsset = (id: string) => {
        setAssets((previousAssets) =>
            previousAssets.filter(
                (asset) => asset.id !== id
            )
        );
    };

    // =====================================================
    // RETIRE ASSET
    // =====================================================

    const retireAsset = (id: string) => {
        setAssets((previousAssets) =>
            previousAssets.map((asset) =>
                asset.id === id
                    ? {
                        ...asset,
                        status: "Retired",
                    }
                    : asset
            )
        );
    };

    // =====================================================
    // CONTEXT PROVIDER
    // =====================================================

    return (
        <AssetContext.Provider
            value={{
                assets,
                addAsset,
                updateAsset,
                deleteAsset,
                retireAsset,
            }}
        >
            {children}
        </AssetContext.Provider>
    );
}

// =========================================================
// CUSTOM HOOK
// =========================================================

export function useAssets() {
    const context = useContext(AssetContext);

    if (!context) {
        throw new Error(
            "useAssets must be used inside AssetProvider"
        );
    }

    return context;
}