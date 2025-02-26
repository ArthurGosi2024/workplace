"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ComponentProps } from "react";

interface ICheckBoxWithTextProps extends ComponentProps<typeof Checkbox> {
	text?: string;
}

export function CheckboxWithText({ text, ...rest }: ICheckBoxWithTextProps) {
	return (
		<div className="items-top flex space-x-2">
			<Checkbox id="terms1" {...rest} />
			<div className="grid gap-1.5 leading-none">
				<label
					htmlFor="terms1"
					className="text-[#808080] text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					{text}
				</label>
			</div>
		</div>
	);
}
