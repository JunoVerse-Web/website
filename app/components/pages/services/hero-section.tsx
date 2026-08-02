"use client";

import { ServicesCardType } from "@/types/global-types";
import ServicesCards from "./services-cards";
import { useTextFadeUpObserver } from "@/hooks/useTextFadeUpObserver";

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
	useTextFadeUpObserver();

	return (
		<section
			data-section="services-hero"
			// className="grid gap-y-[39.06vw] pt-[180px] md:pt-[220px] lg:pt-[12vw]"
			className=""
		>
			<div className="relative grid gap-y-[39.06vw] pt-[180px] md:pt-[220px] lg:pt-[12vw] pb-[80vw]">
				<video
					className="absolute inset-0 m-auto h-full w-full object-cover"
					src={"/video/service-page-bg-video.webm"}
					autoPlay
					muted
					loop
					playsInline
					preload="auto"
					controls={false}
				>
					Your browser does not support the video tag.
				</video>
				<div className="relative z-50 flex flex-col text-center px-4 md:px-[15vw] lg:px-[25.75vw]">
					<h1 className="text-white text-fade-up">{title}</h1>
					<p className="text-white font-size-36 font-bold! text-fade-up">{mainDescription}</p>
					<p className="text-white max-w-[87%] mx-auto text-fade-up">{secondDescription}</p>
				</div>
			</div>

			{/* Cards */}
			<ServicesCards cards={cards} />
		</section>
	);
}
