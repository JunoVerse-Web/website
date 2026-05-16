"use client";

import React from "react";
import { useState, useEffect } from "react";
import clsx from "clsx";

export default function FlipCards({ children }: { children: React.ReactNode }) {
	const [cardsFlipped, setCardsFlipped] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		if (cardsFlipped) {
			const timer = setTimeout(() => {
				setCardsFlipped(false);
				setIsAnimating(false);
			}, 1000);
			return () => clearTimeout(timer);
		}
	}, [cardsFlipped]);

	const handleMouseEnter = () => {
		if (!isAnimating) {
			setIsHovered(true);
		}
	};

	return (
		<div
			className={clsx(
				"group relative grid content-center text-center bg-transparent w-full h-auto aspect-385/520 perspective-distant cursor-pointer",
				isAnimating && "pointer-none",
			)}
			onClick={() => {
				setCardsFlipped(true);
				setIsAnimating(true);
			}}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div
				className={clsx(
					"absolute inset-0 m-auto w-full h-full pointer-events-none duration-1000 rounded-[1vw] overflow-hidden transform-3d",
					cardsFlipped && "rotate-y-360",
					(!cardsFlipped && isHovered) && "rotate-y-45",
				)}
			>
				{children}
			</div>
		</div>
	);
}
