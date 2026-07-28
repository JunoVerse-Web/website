"use client";

import Image from "next/image";
import { SlideCardsType } from "@/types/global-types";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CardsContainer({ content }: { content: SlideCardsType[] }) {
	const cardContainerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const items = gsap.utils.toArray<HTMLElement>(".folks-card-item");
			items.map((item) => gsap.set(item, { opacity: 0, yPercent: 8 }));

			const st = ScrollTrigger.create({
				trigger: cardContainerRef.current,
				start: "top center",
				once: true,
				onEnter: () => {
					gsap.fromTo(
						items,
						{
							opacity: 0,
							yPercent: 8,
							stagger: 0.15,
							duration: 0.6,
							ease: "power2.out",
						},
						{
							opacity: 1,
							yPercent: 0,
							stagger: 0.15,
						},
					);
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
					<div key={index} className="folks-card-item opacity-0">
						<Card
							card={card}
							index={index}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

function Card({ card, index }: { card: SlideCardsType; index: number }) {
	const [toggled, setToggled] = useState(false);

	const containerRef = useRef<HTMLDivElement>(null);
	const frontCardRef = useRef<HTMLDivElement>(null);
	const backCardRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const frontCard = frontCardRef.current;
			const backCard = backCardRef.current;

			if (!frontCard || !backCard) return;

			if (toggled) {
				// Front card slides up and reveals back card
				gsap.to(frontCard, {
					// clipPath: "polygon(0 0, 100% 0, 100% 0%, 0% 0%)",
					clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
					transformOrigin: "top center",
					x: "-10%",
					duration: 0.85,
					ease: "power3.inOut",
				});

				gsap.to(backCard, {
					// clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
					x: "0%",
					transformOrigin: "bottom center",
					duration: 0.85,
					ease: "power3.inOut",
				});
			} else {
				// Restore front card
				gsap.to(frontCard, {
					clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
					transformOrigin: "top center",
					x: "0%",
					duration: 0.85,
					ease: "power3.inOut",
				});

				// Hide back card
				gsap.to(backCard, {
					// clipPath: "polygon(0 0, 100% 0, 100% 0%, 0% 0%)",
					transformOrigin: "bottom center",
					x: "10%",
					duration: 0.85,
					ease: "power3.inOut",
				});
			}
		},
		{
			scope: containerRef,
			dependencies: [toggled],
		},
	);

	return (
		<div
			ref={containerRef}
			className="relative w-full aspect-397/595 overflow-hidden rounded-lg md:rounded-[0.83vw] cursor-pointer"
			onClick={() => setToggled((prev) => !prev)}
			onMouseLeave={() => setToggled(false)}
		>
			{/* Back Card */}
			<div
				ref={backCardRef}
				className="absolute inset-0 z-0"
			>
				<Image
					src={card.backImage}
					alt={`Card ${index + 1} back`}
					fill
					className="object-fill!"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					loading="eager"
					quality={70}
				/>
			</div>

			{/* Front Card */}
			<div
				ref={frontCardRef}
				className="absolute inset-0 z-10"
				style={{
					clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
				}}
			>
				<Image
					src={card.frontImage}
					alt={`Card ${index + 1} front`}
					fill
					className="object-fill!"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					loading="eager"
					quality={70}
				/>
			</div>
		</div>
	);
}
