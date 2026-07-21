import clsx from "clsx";
import Image from "next/image";
import FlipCards from "../../animations/FlipCards";
import { CardsType } from "@/types/global-types";

import FirstCardThumbnail from "../../../../public/general/JUNO-Deck-image-1.webp";
import SecondCardThumbnail from "../../../../public/general/JUNO-Deck-image-2.webp";
import ThirdCardThumbnail from "../../../../public/general/JUNO-Deck-image-3.webp";
import FourthCardThumbnail from "../../../../public/general/JUNO-Deck-image-4.webp";
import FifthCardThumbnail from "../../../../public/general/JUNO-Deck-image-5.webp";

export default function CardsContainer({ content }: { content: CardsType[] }) {
	const cardsClass = "relative w-full h-full aspect-397/595 object-cover";
	const cardTagsClass = "cardTags";

	const cardThumbnails = [FirstCardThumbnail, SecondCardThumbnail, ThirdCardThumbnail, FourthCardThumbnail, FifthCardThumbnail];

	return (
		<div className="relative px-[7vw] pt-[2vw] pb-[3vw]">
			<div className="grid grid-cols-3 gap-(--spacing-2)">
				{cardThumbnails.map((thumbnail, index) => {
					return (
						<FlipCards
							key={index}
							link={content[index].link}
							front={
								<div className={clsx(cardsClass)}>
									<Image
										src={thumbnail}
										alt={content[index].title + " Card Thumbnail"}
										fill
										sizes="auto"
										loading="eager"
									/>
									<p className={clsx(cardTagsClass)}>{content[index].title}</p>
								</div>
							}
							back={
								<div className={clsx(cardsClass)}>
									<Image
										src={thumbnail}
										alt={content[index].title + " Card Thumbnail"}
										fill
										sizes="auto"
										loading="eager"
									/>
									<p className={clsx(cardTagsClass)}>{content[index].title}</p>
								</div>
							}
						/>
					);
				})}
			</div>
		</div>
	);
}
