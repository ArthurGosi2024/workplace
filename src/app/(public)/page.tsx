"use client";
import InputPassword from "@/components/input-password";
import Link from "next/link";
import { CheckboxWithText } from "@/components/checkbox-with-text";
import { useActionState } from "react";
import { handleLogin } from "./action";
import Input from "@/components/input";
import ErrorInput from "@/components/error-input";

export default function SignIn() {
	const [state, action] = useActionState(handleLogin, null);

	return (
		<div className="flex flex-col gap-[33px] items-center justify-center h-full">
			<div className="text-center text-[#0a1629] text-2xl font-bold ">
				Faça login no Workroom
			</div>

			<form
				action={action}
				className={"flex flex-col justify-center items-center gap-20"}
			>
				<div className="flex flex-col gap-[29px]">
					<Input
						label="Email"
						type="email"
						name="email"
						errors={state?.errors?.email![0] ?? ""}
						typeInput="email"
					/>
					<div className="flex flex-col gap-1.5 ">
						<div className="text-[#7d8592] text-sm font-bold leading-normal">
							Senha
						</div>
						<InputPassword name="password" />
						<ErrorInput message={state?.errors?.password![0] ?? ""} />
					</div>

					<div className={"flex justify-between"}>
						<CheckboxWithText text={"Lembre-me"} name="remember" />
						<Link
							href={"/forgot-password"}
							className="text-right text-[#7d8592] text-base font-normal font-['Nunito Sans'] underline"
						>
							Recuperar Senha
						</Link>
					</div>
				</div>

				<div className="flex flex-col justify-center items-center gap-2">
					<button
						type={"submit"}
						className="w-[170px] h-12 bg-[#3f8cff] cursor-pointer  rounded-[14px] shadow-[0px_6px_12px_0px_rgba(63,140,255,0.26)]"
					>
						<span className="text-white text-base font-bold font-['Nunito Sans']">
							Faça o Login
						</span>
					</button>
					<Link
						href={"/sign-up"}
						className="text-sm text-[#3f8cff] font-normal font-['Nunito Sans'] underline"
					>
						Não tem uma conta? Crie uma agora
					</Link>
				</div>
			</form>
		</div>
	);
}
