import { HomePage } from "@/types/content";
import FlyingCards from "../../animations/FlyingCards";
import Image from "next/image";
import clsx from "clsx";
import Card1 from "../../../../public/JUNO-card-1.webp";
import Card2 from "../../../../public/JUNO-card-2.webp";
import Card3 from "../../../../public/JUNO-card-3.webp";
import Card4 from "../../../../public/JUNO-card-4.webp";

export default function DecisionSection({ content }: { content: HomePage }) {
	const { title, description, ctaDescription, ctaLink, cards } = content.decisionSection;

	const backgroundImage = "absolute w-full h-full object-cover pointer-events-none z-0";

	return (
		<section
			data-section="decision"
			className="relative pt-[11.46vw] px-[6.25vw] pb-[9.38vw] bg-[#052447]"
		>
			{/* Background Decor */}
			<span
				data-background="top"
				className="absolute top-0 left-0 right-0 translate-y-[-50%] w-[85%] h-auto aspect-square rounded-full z-0 blur-[80px]"
			></span>
			<span
				data-background="bottom"
				className="absolute bottom-[22%] left-[12.5%] right-0 translate-x-[-25%] w-[150%] h-[15%] rounded-[100%] z-0 blur-[80px]"
			></span>

			{/* Top Content */}
			<div className="relative z-10 text-center md-[1.4rem] lg:mb-[3.13vw]">
				<h2 className="font-size-56 text-white">{title}</h2>
				<p className="text-white">{description}</p>
			</div>

			{/* Card Content */}
			<div className="relative z-10 grid grid-cols-4 gap-[1.56vw] md:mb-12 lg:mb-[4.17vw]">
				<FlyingCards
					cardImage={
						<Image
							src={Card1}
							alt="Juno Card 1"
							className={clsx(backgroundImage)}
							sizes={"auto"}
							fill
						/>
					}
					text={cards[0].text}
				/>
				<FlyingCards
					cardImage={
						<Image
							src={Card2}
							alt="Juno Card 2"
							className={clsx(backgroundImage)}
							sizes={"auto"}
							fill
						/>
					}
					text={cards[1].text}
				/>
				<FlyingCards
					cardImage={
						<Image
							src={Card3}
							alt="Juno Card 3"
							className={clsx(backgroundImage)}
							sizes={"auto"}
							fill
						/>
					}
					text={cards[2].text}
				/>
				<FlyingCards
					cardImage={
						<Image
							src={Card4}
							alt="Juno Card 4"
							className={clsx(backgroundImage)}
							sizes={"auto"}
							fill
						/>
					}
					text={cards[3].text}
				/>
			</div>

			{/* Bottom CTA Line */}
			<div className="relative z-10 flex items-center justify-center">
				<p className="text-white">{ctaDescription}</p>
				<a
					href={ctaLink.link}
					className="text-white"
					target="_blank"
				>
					{ctaLink.name}
				</a>
			</div>
		</section>
	);
}
