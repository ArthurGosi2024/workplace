"use client";

import ButtonRedirect from "@/components/button-redirect";
import { ROUTER_STAGES } from "../routerConfig";
import { useRouter, useParams } from "next/navigation";
export default function Layout({ children }: { children: React.ReactNode }) {
	const { stage } = useParams<{ stage: string }>();
	const router = useRouter();
	return (
		<div className="flex justify-between items-center flex-col gap-[6px]  h-full">
			<header className="relative text-center justify-start text-[#3f8cff] text-sm font-bold uppercase">
				Step {stage}/4
			</header>
			<main className="flex-1 border-b border-[#e4e6e8] w-full">
				{children}
			</main>
			<footer className="flex justify-between items-center h-[84px] w-full">
				{Number(stage) > 1 && (
					<ButtonRedirect
						label="Anterior"
						bgTransparent={true}
						icon="formkit:arrowleft"
						shandow={false}
						reverse={true}
						action={() => {
							const findPreviewId = ROUTER_STAGES.findIndex(
								(route) => route.id === Number(stage) - 1
							);
							if (ROUTER_STAGES[findPreviewId]) {
								router.back();
							}
						}}
					/>
				)}
				<ButtonRedirect
					label="Proximo"
					icon="formkit:arrowright"
					action={() => {
						const findNextId = ROUTER_STAGES.findIndex(
							(route) => route.id === Number(stage) + 1
						);

						if (findNextId) {
							const currentNextPathname = ROUTER_STAGES[findNextId].router;
							if (currentNextPathname) {
								router.push(`${Number(stage) + 1}/${currentNextPathname}`);
							}
						}
					}}
				/>
			</footer>
		</div>
	);
}
