import { PortfolioPage } from "@/types/content";
import React from "react";

export default function DescriptionSection({ content }: { content: PortfolioPage["descriptionSection"] }) {
	return (
		<section className="grid  pt-8 md:pt-12 lg:pt-[7.29vw] px-4 md:px-8 lg:px-[2.34vw]">
			<div className="max-w-1/2 max-[767px]:max-w-[80%] max-[767px]:mb-8">
				<h2 className="max-w-[80%] max-[767px]:max-w-full lg:max-w-[65%] leading-[1.2]! max-[565px]:text-[20px]!">{content.title}</h2>
			</div>
			<div className="max-w-1/2 ml-auto lg:mt-[-2.6vw] max-[480px]:max-w-full min-[766px]:py-[2.34vw] max-[767px]:max-w-[80%] max-[767px]:mb-4">
				{content.points.map((point, index) => (
					<div
						key={index}
						className="flex items-start mb-3 md:mb-[2.6vw]"
					>
						<h3
							className="flex-2 lg:flex-1 font-semibold text-orange uppercase"
							style={{ fontSize: "clamp(0.65rem, 1.042vw, 1.042vw)" }}
						>
							{point.title}
						</h3>
						<span className="flex-7 lg:flex-5 mb-0!" style={{ fontSize: "clamp(0.65rem, 1.042vw, 1.042vw)" }}>{point.description}</span>
					</div>
				))}
			</div>
		</section>
	);
}
