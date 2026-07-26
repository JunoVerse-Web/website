"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HoodleLogo from "./hoodle-logo";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TOTAL_IMAGES = 20;

export default function CharacterSequence() {
	const containerRef = useRef<HTMLDivElement>(null);
	const innercontainerRef = useRef<HTMLDivElement>(null);

	const [currentImage, setCurrentImage] = useState(1);

	useGSAP(() => {
		const frame = {
			current: 1,
		};

		const images = Array.from({ length: TOTAL_IMAGES }, (_, index) => `/our-world/sequence/hoodle-character-image-${index + 1}.webp`);

		// preload images
		images.forEach((src) => {
			const img = new window.Image();
			img.src = src;
		});

		// Image sequence animation
		gsap.to(frame, {
			current: TOTAL_IMAGES,
			ease: "none",

			scrollTrigger: {
				trigger: ".content-section",
				start: "10% 60%",
				end: "75% 40%",
				scrub: true,
			},

			onUpdate: () => {
				const index = Math.round(frame.current);
				setCurrentImage(index);
                console.log(index)
			},
		});
	}, []);

	useGSAP(() => {
		gsap.timeline({
			scrollTrigger: {
				trigger: ".content-section",
				start: "10% 60%",
				end: "75% 40%",
				pin: innercontainerRef.current,
				pinSpacing: false,
				scrub: 0.7,
			},
		});
	}, []);

	return (
		<div
			ref={containerRef}
			className="absolute! z-50 w-[11.46vw] top-0 left-0 right-0 mx-auto"
		>
			<div ref={innercontainerRef} className="">
                <HoodleLogo className="w-[55%] h-fit ml-[10%]"/>
				{/* <Image
					key={currentImage}
					src={`/our-world/sequence/hoodle-character-image-${currentImage}.webp`}
					width={487}
					height={726}
					alt="Character animation"
					priority
					className="h-auto w-full object-contain"
				/> */}
				<img
					key={currentImage}
					src={`/our-world/sequence/hoodle-character-image-${currentImage}.webp`}
					width={487}
					height={726}
					alt="Character animation"
					className="h-auto w-full object-contain"
                    loading="eager"
				/>
			</div>
		</div>
	);
}
