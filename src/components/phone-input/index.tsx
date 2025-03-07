"use client";

import type React from "react";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";

// Common country
const COUNTRY_CODES = [
	{ code: "+55", country: "Brasil" },
	{ code: "+1", country: "US/Canada" },
	{ code: "+44", country: "UK" },
	{ code: "+49", country: "Germany" },
	{ code: "+33", country: "France" },
	{ code: "+61", country: "Australia" },
	{ code: "+86", country: "China" },
	{ code: "+91", country: "India" },
	{ code: "+351", country: "Portugal" },
	{ code: "+34", country: "Spain" },
	{ code: "+52", country: "Mexico" },
	{ code: "+81", country: "Japan" },
	{ code: "+82", country: "South Korea" },
	{ code: "+7", country: "Russia" },
	{ code: "+39", country: "Italy" },
	{ code: "+31", country: "Netherlands" },
	{ code: "+46", country: "Sweden" },
	{ code: "+47", country: "Norway" },
	{ code: "+45", country: "Denmark" },
	{ code: "+358", country: "Finland" },
];

export default function PhoneInput() {
	const [countryCode, setCountryCode] = useState("+1");
	const [phoneNumber, setPhoneNumber] = useState("");

	// Format phone number as user types (XXX XXX-XX-XX)
	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// Remove all non-digit characters
		const digits = e.target.value.replace(/\D/g, "");

		// Phone format patterns for different countries
		const phonePatterns = {
			"+55": {
				// Brazil - (XX) XXXXX-XXXX
				format: (d: string) => {
					if (d.length <= 2) return d;
					if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
					return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7, 11)}`;
				},
				maxLength: 11,
			},
			"+1": {
				// US/Canada - XXX-XXX-XXXX
				format: (d: string) => {
					if (d.length <= 3) return d;
					if (d.length <= 6) return `${d.slice(0, 3)}-${d.slice(3)}`;
					return `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6, 10)}`;
				},
				maxLength: 10,
			},
			"+44": {
				// UK - XXXX XXXX XX
				format: (d: string) => {
					if (d.length <= 4) return d;
					if (d.length <= 8) return `${d.slice(0, 4)} ${d.slice(4)}`;
					return `${d.slice(0, 4)} ${d.slice(4, 8)} ${d.slice(8, 10)}`;
				},
				maxLength: 10,
			},
			"+49": {
				// Germany - XXXX XXXXXXX
				format: (d: string) => {
					if (d.length <= 4) return d;
					return `${d.slice(0, 4)} ${d.slice(4, 11)}`;
				},
				maxLength: 11,
			},
		};

		// Format phone number based on country code
		const formatPhoneNumber = (digits: string, countryCode: string) => {
			const pattern = phonePatterns[countryCode as keyof typeof phonePatterns];

			if (pattern) {
				// Apply country-specific formatting
				const limitedDigits = digits.slice(0, pattern.maxLength);
				return pattern.format(limitedDigits);
			}

			// Generic international format
			const d = digits.slice(0, 10);
			if (d.length <= 3) return d;
			if (d.length <= 6) return `${d.slice(0, 3)} ${d.slice(3)}`;
			if (d.length <= 8)
				return `${d.slice(0, 3)} ${d.slice(3, 6)}-${d.slice(6)}`;
			return `${d.slice(0, 3)} ${d.slice(3, 6)}-${d.slice(6, 8)}-${d.slice(
				8,
				10
			)}`;
		};

		const formatted = formatPhoneNumber(digits, countryCode);
		setPhoneNumber(formatted);
	};
	return (
		<div className="w-full max-w-md mx-auto flex flex-col gap-1.5">
			<Label
				htmlFor="phone"
				className="text-[#7d8592] text-sm font-bold  leading-normal"
			>
				Numero de Telefone
			</Label>
			<div className="flex gap-2">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="outline"
							className="w-20 h-12 flex justify-between items-center border-2 border-[#d8e0ef]  text-[#7d8592] font-normal text-sm"
						>
							{countryCode} <ChevronDown className="h-4 w-4 opacity-50" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="start" >
						{COUNTRY_CODES.map((country) => (
							<DropdownMenuItem
								key={country.code}
								onClick={() => setCountryCode(country.code)}
								className="text-[#7d8592] font-normal  cursor-pointer"
							>
								{country.code} {country.country}
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>

				<input
					id="phone"
					type="tel"
					value={phoneNumber}
					onChange={handlePhoneChange}
					placeholder="345 567-23-56"
					className="flex-1 h-12 bg-white rounded-[14px] outline-none  px-[18px]  shadow-[0px_1px_2px_0px_rgba(184,200,224,0.22)] border-2 border-[#d8e0ef] text-[#7d8592] text-sm font-normal font-['Nunito Sans'] leading-normal"
				/>
			</div>
		</div>
	);
}
