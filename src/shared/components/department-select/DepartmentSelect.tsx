import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/component/ui/select";

import { departmentMock } from "@/modules/masters/department/mock/department.mock";

interface DepartmentSelectProps {
    value?: string;
    onValueChange: (value: string) => void;
    placeholder?: string;
}

export function DepartmentSelect({
    value,
    onValueChange,
    placeholder = "Select Department",
}: DepartmentSelectProps) {
    return (
        <Select
            value={value}
            onValueChange={onValueChange}
        >
            <SelectTrigger>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>

            <SelectContent>
                {departmentMock.map((department) => (
                    <SelectItem
                        key={department.id}
                        value={department.name}
                    >
                        {department.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}