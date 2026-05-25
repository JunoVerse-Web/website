import { CreationsCardType } from "@/types/global-types";
import CardsContainer from "./cards-container";

export default function HeroSection({
	title,
	description,
	cards,
}: {
	title: string;
	description: string;
	cards: CreationsCardType[];
}) {
	return (
		<section data-section="services-hero" className="grid gap-y-[39.06vw] pt-24 md:pt-40 lg:pt-[14.58vw]">
			<div className="flex flex-col text-center px-[25.75vw]">
				<h1 className="text-white">{title}</h1>
				<p className="text-white">{description}</p>
			</div>

			<CardsContainer content={cards} />

		</section>
	);
}
