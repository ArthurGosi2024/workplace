import { Icon } from "@iconify/react";

interface IButtonRedirectProps {
	label: string;
	icon?: string;
	bgTransparent?: boolean;
	shandow?: boolean;
	reverse?: boolean;
	action?: () => void;
}

export default function ButtonRedirect({
	label,
	icon,
	reverse,
	bgTransparent,
	shandow = true,
	action,
}: IButtonRedirectProps) {
	return (
		<button
			onClick={action}
			className={`w-[145px] h-12 flex cursor-pointer ${
				reverse && "flex-row-reverse"
			} ${
				bgTransparent ? "bg-transparent" : "bg-[#3f8cff]"
			} justify-between px-3 items-center  rounded-[14px]  ${
				shandow && "shadow-[0px_6px_12px_0px_rgba(63,140,255,0.26)]"
			}`}
		>
			<div
				className={`${
					bgTransparent ? "text-[#3f8cff]" : "text-white"
				} text-base font-bold text-center`}
			>
				{label}
			</div>
			<Icon
				icon={icon!}
				color={bgTransparent ? "#3f8cff" : "#Fff"}
				fontSize={20}
			/>
		</button>
	);
}
