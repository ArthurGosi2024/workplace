import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";

export default function InputCode() {
	return (
		<InputOTP maxLength={6} className="flex">
			<InputOTPGroup className="flex gap-2.5">
				<InputOTPSlot index={0} />
				<InputOTPSlot index={1} />
				<InputOTPSlot index={2} />
				<InputOTPSlot index={3} />
			</InputOTPGroup>
		</InputOTP>
	);
}
