"use client";

import clsx from "clsx";
import Image from "next/image";
import { CreationsCardType } from "@/types/global-types";

import TiltingCards from "../../animations/TiltingCards";
import JunoDefaultCard from "../../shared/juno-default-card";
import SqritzerLogo from "../../../../public/logo/spritzer-logo.svg";
import BCGLogo from "../../../../public/logo/bcg-logo.svg";
import TiktokLogo from "../../../../public/logo/tiktok-logo.svg";
import MitiLogo from "../../../../public/logo/miti-logo.svg";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function CardsContainer({ content }: { content: CreationsCardType[] }) {
	const cardsClass = "relative w-full h-full aspect-397/595 object-cover";
	const logoSharedClass = "absolute inset-0 m-auto w-[60%] h-auto object-contain aspect-210/120";

	const cardContainerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const items = gsap.utils.toArray<HTMLElement>(".creation-card-item");
			items.map((item) => gsap.set(item, { opacity: 0, yPercent: 8 }));

			const st = ScrollTrigger.create({
				trigger: cardContainerRef.current,
				start: "top center",
				once: true,
				onEnter: () => {
					gsap.fromTo(
						items,
						{ opacity: 0, yPercent: 8 },
						{
							opacity: 1,
							yPercent: 0,
							stagger: 0.15,
							duration: 0.6,
							ease: "power2.out",
						},
					);
				},
			});

			return () => st.kill();
		},
		{ scope: cardContainerRef },
	);

	return (
		<div className="relative px-4 md:px-[16.93vw] pt-[2vw] pb-20 md:pb-[10vw] lg:pb-[15vw]">
			<div
				className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-(--spacing-2)"
				ref={cardContainerRef}
			>
				<div className="creation-card-item opacity-0">
					<TiltingCards
						url={"/our-creations/spritzer"}
						content={
							<div className={clsx(cardsClass)}>
								{/* Background Image */}
								<JunoDefaultCard
									background="#19d3c5"
									outline="#095540"
								/>

								{/* Logo */}
								<Image
									src={SqritzerLogo}
									alt="Sqritzer Logo"
									className={logoSharedClass}
									loading="eager"
								/>
							</div>
						}
					/>
				</div>
				<div className="creation-card-item opacity-0">
					<TiltingCards
						url={"/our-creations/big-caring-group"}
						content={
							<div className={clsx(cardsClass)}>
								{/* Background Image */}
								<JunoDefaultCard
									background="#011460"
									outline="#ffffff"
								/>

								{/* Logo */}
								<Image
									src={BCGLogo}
									alt="Sqritzer Logo"
									className={logoSharedClass}
									loading="eager"
								/>
							</div>
						}
					/>
				</div>
				<div className="creation-card-item opacity-0">
					<TiltingCards
						url={"/our-creations/tiktok-shop"}
						content={
							<div className={clsx(cardsClass)}>
								{/* Background Image */}
								<JunoDefaultCard
									background="#000000"
									outline="#cd3749"
								/>

								{/* Logo */}
								<Image
									src={TiktokLogo}
									alt="Sqritzer Logo"
									className={logoSharedClass}
									loading="eager"
								/>
							</div>
						}
					/>
				</div>
				<div className="creation-card-item opacity-0">
					<TiltingCards
						url={"/our-creations/miti-malaysia"}
						content={
							<div className={clsx(cardsClass)}>
								{/* Background Image */}
								<JunoDefaultCard
									background="#e7e4d5"
									outline="#1b2353"
								/>

								{/* Logo */}
								<Image
									src={MitiLogo}
									alt="Sqritzer Logo"
									className={logoSharedClass}
									loading="eager"
								/>
							</div>
						}
					/>
				</div>
			</div>
		</div>
	);
}
