import clsx from "clsx";
import Image from "next/image";
import { CreationsCardType } from "@/types/global-types";

import FirstCardThumbnail from "../../../../public/JUNO-Deck-image-1.webp";
import TiltingCards from "../../animations/TiltingCards";

export default function CardsContainer({ content }: { content: CreationsCardType[] }) {
	const cardsClass = "relative w-full h-full aspect-397/595 object-cover";

	return (
		<div className="relative px-[7vw] pt-[2vw] pb-[3vw]">
			<div className="grid grid-cols-3 gap-(--spacing-2)">
				{Array.from({ length: 5 }).map((_, index) => (
					<TiltingCards
						key={index}
						url={"#"}
						content={
							<div className={clsx(cardsClass)}>
								<Image
									src={FirstCardThumbnail}
									alt={`Card Thumbnail ${index + 1}`}
									fill
									sizes="(max-width: 768px) 100vw, 33vw"
									loading="eager"
									className="object-cover"
								/>
							</div>
						}
					/>
				))}
			</div>
		</div>
	);
}
