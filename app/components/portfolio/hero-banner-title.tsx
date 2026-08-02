"use client";
import Image from "next/image";
import { PortfolioPage } from "@/types/content";
import Divider from "../shared/divider";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useTextFadeUpObserver } from "@/hooks/useTextFadeUpObserver";


gsap.registerPlugin(ScrollTrigger, SplitText);

export default function HeroBannerTitle({ content }: { content: PortfolioPage["hero"] }) {
	const titleWrapRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const pointsRef = useRef<HTMLDivElement>(null);

	useTextFadeUpObserver();

	useGSAP(
		() => {
			const title = titleRef.current;
			if (!title) return;

			let split: SplitText | undefined;
			let titleTween: gsap.core.Tween | undefined;
			let pointsTween: gsap.core.Timeline | undefined; // ← Timeline, not Tween

			const rows = gsap.utils.toArray<HTMLElement>(pointsRef.current?.children ?? []);

			if (rows.length) {
				gsap.set(rows, { y: 24, opacity: 0 });

				pointsTween = gsap // ← removed `const`, assigns to outer variable
					.timeline({
						scrollTrigger: {
							trigger: pointsRef.current,
							start: "top 85%",
							once: true,
						},
					})
					.to(rows, {
						y: 0,
						opacity: 1,
						duration: 0.6,
						ease: "power3.out",
						stagger: 0.12,
					});
			}

			return () => {
				titleTween?.scrollTrigger?.kill();
				titleTween?.kill();
				split?.revert();
				pointsTween?.scrollTrigger?.kill();
				pointsTween?.kill();
			};
		},
		{ scope: titleRef },
	);

	return (
		<section data-section="portfolio-hero-section">
			<div className="relative w-full aspect-1080/660 md:aspect-1460/660 lg:aspect-1920/660 overflow-hidden bg-black flex items-center justify-center">
				<Image
					src={content.imageUrl}
					alt="Hero Banner Image"
					width={1200}
					height={600}
					className="w-full h-full object-cover object-center"
					loading="eager"
				/>
			</div>
			<div ref={titleWrapRef}>
				<h1
					className="uppercase text-center leading-[2.2]! m-0! lg:text-[5.21vw]! text-fade-up"
					ref={titleRef}
				>
					{content.title}
				</h1>
			</div>
			<Divider />
		</section>
	);
}
