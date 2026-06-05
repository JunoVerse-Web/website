"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import clsx from "clsx";
import { CardData } from "@/types/global-types";
import { useFormStore } from "@/store";

export default function FlyingCards({ cardImage, text, cardData }: { cardImage: React.ReactNode; text?: string[]; cardData: CardData }) {
	const sharedClass = "relative w-full h-full aspect-397/595 object-cover bg-white rounded-[1.04vw] overflow-hidden";
	const [isFlying, setIsFlying] = useState(false);
	const cardRef = useRef<HTMLDivElement>(null);
	const isFormOpen = useFormStore((state) => state.isFormOpen);
	const { openForm, closeForm } = useFormStore();

	const flyAway = useCallback(() => {
		if (isFlying || !cardRef.current) return;

		setIsFlying(true);

		const rotate = (Math.random() - 0.5) * 45; // -22.5° to +22.5° (more natural)
		const translateX = (Math.random() - 0.5) * 900;
		const absY = 400 + Math.random() * 500;
		const translateY = (Math.random() > 0.5 ? 1 : -1) * absY;

		const card = cardRef.current;
		card.style.transition = `transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.4s ease-out`;
		card.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`;
		card.style.opacity = "0";
		card.style.zIndex = "30";
	}, [isFlying]);

	const resetCard = useCallback(() => {
		if (!cardRef.current) return;

		const card = cardRef.current;
		card.style.transition = "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-out";
		card.style.transform = "translate(0px, 0px) rotate(0deg)";
		card.style.opacity = "1";
		card.style.zIndex = "auto";

		setIsFlying(false);
	}, []);

	// Reset card when form is closed
	useEffect(() => {
		if (!isFormOpen) {
			resetCard();
		}
	}, [isFormOpen, resetCard]);

	return (
		<div
			ref={cardRef}
			className={clsx(sharedClass, "cursor-pointer transition-transform duration-300", isFlying && "pointer-events-none")}
			onClick={() => {
				flyAway();
				openForm(cardData);
			}}
		>
			{cardImage}
			<div className="absolute inset-x-0 top-[25%] max-w-[90%] lg:max-w-[70%] mx-auto">
				{text?.map((p, i) => (
					<p
						key={i}
						className="text-white text-center mb-0!"
					>
						{p}
					</p>
				))}
			</div>
		</div>
	);
}
