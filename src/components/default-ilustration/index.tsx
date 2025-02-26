

import Ilustration from "@/app/assets/ilustration";
import Logo from "@/app/assets/logo";


interface IDefaultIlustrationProps {
	pathname: string;
}

export default function DefaultIlustration({ pathname }: IDefaultIlustrationProps) {

	return (
		<div className={`bg-[#3f8cff] h-full ${ pathname === '/sign-up' ? 'w-[346px]' : 'flex-1/2 '  }  transition-all flex flex-col gap-[48px] justify-center  py-[60px] px-[94px]  ${pathname === '/sign-up' ? 'rounded-3xl overflow-hidden' : ''}  `}>
			{pathname === "/sign-up" ? (
				<div className="h-full flex justify-center items-center"></div>
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
