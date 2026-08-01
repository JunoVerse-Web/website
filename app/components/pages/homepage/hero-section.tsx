"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import BlurText from "../../animations/BlurText";
import CardsContainer from "./cards-container";
import { CardsType } from "@/types/global-types";

export default function HeroSection({
	title,
	description,
	bottomDescription,
	cards,
}: {
	title: string;
	description: string[];
	bottomDescription: string;
	cards: CardsType[];
}) {
	const descriptionRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			gsap.to(".fade-up-item", {
				opacity: 1,
				y: 0,
				stagger: 0.15,
				duration: 0.6,
				ease: "power2.out",
				delay: 1.5, // tune to land after the title's BlurText animation
			});
		},
		{ scope: descriptionRef },
	);

	return (
		<section
			data-section="home-hero"
			className="hero-section px-4 md:px-[9.38vw] text-center pt-30 md:pt-[12vw] md:pb-[2vw] pb-20"
		>
			<div>
				<h1 className="text-center font-bold text-white">
					<BlurText
						text={title}
						delay={100}
						animateBy="words"
						direction="bottom"
						className="justify-center items-center"
					/>
				</h1>
				<div ref={descriptionRef}>
					<div className="flex flex-col items-center content-center font-medium mb-[1.25vw]">
						{description.map((p, i) => (
							<p
								key={i}
								className="fade-up-item opacity-0 translate-y-4 mb-0! text-white"
							>
								{p}
							</p>
						))}
					</div>
					<p className="text-white fade-up-item opacity-0 translate-y-4">{bottomDescription}</p>
				</div>
			</div>
			<CardsContainer content={cards} />
		</section>
	);
}
