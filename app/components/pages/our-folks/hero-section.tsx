"use client";

import BlurText from "../../animations/BlurText";
import CardsContainer from "./cards-container";
import { SlideCardsType } from "@/types/global-types";
import { useTextFadeUpObserver } from "@/hooks/useTextFadeUpObserver";
import { useRef } from "react";

export default function HeroSection({ title, description, cards }: { title: string; description: string[]; cards: SlideCardsType[] }) {
	useTextFadeUpObserver();

	const descriptionRef = useRef<HTMLDivElement>(null);

	return (
		<section
			data-section="home-hero"
			className="hero-section px-4 md:px-[9.38vw] text-center md:pb-[2vw] pb-20 pt-[180px] md:pt-[220px] lg:pt-[12vw]"
		>
			<div className="mb-15">
				<h1 className="text-center font-bold text-white">
					<BlurText
						text={title}
						delay={100}
						animateBy="words"
						direction="top"
						className="justify-center items-center"
					/>
				</h1>

				<div ref={descriptionRef}>
					<div className="flex flex-col items-center content-center font-medium mb-[1.25vw]">
						{description.map((p, i) => (
							<p
								key={i}
								className="mb-0! text-white text-fade-up"
							>
								{p}
							</p>
						))}
					</div>
				</div>
			</div>
			<CardsContainer content={cards} />
		</section>
	);
}
