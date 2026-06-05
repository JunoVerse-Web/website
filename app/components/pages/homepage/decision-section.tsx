import { HomePage } from "@/types/content";
import FlyingCards from "../../animations/FlyingCards";
import Image from "next/image";
import clsx from "clsx";
import Card1 from "../../../../public/general/JUNO-card-1.webp";
import Card2 from "../../../../public/general/JUNO-card-2.webp";
import Card3 from "../../../../public/general/JUNO-card-3.webp";
import Card4 from "../../../../public/general/JUNO-card-4.webp";

export default function DecisionSection({ content }: { content: HomePage }) {
	const { title, description, ctaDescription, ctaLink, cards } = content.decisionSection;

	const backgroundImage = "absolute w-full h-full object-cover pointer-events-none z-0";

	const cardImages = [Card1, Card2, Card3, Card4];
	

	return (
		<section
			data-section="decision"
			className="relative pt-[11.46vw] px-[6.25vw] pb-[9.38vw] bg-[#052447]"
		>
			{/* Background Decor */}
			<span
				data-background="top"
				className="absolute top-0 left-0 right-0 translate-y-[-50%] w-[85%] h-auto aspect-square rounded-full"
			></span>
			<span
				data-background="bottom"
				className="absolute bottom-[22%] left-[12.5%] right-0 translate-x-[-25%] w-[150%] h-[15%] rounded-[100%]"
			></span>

			{/* Top Content */}
			<div className="relative z-10 text-center md-[1.4rem] lg:mb-[3.13vw]">
				<h2 className="font-size-56 text-white">{title}</h2>
				<p className="text-white">{description}</p>
			</div>

			{/* Card Content */}
			<div className="relative z-10 grid grid-cols-4 gap-[1.56vw] md:mb-12 lg:mb-[4.17vw]">
				{cards.map((card, index) => (
					<FlyingCards
						key={index}
						cardImage={
							<Image
								src={cardImages[index]}
								alt={`Juno Card ${index + 1}`}
								className={clsx(backgroundImage)}
								sizes={"auto"}
								fill
								loading="eager"
							/>
						}
						text={card.text}
						cardData={card.cardData}
					/>
				))}
			</div>

			{/* Bottom CTA Line */}
			<div className="relative z-10 flex items-center justify-center gap-1.5">
				<p className="text-white mb-0!">{ctaDescription}</p>
				<a
					href={ctaLink.link}
					className="text-white mb-0!"
					target="_blank"
				>
					{ctaLink.name}
				</a>
			</div>
		</section>
	);
}
