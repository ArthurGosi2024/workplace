"use client";

import { Nunito_Sans } from "next/font/google";
import "../globals.css";
import DefaultIlustration from "@/components/default-ilustration";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { usePathname } from "next/navigation";

const nunitoSans = Nunito_Sans({
	variable: "--font-nunito-sans",
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();

	return (
		<PrimeReactProvider>
			<html lang="en">
				<body className={nunitoSans.className}>
					<div className="bg-[#f4f9fd] antialiased  w-screen h-screen px-10 pt-5 pb-[30px]">
						<div
							className={`flex  w-full h-full ${
								pathname === "/sign-up" ? "gap-8" : "gap-0"
							} transition-all  rounded-3xl overflow-hidden  `}
						>
							<DefaultIlustration pathname={pathname} />
							<div className="flex-1/2 h-full bg-white rounded-3xl p-5">
								{children}
							</div>
						</div>
					</div>
				</body>
			</html>
		</PrimeReactProvider>
	);
}
