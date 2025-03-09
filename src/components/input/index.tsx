import { ComponentProps } from "react";
import ErrorInput from "../error-input";

type InputType = "email" | "password" | string;

interface IInputProps extends ComponentProps<"input"> {
	typeInput: InputType;
	label: string;
	errors: string;

}

export default function Input({
	typeInput,
	label,
	errors,
	...rest
}: IInputProps) {
	return (
		<div className="flex flex-col gap-1.5 ">
			<div className="text-[#7d8592] text-sm font-bold leading-normal">
				{label}
			</div>
			<input
				{...rest}
				
				className="w-[403px] h-12 bg-white rounded-[14px] outline-none  px-[18px]  shadow-[0px_1px_2px_0px_rgba(184,200,224,0.22)] border border-[#d8e0ef] text-[#7d8592] text-sm font-normal font-['Nunito Sans'] leading-normal "
			/>
			<ErrorInput message={errors} />
		</div>
	);
}
