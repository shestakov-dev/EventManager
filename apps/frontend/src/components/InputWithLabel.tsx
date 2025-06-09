import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { HTMLInputTypeAttribute } from "react";

export function InputWithLabel({
	attribute,
	label,
	type = "text",
	value,
	onChange,
}: {
	attribute: string;
	label: string;
	type?: HTMLInputTypeAttribute;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	return (
		<div className="grid w-full max-w-sm items-center gap-3">
			<Label htmlFor={attribute}>{label}</Label>
			<Input
				type={type}
				id={attribute}
				placeholder={label}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
}
