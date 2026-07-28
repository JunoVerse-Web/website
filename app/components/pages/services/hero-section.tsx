'use client';

import { ServicesCardType } from "@/types/global-types";
import React from "react";
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
			className="grid gap-y-[39.06vw] pt-24 md:pt-40 lg:pt-[14.58vw]"
		>
			<video
				className="absolute! top-0 left-0 right-0 m-auto pointer-events-none w-full object-contain scale-125 origin-top -translate-y-[10%]"
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
			<div className="flex flex-col text-center px-[25.75vw]">
				<h1 className="text-white text-fade-up">{title}</h1>
				<p className="text-white font-size-36 font-bold! text-fade-up">{mainDescription}</p>
				<p className="text-white max-w-[87%] mx-auto text-fade-up">{secondDescription}</p>
			</div>

			{/* Cards */}
			<ServicesCards cards={cards} />
		</section>
	);
}
