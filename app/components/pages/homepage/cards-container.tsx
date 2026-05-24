import clsx from "clsx";
import Image from "next/image";
import FlipCards from "../../animations/FlipCards";
import { HomeHeroCardsType } from "@/types/global-types";

import FirstCardThumbnail from "../../../../public/JUNO-Deck-image-1.webp";
import SecondCardThumbnail from "../../../../public/JUNO-Deck-image-2.webp";
import ThirdCardThumbnail from "../../../../public/JUNO-Deck-image-3.webp";
import FourthCardThumbnail from "../../../../public/JUNO-Deck-image-4.webp";
import FifthCardThumbnail from "../../../../public/JUNO-Deck-image-5.webp";
import SixthCardThumbnail from "../../../../public/JUNO-Deck-image-6.webp";

export default function CardsContainer({ content }: { content: HomeHeroCardsType[] }) {
	const cardsClass = "relative w-full h-full aspect-397/595 object-cover";
	const cardTagsClass = "cardTags";

	return (
		<div className="relative px-[7vw] pt-[2vw] pb-[3vw]">
			<div className="grid grid-cols-3 gap-(--spacing-2)">
				<FlipCards
					link={content[0].link}
					front={
						<div className={clsx(cardsClass)}>
							<Image
								src={FirstCardThumbnail}
								alt={content[0].title + " Card Thumbnail"}
								fill
								sizes="auto"
								loading="eager"
							/>
							<p className={clsx(cardTagsClass)}>{content[0].title}</p>
						</div>
					}
					back={
						<div className={clsx(cardsClass)}>
							<Image
								src={FirstCardThumbnail}
								alt={content[0].title + " Card Thumbnail"}
								fill
								sizes="auto"
								loading="eager"
							/>
							<p className={clsx(cardTagsClass)}>{content[0].title}</p>
						</div>
					}
				/>
				<FlipCards
					link={content[1].link}
					repeat={true}
					front={
						<div className={cardsClass}>
							<Image
								src={SecondCardThumbnail}
								alt={content[1].title + " Card Thumbnail"}
								fill
								sizes="auto"
								loading="eager"
							/>
							<p className={clsx(cardTagsClass)}>{content[1].title}</p>
						</div>
					}
					back={
						<div className={cardsClass}>
							<Image
								src={SecondCardThumbnail}
								alt={content[1].title + " Card Thumbnail"}
								fill
								sizes="auto"
								loading="eager"
							/>
							<p className={clsx(cardTagsClass)}>{content[1].title}</p>
						</div>
					}
				/>
				<FlipCards
					link={content[2].link}
					repeat={true}
					front={
						<div className={cardsClass}>
							<Image
								src={ThirdCardThumbnail}
								alt={content[2].title + " Card Thumbnail"}
								fill
								sizes="auto"
								loading="eager"
							/>
							<p className={clsx(cardTagsClass)}>{content[2].title}</p>
						</div>
					}
					back={
						<div className={cardsClass}>
							<Image
								src={ThirdCardThumbnail}
								alt={content[2].title + " Card Thumbnail"}
								fill
								sizes="auto"
								loading="eager"
							/>
							<p className={clsx(cardTagsClass)}>{content[2].title}</p>
						</div>
					}
				/>
				<FlipCards
					link={content[3].link}
					repeat={true}
					front={
						<div className={cardsClass}>
							<Image
								src={FourthCardThumbnail}
								alt={content[3].title + " Card Thumbnail"}
								fill
								sizes="auto"
								loading="eager"
							/>
							<p className={clsx(cardTagsClass)}>{content[3].title}</p>
						</div>
					}
					back={
						<div className={cardsClass}>
							<Image
								src={FourthCardThumbnail}
								alt={content[3].title + " Card Thumbnail"}
								fill
								sizes="auto"
								loading="eager"
							/>
							<p className={clsx(cardTagsClass)}>{content[3].title}</p>
						</div>
					}
				/>
				<FlipCards
					link={content[4].link}
					repeat={true}
					front={
						<div className={cardsClass}>
							<Image
								src={FifthCardThumbnail}
								alt={content[4].title + " Card Thumbnail"}
								fill
								sizes="auto"
								loading="eager"
							/>
							<p className={clsx(cardTagsClass)}>{content[4].title}</p>
						</div>
					}
					back={
						<div className={cardsClass}>
							<Image
								src={FifthCardThumbnail}
								alt={content[4].title + " Card Thumbnail"}
								fill
								sizes="auto"
								loading="eager"
							/>
							<p className={clsx(cardTagsClass)}>{content[4].title}</p>
						</div>
					}
				/>
				<FlipCards
					link={content[5].link}
					repeat={true}
					front={
						<div className={cardsClass}>
							<Image
								src={SixthCardThumbnail}
								alt={content[5].title + " Card Thumbnail"}
								fill
								sizes="auto"
								loading="eager"
							/>
							<p className={clsx(cardTagsClass)}>{content[5].title}</p>
						</div>
					}
					back={
						<div className={cardsClass}>
							<Image
								src={SixthCardThumbnail}
								alt={content[5].title + " Card Thumbnail"}
								fill
								sizes="auto"
								loading="eager"
							/>
							<p className={clsx(cardTagsClass)}>{content[5].title}</p>
						</div>
					}
				/>
			</div>
		</div>
	);
}
