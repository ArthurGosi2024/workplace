import FooterNextPagination from "../../../../components/footer-next-pagination";

export default  async function   Layout({ children,  params }: { children: React.ReactNode ,  params : Promise<{ stage : string }> }) {
	const { stage } = await params

	
	return (
		<div className="flex justify-between items-center flex-col gap-[6px]  h-full">
			<header className="relative text-center justify-start text-[#3f8cff] text-sm font-bold uppercase">
				Step {stage}/4
			</header>
			<main className="flex-1 border-b border-[#e4e6e8] w-full">
				{children}
			</main>
			<FooterNextPagination   stage={Number(stage)} />
		</div>
	);
}
