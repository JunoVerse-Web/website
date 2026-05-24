"use client";

import React, { useRef, useState, useEffect } from "react";
import clsx from "clsx";

export default function SingleFlipCards({ front, back }: { front: React.ReactNode; back: React.ReactNode;}) {
	const [rotation, setRotation] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);
	const [isFlipped, setIsFlipped] = useState(false);

	const leaveTimeout = useRef<NodeJS.Timeout | null>(null);
	const flipTimeout = useRef<NodeJS.Timeout | null>(null);

	// Mouse Enter - Tilt 45 degrees
	const handleMouseEnter = () => {
		if (isAnimating) return;

		if (leaveTimeout.current) {
			clearTimeout(leaveTimeout.current);
		}

		setRotation(45);
	};

	// Mouse Leave - Return to 0
	const handleMouseLeave = () => {
		if (isAnimating) return;

		setRotation(0);
	};

	// Click - Flip 180° then return after 2 seconds
	const handleClick = () => {
		if (isAnimating) return;

		setIsAnimating(true);
		setRotation((prev) => prev + 135);
		setIsFlipped(true);

		// Auto return to original position after 2 seconds
		if (flipTimeout.current) clearTimeout(flipTimeout.current);

		flipTimeout.current = setTimeout(() => {
			setRotation(0);
			setIsFlipped(false);
			setIsAnimating(false);
		}, 2000);
	};

	// Cleanup timeouts on unmount
	useEffect(() => {
		return () => {
			if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
			if (flipTimeout.current) clearTimeout(flipTimeout.current);
		};
	}, []);

	const sharedClass =
		"backface-hidden w-full h-full aspect-397/595 pointer-events-none rounded-[1vw] overflow-hidden transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]";

	return (
		<div
			className={clsx("group relative w-full h-auto perspective-[1250px] cursor-pointer", isFlipped && "z-50")}
			onClick={handleClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{/* Front Side */}
			<div
				className={clsx("relative", sharedClass)}
				style={{
					transform: `rotateY(${rotation}deg)`,
					transitionDuration: isAnimating ? "2000ms" : "1000ms",
				}}
			>
				<div className="w-full h-full flex items-center justify-center">{front}</div>
			</div>

			{/* Back Side */}
			<div
				className={clsx("absolute inset-0", sharedClass)}
				style={{
					transform: `rotateY(${rotation + 180}deg)`,
					transitionDuration: isAnimating ? "2000ms" : "1000ms",
				}}
			>
				<div className="w-full h-full flex items-center justify-center">{back}</div>
			</div>
		</div>
	);
}
