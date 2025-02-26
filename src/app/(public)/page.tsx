"use client";
import InputPassword from "@/components/input-password";
import Link from "next/link";
import { CheckboxWithText } from "@/components/checkbox-with-text";
import { useActionState } from "react";
import { handleLogin } from "./action";

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
					<div className="flex flex-col gap-1.5 ">
						<div className="text-[#7d8592] text-sm font-bold leading-normal">
							Email
						</div>
						<input
							type="email"
							name="email"
							className="w-[403px] h-12 bg-white rounded-[14px] outline-none  px-[18px]  shadow-[0px_1px_2px_0px_rgba(184,200,224,0.22)] border border-[#d8e0ef] text-[#7d8592] text-sm font-normal font-['Nunito Sans'] leading-normal"
						/>
						<div className="h-[14px]">
							{state?.errors?.email && (
								<p className="text-sm text-red-500">{state?.errors.email[0]}</p>
							)}
						</div>
					</div>
					<div className="flex flex-col gap-1.5 ">
						<div className="text-[#7d8592] text-sm font-bold leading-normal">
							Senha
						</div>
						<InputPassword name="password" />
						<div className="h-[14px]">
							{state?.errors?.password && (
								<p className="text-sm text-red-500">
									{state?.errors.password[0]}
								</p>
							)}
						</div>
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
