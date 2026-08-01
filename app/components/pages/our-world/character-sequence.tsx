"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HoodleLogo from "./hoodle-logo";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_IMAGES = 20;
const framePath = (i: number) => `/our-world/sequence/hoodle-character-image-${i}.webp`;

export default function CharacterSequence() {
	const containerRef = useRef<HTMLDivElement>(null);
	const innerContainerRef = useRef<HTMLDivElement>(null); // pin target — GSAP owns its inline position styles
	const slideRef = useRef<HTMLDivElement>(null); // slide target — untouched by pin, safe to animate left/right
	const imgRef = useRef<HTMLImageElement>(null);

	useGSAP(() => {
		const frame = { current: 1 };
		const images = Array.from({ length: TOTAL_IMAGES }, (_, i) => framePath(i + 1));

		// Preload once, regardless of breakpoint.
		images.forEach((src) => {
			const img = new window.Image();
			img.src = src;
		});

		const mm = gsap.matchMedia();

		// Only the range between 565px and 969px gets the left-to-right slide.
		// Outside that range we still build the same pinned timeline (so the
		// character stays on screen and the frame sequence still plays), we
		// just skip adding the left tween.
		mm.add(
			{
				desktopRange: "(min-width: 969px)",
				tabletRange: "(min-width: 566px) and (max-width: 968px)",
				mobileRange: "(max-width: 565px)",
			},
			(context) => {
				const { tabletRange, desktopRange, mobileRange } = context.conditions as { tabletRange: boolean; desktopRange: boolean; mobileRange: boolean };

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: ".content-section",
						start: "10% 60%",
						end: "75% 40%",
						scrub: 0.7,
					},
				});

				tl.to(
					frame,
					{
						current: TOTAL_IMAGES,
						ease: "none",
						onUpdate: () => {
							const index = Math.round(frame.current);
							if (imgRef.current) imgRef.current.src = images[index - 1];
						},
					},
					0,
				);

				if (mobileRange) {
					gsap.timeline({
						scrollTrigger: {
							trigger: ".content-section",
							start: "80% center",
							end: "80% center",
							scrub: 0.7,
							markers: true,
						},
					}).to(slideRef.current, { opacity: 0 });
				}

				if (tabletRange) {
					const tl = gsap.timeline({
						scrollTrigger: {
							trigger: ".content-section",
							start: "10% 60%",
							end: "75% 40%",
							scrub: 0.7,
							pin: innerContainerRef.current, // pin only ever writes to THIS element
							pinSpacing: false,
						},
					});
					tl.to(slideRef.current, { xPercent: -480 }, "-=0.5");
					tl.to(slideRef.current, { xPercent: 100 });
				}

				if (desktopRange) {
					const tl = gsap.timeline({
						scrollTrigger: {
							trigger: ".content-section",
							start: "10% 60%",
							end: "75% 40%",
							scrub: 0.7,
							pin: innerContainerRef.current, // pin only ever writes to THIS element
							pinSpacing: false,
						},
					});
				}

				// gsap.matchMedia expects a cleanup fn back — it runs this
				// automatically whenever the breakpoint match changes.
				return () => {
					tl.scrollTrigger?.kill();
					tl.kill();
				};
			},
		);

		return () => mm.revert();
	}, []);

	const characterGeneral = "max-[565px]:fixed! min-[566px]:absolute! z-50";
	const characterWidth = "w-[140px] max-[565px]:w-[85px] min-[970px]:w-[11.46vw]";
	const characterPos = "mx-auto my-auto min-[566px]:top-0 min-[566px]:right-0 min-[566px]:left-0 min-[566px]:bottom-0 right-4 bottom-4";
	const characterPosTranslate = "max-[969px]:translate-x-[250%] max-[565px]:translate-y-[70%]! max-[565px]:translate-x-[130%]!";
	const mobile = " max-[565px]:translate-none! max-[565px]:px-4 max-[565px]:py-4 max-[565px]:bg-[#6901d2] max-[565px]:rounded-[1rem]";

	return (
		<div
			ref={containerRef}
			className={clsx(characterGeneral, characterWidth, characterPos)}
		>
			<div
				ref={innerContainerRef}
				className="will-change-transform"
			>
				{/* This is the element that actually slides. Relative + `left`,
				    and `w-full` so the percentage-style distance math above lines
				    up with its own box, matching how xPercent used to behave. */}
				<div
					ref={slideRef}
					className={clsx(characterPosTranslate, mobile, "relative w-full")}
				>
					<HoodleLogo className="w-[55%] h-fit ml-[10%]" />
					<img
						ref={imgRef}
						src={framePath(1)}
						width={487}
						height={726}
						alt="Character animation"
						className="h-auto w-full object-contain"
						loading="eager"
					/>
				</div>
			</div>
		</div>
	);
}
