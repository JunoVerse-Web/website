"use client";

import BlurText from "../../animations/BlurText";
import CardsContainer from "./cards-container";

export default function HeroSection({ title, description, bottomDescription }: { title: string; description: string[]; bottomDescription: string }) {
	return (
		<section className="bg-yellow px-[10.292vw] text-center pt-[12vw] pb-[2vw]">
			<div>
				<h1 className="text-center font-bold text-[3.8vw] leading-[1.2] mb-[2vw]">
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
							className="mb-0!"
						>
							{p}
						</p>
					))}
				</div>
				<p>{bottomDescription}</p>
			</div>
			<CardsContainer />
		</section>
	);
}
