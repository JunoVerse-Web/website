import React from "react";
import Image from "next/image";
import { PortfolioPage } from "@/types/content";
import clsx from "clsx";

export default function SingleImageSection({ content, className }: { content: PortfolioPage["singleImageType"]; className?: string }) {
	return (
		<section className={clsx("px-4 md:px-8 lg:px-[2.34vw]", className)}>
			<div className="relative w-full aspect-[1920/690] overflow-hidden">
				<Image
					src={content}
					alt={`Single image`}
					fill
					className="object-cover transition-transform duration-500"
					sizes="(max-width: 768px) 100vw, 33vw"
				/>
			</div>
		</section>
	);
}
