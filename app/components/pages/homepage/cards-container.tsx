"use client";
import clsx from "clsx";
import FlipCards from "../../animations/FlipCards";
import { CardsType } from "@/types/global-types";

export default function CardsContainer({ content }: { content: CardsType[] }) {
	const cardsClass = "relative w-full h-full aspect-397/595 object-cover";

	return (
		<div className="relative px-[7vw] pt-[2vw] pb-[3vw]">
			<div className="grid grid-cols-3 gap-(--spacing-2)">
				{content.map((card, index) => {
					return (
						<FlipCards
							key={index}
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
					);
				})}
			</div>
		</div>
	);
}
