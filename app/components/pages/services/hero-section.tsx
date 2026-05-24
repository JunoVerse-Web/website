import { ServicesCardType } from "@/types/global-types";
import React from "react";
import ServicesCards from "./services-cards";

export default function HeroSection({
	title,
	mainDescription,
	secondDescription,
	cards,
}: {
	title: string;
	mainDescription: string;
	secondDescription: string;
	cards: ServicesCardType[];
}) {
	return (
		<section data-section="services-hero" className="grid gap-y-[39.06vw] pt-24 md:pt-40 lg:pt-[14.58vw]">
			<div className="flex flex-col text-center px-[25.75vw]">
				<h1 className="text-white">{title}</h1>
				<p className="text-white font-size-36 font-bold!">{mainDescription}</p>
				<p className="text-white max-w-[87%] mx-auto">{secondDescription}</p>
			</div>

            {/* Cards */}
            <ServicesCards cards={cards} />
		</section>
	);
}
