import ButtonRedirect from "@/components/button-redirect";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Get started",
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex justify-between items-center flex-col gap-[6px]  h-full">
			<header className="relative text-center justify-start text-[#3f8cff] text-sm font-bold uppercase">
				Step 1/4
			</header>
			<main className="flex-1 border-b border-[#e4e6e8] w-full">
				{children}
			</main>
			<footer className="flex justify-between items-center h-[84px] w-full">
				<ButtonRedirect
					label="Anterior"
					bgTransparent={true}
					icon="formkit:arrowleft"
					shandow={false}
					reverse={true}
				/>
				<ButtonRedirect label="Proximo" icon="formkit:arrowright" />
			</footer>
		</div>
	);
}
