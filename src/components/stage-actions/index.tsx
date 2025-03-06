"use client";

import { useState } from "react";
import Logo from "@/app/assets/logo";

interface IStagesActionsProps {
	stages: {
		id: number;
		label: string;
	}[];
}

export default function StageActions({ stages }: IStagesActionsProps) {
	const [currentStep, setCurrentStep] = useState(1);

	const handleNextStep = () => {
		if (currentStep < stages.length) {
			setCurrentStep(currentStep + 1);
		}
	};

	const handlePrevStep = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	};

	return (
		<div className="w-full h-full">
			<div className="flex flex-col gap-10  h-full">
				<Logo />
				<div className="flex flex-col h-2/4 justify-center">
					<div className="space-y-6">
						<h1 className="text-white text-3xl font-bold ">Get started</h1>
						{stages.map((step, index) => (
							<div key={step.id} className="flex items-start">
								<div className="flex flex-col items-center mr-4">
									<div
										className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${
											step.id <= currentStep
												? "bg-white border-white"
												: "bg-transparent border-white/50"
										}`}
									>
										{step.id < currentStep && (
											<div className="w-2 h-2 bg-blue-500 rounded-full" />
										)}
									</div>
									{index < stages.length - 1 && (
										<div className="w-0.5 h-10 bg-white/30 mt-1" />
									)}
								</div>
								<div
									className={`transition-opacity duration-300 ${
										step.id === currentStep
											? "opacity-100"
											: step.id <= currentStep
											? "opacity-70"
											: "opacity-50"
									}`}
								>
									<p className="text-white">{step.label}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
