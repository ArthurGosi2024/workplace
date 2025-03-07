'use client';

import Ilustration from "@/app/assets/ilustration";
import Logo from "@/app/assets/logo";
import StageActions from "../stage-actions";
import { ROUTER_STAGES } from "@/app/(public)/sign-up/routerConfig";
import { useParams } from "next/navigation";

interface IDefaultIlustrationProps {
	pathname: string;
}

export default function DefaultIlustration({
	pathname,
}: IDefaultIlustrationProps) {
	const { stage } = useParams<{ stage: string }>();
	return (
		<div
			className={`bg-[#3f8cff] h-full ${
				pathname.includes("/sign-up") ? "w-[346px]" : "flex-1/2 "
			}  transition-all flex flex-col gap-[48px] justify-center  py-[60px] px-10  ${
				pathname.includes("/sign-up") ? "rounded-3xl overflow-hidden" : ""
			}  `}
		>
			{pathname.includes("/sign-up") ? (
				<div className="h-full flex justify-center items-center w-full ">
					<StageActions stages={ROUTER_STAGES} currentStep={Number(stage)} />
				</div>
			) : (
				<>
					<header className="flex gap-[30px] items-center">
						<Logo />
						<div className="text-white text-3xl font-bold ">Woorkroom</div>
					</header>

					<section className="flex gap-[30px] items-center flex-col">
						<div className="text-white text-4xl font-bold  w-full pl-24 leading-[56px]">
							Seu lugar para trabalhar
							<br />
							Plano. Criar. Controlar.
						</div>
						<Ilustration />
					</section>
				</>
			)}
		</div>
	);
}
