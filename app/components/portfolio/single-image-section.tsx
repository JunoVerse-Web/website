'use client'

import Image from "next/image";
import { PortfolioPage } from "@/types/content";
import clsx from "clsx";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function SingleImageSection({ content, className }: { content: PortfolioPage["singleImageType"]; className?: string }) {
	const imageWrapRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const imageWrap = imageWrapRef.current;
			if (!imageWrap) return;

			const innerImage = imageWrap.querySelectorAll("img");

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: imageWrap,
					start: "top 80%",
					end: "bottom 20%",
					scrub: 0.6, // seconds of lag — smooths out fast/jerky scrolling
				},
			});

			tl.fromTo(innerImage, { yPercent: 5 }, { yPercent: -5, ease: "none" }, 0);

			return () => {
				tl.scrollTrigger?.kill();
				tl.kill();
			};
		},
		{ scope: imageWrapRef },
	);
	return (
		<section className={clsx("px-4 md:px-8 lg:px-[2.34vw]", className)} ref={imageWrapRef}>
			<div className="relative w-full aspect-[1920/690] overflow-hidden flex items-center justify-center">
				<Image
					src={content}
					alt={`Single image`}
					loading="eager"
					quality={100}
					className="object-cover object-center transition-transform scale-110 translate-y-[10%]"
					width={1920}
					height={720}
				/>
			</div>
		</section>
	);
}
