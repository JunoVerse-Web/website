"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { PortfolioPage } from "@/types/content";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function DescriptionSection({ content }: { content: PortfolioPage["descriptionSection"] }) {
	const titleWrapRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const pointsRef = useRef<HTMLDivElement>(null);
	const sectionWrapRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const title = titleRef.current;
			if (!title) return;

			let split: SplitText | undefined;
			let titleTween: gsap.core.Tween | undefined;
			let pointsTween: gsap.core.Timeline | undefined;
			let cancelled = false;

			document.fonts.ready.then(() => {
				if (cancelled || !title) return;

				split = SplitText.create(title, {
					type: "lines",
					mask: "lines", // auto-wraps each line in an overflow-hidden div
					linesClass: "split-line",
				});

				gsap.set(split.lines, { yPercent: 110, opacity: 0 });

				titleTween = gsap.to(split.lines, {
					yPercent: 0,
					opacity: 1,
					duration: 0.8,
					ease: "power3.out",
					stagger: 0.08,
					scrollTrigger: {
						trigger: title,
						start: "top 85%",
						once: true,
					},
				});
			});

			const rows = gsap.utils.toArray<HTMLElement>(pointsRef.current?.children ?? []);

			if (rows.length) {
				gsap.set(rows, { y: 24, opacity: 0 });

				pointsTween = gsap
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

			// Runs when the media query stops matching, or via mm.revert() below.
			return () => {
				cancelled = true;
				titleTween?.scrollTrigger?.kill();
				titleTween?.kill();
				split?.revert();
				pointsTween?.scrollTrigger?.kill();
				pointsTween?.kill();
			};
		},
		{ scope: titleRef },
	);

	useGSAP(
		() => {
			const sectionWrap = sectionWrapRef.current;
			const titleWrap = titleWrapRef.current;
			const pointsWrap = pointsRef.current;
			if (!sectionWrap || !titleWrap) return;

			const mm = gsap.matchMedia();

			mm.add("(min-width: 969px)", () => {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: sectionWrap,
						start: "top bottom",
						end: "bottom top",
						scrub: 0.7,
					},
				});

				tl.to(titleWrap, {
					yPercent: 10,
					ease: "power3.out",
				}).to(
					pointsWrap,
					{
						yPercent: -15,
						ease: "power3.out",
					},
					"<",
				);

				return () => {
					tl.scrollTrigger?.kill();
					tl.kill();
				};
			});

			return () => {
				mm.revert();
			};
		},
		{ scope: sectionWrapRef },
	);

	return (
		<section
			className="grid  pt-8 md:pt-12 lg:pt-[7.29vw] px-4 md:px-8 lg:px-[2.34vw]"
			ref={sectionWrapRef}
		>
			<div
				className="max-w-1/2 max-[767px]:max-w-[80%] max-[767px]:mb-8"
				ref={titleWrapRef}
			>
				<h2
					ref={titleRef}
					className="max-w-[80%] max-[767px]:max-w-full lg:max-w-[65%] leading-[1.2]! max-[565px]:text-[20px]!"
				>
					{content.title}
				</h2>
			</div>
			<div
				ref={pointsRef}
				className="max-w-1/2 ml-auto lg:mt-[-2.6vw] max-[480px]:max-w-full min-[766px]:py-[2.34vw] max-[767px]:max-w-[80%] max-[767px]:mb-4"
			>
				{content.points.map((point, index) => (
					<div
						key={index}
						className="flex max-[565px]:flex-col items-start mb-3 md:mb-[2.6vw]"
					>
						<h3
							className="flex-2 lg:flex-1 font-semibold text-orange uppercase"
							style={{ fontSize: "clamp(0.65rem, 1.042vw, 1.042vw)" }}
						>
							{point.title}
						</h3>
						<span
							className="flex-7 lg:flex-5 mb-0!"
							style={{ fontSize: "clamp(0.65rem, 1.042vw, 1.042vw)" }}
						>
							{point.description}
						</span>
					</div>
				))}
			</div>
		</section>
	);
}
