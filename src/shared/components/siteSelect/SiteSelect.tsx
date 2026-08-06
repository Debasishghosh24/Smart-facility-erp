import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/component/ui/select";

import { mockSites } from "@/modules/masters/site/mock/site.mock";

interface SiteSelectProps {
    value?: string;
    onValueChange: (value: string) => void;
    placeholder?: string;
}

export default function SiteSelect({
    value,
    onValueChange,
    placeholder = "Select Site",
}: SiteSelectProps) {
    return (
        <Select value={value} onValueChange={onValueChange}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>

            <SelectContent>
                {mockSites.map((site) => (
                    <SelectItem
                        key={site.id}
                        value={site.siteName}
                    >
                        {site.siteName}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}