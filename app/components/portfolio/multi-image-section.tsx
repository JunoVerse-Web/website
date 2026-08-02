"use client";

// components/MultiImageSection.tsx
import Image from "next/image";
import Divider from "../shared/divider";
import { PortfolioPage } from "@/types/content";
import clsx from "clsx";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type LayoutType = "1-1-1" | "2-1" | "1-2";

interface MultiImageSectionProps {
	images: PortfolioPage["galleryImagesType"]; // Array of image URLs
	layout?: LayoutType;
	className?: string;
	divider?: boolean;
	dividerPosition?: "top" | "bottom";
}

export default function MultiImageSection({ images, layout = "1-1-1", className = "", divider = false, dividerPosition = "bottom" }: MultiImageSectionProps) {
	const imageWrapRef = useRef<HTMLDivElement>(null);
	useGSAP(
		() => {
			const imageWrap = imageWrapRef.current;
			if (!imageWrap) return;

			const galleryImagesWrap = gsap.utils.toArray<HTMLElement>(imageWrap.querySelectorAll(".gallery-image"));

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: imageWrap,
					start: "top 80%",
					end: "bottom 20%",
					scrub: 0.1,
				},
			});

			galleryImagesWrap.forEach((wrapper, i) => {
				const targetImg = wrapper.querySelector("img");
				if (!targetImg) return;

				tl.fromTo(wrapper, { yPercent: 10 * (i + 1) }, { yPercent: -10 * (i + 1), ease: "none" }, 0);
				// tl.fromTo(targetImg, { yPercent: 5 }, { yPercent: -5, ease: "none" }, "<");
			});

			return () => {
				tl.scrollTrigger?.kill();
				tl.kill();
			};
		},
		{ scope: imageWrapRef },
	);

	if (!images || images.length === 0) return null;

	return (
		<section className={`w-full ${className}`}>
			{divider && dividerPosition === "top" && <Divider />}

			<div
				className="px-4 md:px-8 lg:px-[2.34vw] max-md:pt-[8px] py-4 md:py-8 lg:py-[2.34vw]"
				ref={imageWrapRef}
			>
				{layout === "1-1-1" && (
					<div className="grid md:grid-cols-3 gap-4 md:gap-[0.83vw]">
						{images.map((src, index) => {
							if (index >= 3) return null;

							if (src) {
								return (
									<div
										key={index}
										className="gallery-image relative aspect-square overflow-hidden"
									>
										<Image
											src={src}
											alt={`Gallery image ${index + 1}`}
											loading="eager"
											quality={100}
											className="object-cover transition-transform duration-500"
											width={595}
											height={595}
										/>
									</div>
								);
							}
						})}
					</div>
				)}

				{layout === "2-1" && (
					<div className="space-y-4">
						<div className="grid grid-cols-3 md:gap-4 gap-[8px]">
							{images.map((src, index) => {
								if (index >= 2) return null;
								if (src) {
									return (
										<div
											key={index}
											className={clsx(
												"gallery-image relative overflow-hidden",
												index === 0 ? "col-start-1 col-end-3 aspect-[1200/595]" : "col-start-3",
											)}
										>
											<Image
												src={src}
												alt={`Gallery image ${index + 1}`}
												loading="eager"
												quality={100}
												className="object-cover w-full h-full"
												width={index === 0 ? 1200 : 595}
												height={595}
											/>
										</div>
									);
								}
							})}
						</div>
					</div>
				)}

				{layout === "1-2" && (
					<div className="space-y-4">
						<div className="grid grid-cols-3 md:gap-4 gap-[8px]">
							{images.map((src, index) => {
								if (index >= 2) return null;
								return (
									<div
										key={index}
										className={clsx(
											"gallery-image relative overflow-hidden",
											index === 0 ? "col-start-1" : "col-start-2 col-end-4 aspect-[1200/595]",
										)}
									>
										<Image
											src={src}
											alt={`Gallery image ${index + 1}`}
											loading="eager"
											quality={100}
											className="object-cover w-full h-full"
											width={index === 0 ? 595 : 1200}
											height={595}
										/>
									</div>
								);
							})}
						</div>
					</div>
				)}
			</div>
			{divider && dividerPosition === "bottom" && <Divider />}
		</section>
	);
}
