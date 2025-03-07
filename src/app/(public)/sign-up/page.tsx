import AlertNotification from "@/components/alert-notification";
import ErrorInput from "@/components/error-input";
import Input from "@/components/input";
import InputCode from "@/components/input-code";
import InputPassword from "@/components/input-password";
import PhoneInput from "@/components/phone-input";
export default function Page() {
	return (
		<div className="flex flex-col  gap-7 h-full">
			<div className=" text-center  text-[#0a1629] text-[22px] font-bold ">
				Valid your phone
			</div>

			<form className="flex justify-center ">
				<div className="w-fit">
					<section className="flex flex-col justify-center w-[409px]  gap-5">
						<PhoneInput />
						<div className="flex flex-col gap-1.5 ">
							<label
								htmlFor="phone"
								className="text-[#7d8592] text-sm font-bold leading-normal"
							>
								Código de SMS
							</label>
							<InputCode />
						</div>
						<AlertNotification
							type="SUCCESS"
							message=" SMS foi enviado para o seu número +1 345 673-56-67 Será válido por 01:25"
						/>

						<Input
							label="Email"
							type="email"
							name="email"
							errors={""}
							typeInput="email"
						/>

						<div className="flex flex-col gap-1.5 ">
							<div className="text-[#7d8592] text-sm font-bold leading-normal">
								Criar senha
							</div>
							<InputPassword name="password" />
							<ErrorInput  message="" />
						</div>
					</section>
				</div>
			</form>
		</div>
	);
}
