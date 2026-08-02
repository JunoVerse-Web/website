"use client";

import { PortfolioPage } from "@/types/content";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function SmallDescriptionSection({ className, content }: { className?: string; content: PortfolioPage["smallDescriptionSection"] }) {
	const sectionWrapRef = useRef<HTMLDivElement>(null);
	const contentWrapRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const sectionWrap = sectionWrapRef.current;
			const contentWrap = contentWrapRef.current;
			if (!sectionWrap || !contentWrap) return;

			const tween = gsap.fromTo(
				contentWrap,
				{ opacity: 0, xPercent: -10 },
				{
					opacity: 1,
					xPercent: 0,
					duration: 1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: sectionWrap,
						start: "top 80%",
						end: "bottom 20%",
						toggleActions: "play reverse play reverse", // enter, leave, enterBack, leaveBack
					},
				},
			);

			return () => {
				tween.scrollTrigger?.kill();
				tween.kill();
			};
		},
		{ scope: sectionWrapRef },
	);

	return (
		<section
			className={className}
			ref={sectionWrapRef}
		>
			<div
				className="max-[565px]:flex max-[565px]:flex-col grid grid-cols-10 items-start max-[480px]:max-w-full max-[767px]:max-w-[80%] max-w-[50%] px-4 md:px-8 lg:px-[2.34vw]"
				ref={contentWrapRef}
			>
				<h3
					className="col-start-1 col-end-3 font-semibold text-orange uppercase"
					style={{ fontSize: "clamp(0.65rem, 1.042vw, 1.042vw)" }}
				>
					{content.title}
				</h3>
				<span
					className="col-start-3 min-[768px]:col-end-9 col-end-10 mb-0!"
					style={{ fontSize: "clamp(0.65rem, 1.042vw, 1.042vw)" }}
				>
					{content.description}
				</span>
			</div>
		</section>
	);
}
