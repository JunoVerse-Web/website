"use client";

import BlurText from "../../animations/BlurText";
import CardsContainer from "./cards-container";
import { SlideCardsType } from "@/types/global-types";

export default function HeroSection({
	title,
	description,
	cards,
}: {
	title: string;
	description: string[];
	cards: SlideCardsType[];
}) {
	return (
		<section
			data-section="home-hero"
			className="hero-section px-[9.38vw] text-center pt-[12vw] pb-[2vw]"
		>
			<div>
				<h1 className="text-center font-bold text-white">
					<BlurText
						text={title}
						delay={100}
						animateBy="words"
						direction="top"
						className="justify-center items-center"
					/>
				</h1>
				<div className="flex flex-col items-center content-center font-medium mb-[1.25vw]">
					{description.map((p, i) => (
						<p
							key={i}
							className="mb-0! text-white"
						>
							{p}
						</p>
					))}
				</div>
			</div>
			<CardsContainer content={cards} />
		</section>
	);
}
