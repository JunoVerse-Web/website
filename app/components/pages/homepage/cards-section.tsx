import React from "react";
import FlipCards from "../../animations/FlipCards";

export default function CardsSection() {
	return (
		<section className="bg-yellow px-[17vw] pt-[2vw] pb-[3vw]">
			<div className="grid grid-cols-3 gap-(--spacing-2)">
				<FlipCards>
					<h1>Flip Cards</h1>
				</FlipCards>
				<FlipCards>
					<h1>Flip Cards</h1>
				</FlipCards>
				<FlipCards>
					<h1>Flip Cards</h1>
				</FlipCards>
				<FlipCards>
					<h1>Flip Cards</h1>
				</FlipCards>
				<FlipCards>
					<h1>Flip Cards</h1>
				</FlipCards>
				<FlipCards>
					<h1>Flip Cards</h1>
				</FlipCards>
			</div>
		</section>
	);
}
