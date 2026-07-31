"use client";

import React, { useRef } from "react";
import clsx from "clsx";
import Link from "next/link";
import CustomLink from "../shared/custom-link";

export default function TiltingCards({ content, url = "#" }: { content: React.ReactNode; url: string }) {
	const cardRef = useRef<HTMLDivElement>(null);

	// Mouse Move - Dynamic Tilt
	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!cardRef.current) return;

		// Remove transition during movement for instant response
		cardRef.current.style.transition = "transform 0.05s ease-out";

		const rect = cardRef.current.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;

		const mouseX = e.clientX - centerX;
		const mouseY = e.clientY - centerY;

		// Tilt intensity (feel free to adjust)
		const rotateY = (mouseX / rect.width) * 22;
		const rotateX = -(mouseY / rect.height) * 22;

		cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
	};

	// Mouse Enter - Prepare for smooth movement
	const handleMouseEnter = () => {
		if (cardRef.current) {
			// Quickly disable transition on enter to avoid jump
			cardRef.current.style.transition = "transform 0.08s ease-out";
		}
	};

	// Mouse Leave - Smooth return
	const handleMouseLeave = () => {
		if (cardRef.current) {
			cardRef.current.style.transition = "transform 0.45s cubic-bezier(0.23, 1, 0.32, 1)";
			cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
		}
	};

	const sharedClass = "backface-hidden w-full h-full aspect-[397/595] pointer-events-none rounded-[1vw] overflow-hidden";

	return (
		<CustomLink
			scroll={false}
			href={url}
			className="group relative w-full h-auto perspective-[1200px] cursor-pointer block mb-0!"
		>
			<div
				ref={cardRef}
				className="relative w-full h-full will-change-transform"
				onMouseEnter={handleMouseEnter}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				style={{
					transformStyle: "preserve-3d",
				}}
			>
				{/* Card Content */}
				<div className={clsx("relative", sharedClass)}>
					<div className="w-full h-full flex items-center justify-center">{content}</div>
				</div>
			</div>
		</CustomLink>
	);
}
