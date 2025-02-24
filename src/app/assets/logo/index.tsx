export default function Logo() {
	return (
		<div className="w-[50px] h-[50px] relative">
			<div className="w-[50px] h-[50px] left-0 top-0 absolute">
				<div className="w-[50px] h-[50px] left-0 top-0 absolute bg-white rounded-xl" />
				<div className="w-[50px] h-[50px] left-0 top-0 absolute bg-white rounded-xl" />
			</div>
			<div data-svg-wrapper className="left-[15px] top-[19px] absolute">
				<svg
					width="6"
					height="6"
					viewBox="0 0 6 6"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M2.9999 6C1.3499 6 0 4.65006 0 3.0002C0 1.34994 1.3499 0 2.9999 0C4.64991 0 6 1.34994 6 3.0002C6 4.65006 4.64991 6 2.9999 6Z"
						fill="#3F8CFF"
					/>
				</svg>
			</div>
			<div data-svg-wrapper className="left-[24px] top-[9px] absolute">
				<svg
					width="19"
					height="23"
					viewBox="0 0 19 23"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M19 9.34475C19 4.20515 14.725 0 9.5 0H9.49978C4.27501 0 0 4.20515 0 9.34475V23C0 23 18.9983 20.9193 19 9.34603C19 9.34561 19 9.34518 19 9.34475Z"
						fill="#3F8CFF"
					/>
				</svg>
			</div>
		</div>
	);
}
