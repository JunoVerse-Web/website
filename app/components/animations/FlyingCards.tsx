"use client";

import React from "react";
import clsx from "clsx";
import { motion } from "motion/react";

export default function FlyingCards({ cardImage, text }: { cardImage: React.ReactNode, text?: string[] }) {
	const sharedClass =
		"relative w-full h-full aspect-397/595 object-cover bg-white rounded-[1.04vw] overflow-hidden";

	return (
		<div className={clsx(sharedClass)} >
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
