import React from "react";

export default function OurThinkingSection({ title }: { title: string }) {
	return (
		<section className="relative z-10 bg-gray px-[10.4vw] text-center py-[7.2vw]">
			<h2>{title}</h2>
		</section>
	);
}
