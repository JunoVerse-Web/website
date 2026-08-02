"use client";

import { ServicesCardType } from "@/types/global-types";
import React from "react";
import SingleFlipCards from "../../animations/SingleFlipCards";
import Image from "next/image";
// import clsx from "clsx";'
import FrontBlueCard from "../../../../public/general/Juno-blue-card.png";
import MagicMakers from "../../../../public/general/magic-makers.png";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function ServicesCards({ cards }: { cards: ServicesCardType[] }) {
	const cardContainerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const items = gsap.utils.toArray<HTMLElement>(".tilt-card-item");
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


			return () => st.kill();
		},
		{ scope: cardContainerRef },
	);

	return (
		<div className="relative pb-[19.27vw] mt-[-30%] min-[970px]:mt-[-60%] min-[1181px]:mt-[-50%]">
			<span className="absolute w-full h-[96.5%] min-[566px]:h-[88%] min-[970px]:h-[45%] bottom-0 left-0 right-0 bg-yellow m-auto!"></span>
			<div
				className="grid min-[566px]:grid-cols-2 min-[969px]:grid-cols-3 gap-4 md:gap-7 min-[1181px]:gap-[1.88vw] max-[767px]:px-10 max-[1180px]:px-[10vw]  min-[1181px]:px-[16.93vw]"
				ref={cardContainerRef}
			>
				<div className="tilt-card-item">
					<SingleFlipCards
						front={<FrontCardComponent currentCard={cards[0]} />}
						back={
							<BackCardComponent
								cardImage={
									<Image
										src={MagicMakers}
										alt={`Card Thumbnail`}
										fill
										sizes="(max-width: 768px) 100vw, 400px"
										loading="eager"
										className="object-cover"
										priority
									/>
								}
							/>
						}
					/>
				</div>
				<div className="tilt-card-item">
					<SingleFlipCards
						front={<FrontCardComponent currentCard={cards[1]} />}
						back={
							<BackCardComponent
								cardImage={
									<Image
										src={MagicMakers}
										alt={`Card Thumbnail`}
										fill
										sizes="(max-width: 768px) 100vw, 400px"
										loading="eager"
										className="object-cover"
										priority
									/>
								}
							/>
						}
					/>
				</div>
				<div className="tilt-card-item">
					<SingleFlipCards
						front={<FrontCardComponent currentCard={cards[2]} />}
						back={
							<BackCardComponent
								cardImage={
									<Image
										src={MagicMakers}
										alt={`Card Thumbnail`}
										fill
										sizes="(max-width: 768px) 100vw, 400px"
										loading="eager"
										className="object-cover"
										priority
									/>
								}
							/>
						}
					/>
				</div>
				<div className="tilt-card-item">
					<SingleFlipCards
						front={<FrontCardComponent currentCard={cards[3]} />}
						back={
							<BackCardComponent
								cardImage={
									<Image
										src={MagicMakers}
										alt={`Card Thumbnail`}
										fill
										sizes="(max-width: 768px) 100vw, 400px"
										loading="eager"
										className="object-cover"
										priority
									/>
								}
							/>
						}
					/>
				</div>
				<div className="tilt-card-item">
					<SingleFlipCards
						front={<FrontCardComponent currentCard={cards[4]} />}
						back={
							<BackCardComponent
								cardImage={
									<Image
										src={MagicMakers}
										alt={`Card Thumbnail`}
										fill
										sizes="(max-width: 768px) 100vw, 400px"
										loading="eager"
										className="object-cover"
										priority
									/>
								}
							/>
						}
					/>
				</div>
			</div>
		</div>
	);
}

// Fixed FrontCardComponent
function FrontCardComponent({ currentCard }: { currentCard?: ServicesCardType }) {
	return (
		<div className="relative w-full h-full object-cover overflow-hidden rounded-xl">
			{
				<Image
					src={FrontBlueCard}
					alt={"Card Thumbnail"}
					sizes="(max-width: 768px) 100vw, 400px"
					loading="eager"
					className="object-cover absolute inset-0 w-full h-full z-0 pointer-events-none"
					priority
				/>
			}
			<div className="absolute w-full h-full flex flex-col items-center justify-center z-10 text-center gap-5 max-[1180px]:pb-[3rem]">
				<span className="font-size-36 m-0! font-bold! text-yellow leading-[1.2]! px-[15%] flex-8 flex flex-col justify-end">{currentCard?.title}</span>
				<span className="font-size-18 m-0! text-white px-[16%] flex-8">{currentCard?.description}</span>
			</div>
		</div>
	);
}

function BackCardComponent({ cardImage }: { cardImage: React.ReactNode }) {
	return <div className="relative w-full h-full object-cover overflow-hidden rounded-xl">{cardImage}</div>;
}
