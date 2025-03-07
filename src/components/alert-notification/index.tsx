import { Icon } from "@iconify/react";
import hexToRgba from "hex-to-rgba";
const ENUM_ICONS = {
	ERROR: "material-symbols:error-rounded",
	WARNING: "material-symbols:warning-rounded",
	SUCCESS: "material-symbols:info",
	DENIED: "material-symbols:block",
};

const ENUM_COLORS = {
	ERROR: "#FF3B3B",
	WARNING: "#FFB800",
	SUCCESS: "#3F8CFF",
	DENIED: "#FF3B3B",
};

interface IAlertNotificationProps {
	type: keyof typeof ENUM_ICONS;
	message: string;
}

export default function AlertNotification({
	type,
	message,
}: IAlertNotificationProps) {
	return (
		<div
			style={{ backgroundColor: hexToRgba(ENUM_COLORS[type], "0.1") }}
			className={`max-w-[403px] w-full  relative  justify-center items-start p-5   flex gap-3 rounded-[14px]`}
		>
			<Icon icon={ENUM_ICONS[type]} color={ENUM_COLORS[type]} fontSize={30} />
			<span
				style={{ color: ENUM_COLORS[type] }}
				className={` text-sm font-semibold leading-snug`}
			>
				{message}
			</span>
		</div>
	);
}
