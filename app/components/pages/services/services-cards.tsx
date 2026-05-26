import { ServicesCardType } from "@/types/global-types";
import React from "react";
import SingleFlipCards from "../../animations/SingleFlipCards";
import CardThumbnail from "../../../../public/JUNO-Deck-image-1.webp";
import Image from "next/image";
// import clsx from "clsx";'
import FrontBlueCard from "../../../../public/Juno-blue-card.png";
import MagicMakers from "../../../../public/magic-makers.png";

export default function ServicesCards({ cards }: { cards: ServicesCardType[] }) {
	return (
		<div className="relative pb-[19.27vw]">
			<span className="absolute w-full h-[42.6vw] bottom-0 left-0 right-0 bg-yellow m-0!"></span>
			<div className="grid grid-cols-3 px-[16.93vw] gap-4 md:gap-7 lg:gap-[1.88vw]">
				<SingleFlipCards
					front={
						<FrontCardComponent
							currentCard={cards[0]}
						/>
					}
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
				<SingleFlipCards
					front={
						<FrontCardComponent
							currentCard={cards[1]}
						/>
					}
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
				<SingleFlipCards
					front={
						<FrontCardComponent
							currentCard={cards[2]}
						/>
					}
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
				<SingleFlipCards
					front={
						<FrontCardComponent
							currentCard={cards[3]}
						/>
					}
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
				<SingleFlipCards
					front={
						<FrontCardComponent
							currentCard={cards[4]}
						/>
					}
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
	);
}

// Fixed FrontCardComponent
function FrontCardComponent({ currentCard }: { currentCard?: ServicesCardType }) {
	return (
		<div className="relative w-full h-full object-cover overflow-hidden rounded-xl">
			{
				<Image
					src={FrontBlueCard}
					alt={'Card Thumbnail'}
					sizes="(max-width: 768px) 100vw, 400px"
					loading="eager"
					className="object-cover absolute inset-0 w-full h-full z-0 pointer-events-none"
					priority
				/>
			}
			<div className="absolute w-full h-full flex flex-col items-center justify-center z-10 text-center gap-5">
				<span className="font-size-36 m-0! font-bold! text-yellow leading-[1.2]! px-[15%] flex-8 flex flex-col justify-end">{currentCard?.title}</span>
				<span className="font-size-18 m-0! text-white px-[16%] flex-8">{currentCard?.description}</span>
			</div>
		</div>
	);
}

function BackCardComponent({ cardImage }: { cardImage: React.ReactNode }) {
	return <div className="relative w-full h-full object-cover overflow-hidden rounded-xl">{cardImage}</div>;
}
