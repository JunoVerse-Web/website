"use client";
import clsx from "clsx";
import FlipCards from "../../animations/FlipCards";
import { CardsType } from "@/types/global-types";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

export default function CardsContainer({ content }: { content: CardsType[] }) {
	const cardsClass = "relative w-full h-full aspect-397/595 object-cover";

	const cardContainerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const items = gsap.utils.toArray<HTMLElement>(".flip-card-item");
			items.map((item) => gsap.set(item, { opacity: 0, yPercent: 8 }));

			const st = ScrollTrigger.create({
				trigger: cardContainerRef.current,
				start: "top center",
				once: true, 
				onEnter: () => {
					gsap.fromTo(items, {
						opacity: 0,
						yPercent: 8, 
						stagger: 0.15,
						duration: 0.6,
						ease: "power2.out",
					}, {
						opacity: 1,
						yPercent: 0,
						stagger: 0.15,
					});
				},
			});

			const videos = cardContainerRef.current?.querySelectorAll("video") ?? [];
			videos.forEach((video) => {
				video.addEventListener("loadedmetadata", () => ScrollTrigger.refresh(), { once: true });
			});

			return () => st.kill();
		},
		{ scope: cardContainerRef },
	);

	return (
		<div className="relative px-[7vw] pt-[2vw] pb-[3vw]">
			<div
				className="grid grid-cols-3 gap-(--spacing-2)"
				ref={cardContainerRef}
			>
				{content.map((card, index) => (
					<div
						key={index}
						className="flip-card-item opacity-0"
					>
						<FlipCards
							link={content[index].link}
							front={
								<div className={clsx(cardsClass)}>
									<video
										className="pointer-events-none h-full w-full object-cover"
										src={card.video}
										autoPlay
										muted
										loop
										playsInline
										preload="auto"
										controls={false}
									>
										Your browser does not support the video tag.
									</video>
								</div>
							}
							back={
								<div className={clsx(cardsClass)}>
									<video
										className="pointer-events-none h-full w-full object-cover"
										src={card.video}
										autoPlay
										muted
										loop
										playsInline
										preload="auto"
										controls={false}
									>
										Your browser does not support the video tag.
									</video>
								</div>
							}
						/>
					</div>
				))}
			</div>
		</div>
	);
}