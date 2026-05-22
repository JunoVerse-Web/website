"use client";

import React, { useRef, useState } from "react";
import clsx from "clsx";
import Link from "next/link";

export default function FlipCards({ front, back, repeat = false, link }: { front: React.ReactNode; back: React.ReactNode; repeat?: boolean; link?: string }) {
	const [rotation, setRotation] = useState(0);
	const [backRotation, setBackRotation] = useState(180);
	const [isAnimating, setIsAnimating] = useState(false);
	const [focused, setFocused] = useState(false);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [isFlipped, setIsFlipped] = useState(false);

	const leaveTimeout = useRef<NodeJS.Timeout | null>(null);

	const handleMouseEnter = () => {
		if (isAnimating) return;

		setIsAnimating(true);

		if (repeat) {
			// infinite 360 spins
			setRotation((prev) => prev + 360);
			setBackRotation((prev) => prev + 360);
		} else {
			// toggle front/back
			setIsFlipped((prev) => {
				const next = !prev;

				setRotation((current) => current + 180);
				setBackRotation((current) => current + 180);

				return next;
			});
		}

		setTimeout(() => {
			setIsAnimating(false);
		}, 1000);
	};

	const handleMouseLeave = () => {
		leaveTimeout.current = setTimeout(() => {
			setFocused(false);
		}, 1000);
	};

	const sharedClass =
		"backface-hidden w-full h-full pointer-events-none rounded-[1vw] overflow-hidden transform-3d transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ";

	const innerSharedClass =
		"transform-3d transition-transform ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform flex items-center justify-center w-full h-full";

	return (
		<Link
			href={link || "#"}
			className={clsx(
				"group relative grid content-center text-center bg-transparent w-full h-auto perspective-[1250px] cursor-pointer",
				focused && "z-50",
			)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div
				className={clsx("relative", sharedClass)}
				style={{
					transform: `rotateY(${rotation}deg)`,
				}}
			>
				<div className={clsx(innerSharedClass)}>{front}</div>
			</div>
			<div
				className={clsx("absolute inset-0", sharedClass)}
				style={{
					transform: `rotateY(${backRotation}deg)`,
				}}
			>
				<div className={clsx(innerSharedClass)}>{back}</div>
			</div>
		</Link>
	);
}
