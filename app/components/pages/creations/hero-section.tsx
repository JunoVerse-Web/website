"use client";

import { CreationsCardType } from "@/types/global-types";
import CardsContainer from "./cards-container";
import { useTextFadeUpObserver } from "@/hooks/useTextFadeUpObserver";

export default function HeroSection({ title, description, cards }: { title: string; description: string; cards: CreationsCardType[] }) {
	useTextFadeUpObserver();

	return (
		<section
			data-section="services-hero"
			className="grid gap-18 lg:gap-y-[9.38vw] pt-24 md:pt-40 lg:pt-[14.58vw]"
		>
			<div className="flex flex-col text-center px-4 sm:px-[15vw] lg:px-[25.75vw]">
				<h1 className="text-white text-fade-up">{title}</h1>
				<p className="text-white text-fade-up">{description}</p>
			</div>
			<CardsContainer content={cards} />
		</section>
	);
}
