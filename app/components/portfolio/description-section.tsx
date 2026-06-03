import { PortfolioPage } from "@/types/content";
import React from "react";

export default function DescriptionSection({ content }: { content: PortfolioPage["descriptionSection"] }) {
	return (
		<section className="grid  pt-8 md:pt-12 lg:pt-[7.29vw] px-4 md:px-8 lg:px-[2.34vw]">
			<div className="max-w-1/2">
				<h2 className="max-w-[65%] leading-[1.2]!">{content.title}</h2>
			</div>
			<div className="max-w-1/2 ml-auto md:mt-[-2.6vw]">
				{content.points.map((point, index) => (
					<div key={index} className="flex items-start md:mb-[2.6vw]">
						<h3 className="flex-1 font-semibold text-orange uppercase text-sm! md:text-[0.83vw]!">{point.title}</h3>
						<span className="flex-5 mb-0! text-[1.15vw]!">{point.description}</span>
					</div>
				))}
			</div>
		</section>
	);
}
