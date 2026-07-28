import { Switch as ShadcnSwitch } from "@/component/ui/switch";

interface SwitchProps {
    label?: string;
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    disabled?: boolean;
}

export default function Switch({
    label,
    checked,
    onCheckedChange,
    disabled,
}: SwitchProps) {
    return (
        <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
                {label && (
                    <p className="text-sm font-medium text-slate-700">
                        {label}
                    </p>
                )}

                <p className="text-xs text-slate-500">
                    {checked ? "Active" : "Inactive"}
                </p>
            </div>

            <ShadcnSwitch
                checked={checked}
                onCheckedChange={onCheckedChange}
                disabled={disabled}
            />
        </div>
    );
}