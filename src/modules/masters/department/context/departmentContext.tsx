import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

import { departmentMock } from "../mock/department.mock";
import type { Department } from "../types/department.types";

interface DepartmentContextType {
    departments: Department[];
    addDepartment: (item: Department) => void;
    updateDepartment: (id: string, updatedItem: Partial<Department>) => void;
    deleteDepartment: (id: string) => void;
}

const DepartmentContext = createContext<DepartmentContextType | undefined>(undefined);

interface DepartmentProviderProps {
    children: ReactNode;
}

export function DepartmentProvider({ children }: DepartmentProviderProps) {
    const [departments, setDepartments] = useState<Department[]>(() => {
        const saved = localStorage.getItem("departments");
        if (saved) return JSON.parse(saved);
        return departmentMock;
    });

    useEffect(() => {
        localStorage.setItem("departments", JSON.stringify(departments));
    }, [departments]);

    const addDepartment = (item: Department) => {
        setDepartments((prev) => [...prev, item]);
    };

    const updateDepartment = (id: string, updatedItem: Partial<Department>) => {
        setDepartments((prev) =>
            prev.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
        );
    };

    const deleteDepartment = (id: string) => {
        setDepartments((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <DepartmentContext.Provider
            value={{
                departments,
                addDepartment,
                updateDepartment,
                deleteDepartment,
            }}
        >
            {children}
        </DepartmentContext.Provider>
    );
}

export function useDepartments() {
    const context = useContext(DepartmentContext);
    if (!context) {
        throw new Error("useDepartments must be used inside DepartmentProvider");
    }
    return context;
}
