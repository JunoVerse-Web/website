import clsx from "clsx";
import Image from "next/image";
import FlipCards from "../../animations/FlipCards";
import logo from "../../../../public/juno-logo.svg";

import JunoCard1 from "../../../../public/JUNO-Deck-image-1.webp";
import JunoCard2 from "../../../../public/JUNO-Deck-image-2.webp";
import JunoCard3 from "../../../../public/JUNO-Deck-image-3.webp";
import JunoCard4 from "../../../../public/JUNO-Deck-image-4.webp";
import JunoCard5 from "../../../../public/JUNO-Deck-image-5.webp";
import JunoCard6 from "../../../../public/JUNO-Deck-image-6.webp";

export default function CardsContainer() {
	const cardsClass = "relative w-full h-full aspect-397/595 object-cover";
	const cardTagsClass = "cardTags";


	const cardTagNames = ["Our Philosophy", "Our Services", "Our Creations", "Our World", "Our Folks", "Our Culture"];

	return (
		<section className="px-[7vw] pt-[2vw] pb-[3vw]">
			<div className="grid grid-cols-3 gap-(--spacing-2)">
				<FlipCards
					front={
						<div className={clsx(cardsClass)}>
							<Image
								src={JunoCard1}
								alt="Juno Logo"
								fill
								sizes="auto"
								loading="eager"
							/>
							<p className={clsx(cardTagsClass)}>{cardTagNames[0]}</p>
						</div>
					}
					back={
						<div className={clsx(cardsClass)}>
							<Image
								src={JunoCard1}
								alt="Juno Logo"
								fill
								sizes="auto"
								loading="eager"
							/>
							<p className={clsx(cardTagsClass)}>{cardTagNames[0]}</p>
						</div>
					}
				/>
				<FlipCards
					repeat={true}
					front={
						<div className={cardsClass}>
							<Image
								src={JunoCard2}
								alt="Juno Logo"
								fill
								sizes="auto"
								loading="eager"
							/>
							<p className={clsx(cardTagsClass)}>{cardTagNames[1]}</p>
						</div>
					}
					back={
						<div className={cardsClass}>
							<Image
								src={JunoCard2}
								alt="Juno Logo"
								fill
								sizes="auto"
								loading="eager"
							/>
							<p className={clsx(cardTagsClass)}>{cardTagNames[1]}</p>
						</div>
					}
				/>
				<FlipCards
					repeat={true}
					front={
						<div className={cardsClass}>
							<Image
								src={JunoCard3}
								alt="Juno Logo"
								fill
								sizes="auto"
								loading="eager"
							/>
							<p className={clsx(cardTagsClass)}>{cardTagNames[2]}</p>
						</div>
					}
					back={
						<div className={cardsClass}>
							<Image
								src={JunoCard3}
								alt="Juno Logo"
								fill
								sizes="auto"
								loading="eager"
							/>
							<p className={clsx(cardTagsClass)}>{cardTagNames[2]}</p>
						</div>
					}
				/>
				<FlipCards
					repeat={true}
					front={
						<div className={cardsClass}>
							<Image
								src={JunoCard4}
								alt="Juno Logo"
								fill
								sizes="auto"
								loading="eager"
							/>
							<p className={clsx(cardTagsClass)}>{cardTagNames[3]}</p>
						</div>
					}
					back={
						<div className={cardsClass}>
							<Image
								src={JunoCard4}
								alt="Juno Logo"
								fill
								sizes="auto"
								loading="eager"
							/>
							<p className={clsx(cardTagsClass)}>{cardTagNames[3]}</p>
						</div>
					}
				/>
				<FlipCards
					repeat={true}
					front={
						<div className={cardsClass}>
							<Image
								src={JunoCard5}
								alt="Juno Logo"
								fill
								sizes="auto"
								loading="eager"
							/>
							<p className={clsx(cardTagsClass)}>{cardTagNames[4]}</p>
						</div>
					}
					back={
						<div className={cardsClass}>
							<Image
								src={JunoCard5}
								alt="Juno Logo"
								fill
								sizes="auto"
								loading="eager"
							/>
							<p className={clsx(cardTagsClass)}>{cardTagNames[4]}</p>
						</div>
					}
				/>
				<FlipCards
					repeat={true}
					front={
						<div className={cardsClass}>
							<Image
								src={JunoCard6}
								alt="Juno Logo"
								fill
								sizes="auto"
								loading="eager"
							/>
							<p className={clsx(cardTagsClass)}>{cardTagNames[5]}</p>
						</div>
					}
					back={
						<div className={cardsClass}>
							<Image
								src={JunoCard6}
								alt="Juno Logo"
								fill
								sizes="auto"
								loading="eager"
							/>
							<p className={clsx(cardTagsClass)}>{cardTagNames[5]}</p>
						</div>
					}
				/>
			</div>
		</section>
	);
}
