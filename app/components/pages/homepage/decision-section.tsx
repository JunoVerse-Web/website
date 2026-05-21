import { HomePage } from "@/types/content";
import React from "react";

export default function DecisionSection({ content }: { content: HomePage }) {
	const { title, description, ctaDescription, ctaLink } = content.decisionSection;

	return (
		<section
			data-section="decision"
			className="pt-[11.46vw] px-[6.25vw] pb-[9.38vw] bg-yellow"
		>
            {/* Top Content */}
			<div className="text-center">
				<h2 className="font-size-56 text-white">{title}</h2>
				<p className="text-white">{description}</p>
			</div>

            {/* Card Content */}

            {/* Bottom CTA Line */}
			<div className="flex items-center justify-center">
				<p className="text-white">{ctaDescription}</p>
				<a
					href={ctaLink.link}
					className="text-white"
				>
					{ctaLink.name}
				</a>
			</div>
		</section>
	);
}
