export default function SignIn() {
	return (
		<div className="flex flex-col gap-[33px] items-center justify-center h-full">
			<div className="text-center text-[#0a1629] text-2xl font-bold ">
				Sign In to Woorkroom
			</div>

			<form action="">
				<div className="flex flex-col gap-1.5">
					<div className="text-[#7d8592] text-sm font-bold leading-normal">
						Email Address
					</div>
					<input
						type="text"
						className="w-[403px] h-12 bg-white rounded-[14px] outline-none  px-[18px]  shadow-[0px_1px_2px_0px_rgba(184,200,224,0.22)] border border-[#d8e0ef] text-[#7d8592] text-sm font-normal font-['Nunito Sans'] leading-normal"
					/>
				</div>
			</form>
		</div>
	);
}
