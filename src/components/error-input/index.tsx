interface IErrorInputProps {
	message: string;
}

export default function ErrorInput({ message }: IErrorInputProps) {
	return (
		<div className="h-[14px]">
			{message.length > 0 && <p className="text-sm text-red-500">{message}</p>}
		</div>
	);
}
