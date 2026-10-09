import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

import { mockEmployees } from "../mock/employee.mock";
import type { Employee } from "../types/employee.types";

interface EmployeeContextType {
    employees: Employee[];
    addEmployee: (item: Employee) => void;
    updateEmployee: (id: string, updatedItem: Partial<Employee>) => void;
    deleteEmployee: (id: string) => void;
}

const EmployeeContext = createContext<EmployeeContextType | undefined>(undefined);

interface EmployeeProviderProps {
    children: ReactNode;
}

export function EmployeeProvider({ children }: EmployeeProviderProps) {
    const [employees, setEmployees] = useState<Employee[]>(() => {
        const saved = localStorage.getItem("employees");
        if (saved) return JSON.parse(saved);
        return mockEmployees;
    });

    useEffect(() => {
        localStorage.setItem("employees", JSON.stringify(employees));
    }, [employees]);

    const addEmployee = (item: Employee) => {
        setEmployees((prev) => [...prev, item]);
    };

    const updateEmployee = (id: string, updatedItem: Partial<Employee>) => {
        setEmployees((prev) =>
            prev.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
        );
    };

    const deleteEmployee = (id: string) => {
        setEmployees((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <EmployeeContext.Provider
            value={{
                employees,
                addEmployee,
                updateEmployee,
                deleteEmployee,
            }}
        >
            {children}
        </EmployeeContext.Provider>
    );
}

export function useEmployees() {
    const context = useContext(EmployeeContext);
    if (!context) {
        throw new Error("useEmployees must be used inside EmployeeProvider");
    }
    return context;
}
