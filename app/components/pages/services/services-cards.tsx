import { ServicesCardType } from "@/types/global-types";
import React from "react";
import SingleFlipCards from "../../animations/SingleFlipCards";
import CardThumbnail from "../../../../public/JUNO-Deck-image-1.webp";
import Image from "next/image";
// import clsx from "clsx";

export default function ServicesCards({ cards }: { cards: ServicesCardType[] }) {
	return (
		<div className="relative pb-[19.27vw]">
      <span className="absolute w-full h-[42.6vw] bottom-0 left-0 right-0 bg-yellow m-0!"></span>
			<div className="grid grid-cols-3 px-[16.93vw] gap-4 md:gap-7 lg:gap-[1.88vw]">
				<SingleFlipCards
					front={
						<FrontCardComponent
							currentCard={cards[0]}
							cardImage={
								<Image
									src={CardThumbnail}
									alt={`${cards[0].title} Card Thumbnail`}
									fill
									sizes="(max-width: 768px) 100vw, 400px"
									loading="eager"
									className="object-cover"
									priority
								/>
							}
						/>
					}
					back={
						<BackCardComponent
							currentCard={cards[0]}
							cardImage={
								<Image
									src={CardThumbnail}
									alt={`${cards[0].title} Card Thumbnail`}
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
							currentCard={cards[0]}
							cardImage={
								<Image
									src={CardThumbnail}
									alt={`${cards[0].title} Card Thumbnail`}
									fill
									sizes="(max-width: 768px) 100vw, 400px"
									loading="eager"
									className="object-cover"
									priority
								/>
							}
						/>
					}
					back={
						<BackCardComponent
							currentCard={cards[0]}
							cardImage={
								<Image
									src={CardThumbnail}
									alt={`${cards[0].title} Card Thumbnail`}
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
							currentCard={cards[0]}
							cardImage={
								<Image
									src={CardThumbnail}
									alt={`${cards[0].title} Card Thumbnail`}
									fill
									sizes="(max-width: 768px) 100vw, 400px"
									loading="eager"
									className="object-cover"
									priority
								/>
							}
						/>
					}
					back={
						<BackCardComponent
							currentCard={cards[0]}
							cardImage={
								<Image
									src={CardThumbnail}
									alt={`${cards[0].title} Card Thumbnail`}
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
							currentCard={cards[0]}
							cardImage={
								<Image
									src={CardThumbnail}
									alt={`${cards[0].title} Card Thumbnail`}
									fill
									sizes="(max-width: 768px) 100vw, 400px"
									loading="eager"
									className="object-cover"
									priority
								/>
							}
						/>
					}
					back={
						<BackCardComponent
							currentCard={cards[0]}
							cardImage={
								<Image
									src={CardThumbnail}
									alt={`${cards[0].title} Card Thumbnail`}
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
							currentCard={cards[0]}
							cardImage={
								<Image
									src={CardThumbnail}
									alt={`${cards[0].title} Card Thumbnail`}
									fill
									sizes="(max-width: 768px) 100vw, 400px"
									loading="eager"
									className="object-cover"
									priority
								/>
							}
						/>
					}
					back={
						<BackCardComponent
							currentCard={cards[0]}
							cardImage={
								<Image
									src={CardThumbnail}
									alt={`${cards[0].title} Card Thumbnail`}
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
function FrontCardComponent({ currentCard, cardImage }: { currentCard: ServicesCardType; cardImage: React.ReactNode }) {
	return <div className="relative w-full h-full object-cover overflow-hidden rounded-xl">{cardImage}</div>;
}

function BackCardComponent({ currentCard, cardImage }: { currentCard: ServicesCardType; cardImage: React.ReactNode }) {
	return <div className="relative w-full h-full object-cover overflow-hidden rounded-xl">{cardImage}</div>;
}
