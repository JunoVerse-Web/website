"use client";

import { useState, useRef, Fragment } from "react";
import JunoLogo from "@/app/components/icons/juno-logo";
import Link from "next/link";
import WhiteArrowLeft from "../../icons/white-arrow-left";
import clsx from "clsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMenuStore } from "@/store";

export default function BurgerMenuOverlay() {
	const menuLinks = [
		{
			name: "Our Philosophy",
			href: "/our-philosophy",
		},
		{
			name: "Our Services",
			href: "/our-services",
		},
		{
			name: "Our Creations",
			href: "/our-creations",
		},
		{
			name: "Our World",
			href: "/our-world",
		},
		{
			name: "Our Folks",
			href: "/our-folks",
		},
		{
			name: "Our Culture",
			href: "/our-culture",
		},
	];

	const [menuToggled, setMenuToggled] = useState(false);
	const overlayRef = useRef<HTMLDivElement>(null);
	const linksRef = useRef<HTMLDivElement>(null);

	// Register plugin (recommended)
	gsap.registerPlugin(useGSAP);

	useGSAP(
		() => {
			const overlay = overlayRef.current;
			const linksContainer = linksRef.current;

			if (!overlay) return;

			if (menuToggled) {
				// Open animation
				gsap.to(overlay, {
					y: "0%",
					duration: 0.6,
					ease: "power3.inOut",
				});

				// Staggered links animation
				if (linksContainer) {
					gsap.fromTo(
						linksContainer.children,
						{ opacity: 0, x: 40 },
						{
							opacity: 1,
							x: 0,
							duration: 0.5,
							stagger: 0.08,
							ease: "power2.out",
							delay: 0.25,
						},
					);
				}
			} else {
				// Close animation
				gsap.to(overlay, {
					y: "-100%",
					duration: 0.5,
					ease: "power3.inOut",
				});
			}
		},
		{ dependencies: [menuToggled] }, // Re-run when menuToggled changes
	);

	const darkState = useMenuStore((state) => state.dark);

	const toggleMenu = () => {
		setMenuToggled((prev) => !prev);
		useMenuStore.setState({ dark: !darkState });
	};

	return (
		<>
			{/* Top Bar */}
			<div className="burgerMenuTopHodler">
				<Link
					href="/"
					className="burgermenuLogo"
				>
					<JunoLogo
						className="w-full h-full object-contain"
						dark={darkState}
					/>
				</Link>
				<div className="overflow-hidden">
					<div
						className="burgerMenuIcon relative cursor-pointer flex flex-col items-center justify-center gap-1 w-[2.6vw] h-auto"
						onClick={toggleMenu}
					>
						{/* Burger */}
						<WhiteArrowLeft
							dark={darkState}
							className={clsx(!darkState ? "burger-animate-out" : "burger-animate-in", "")}
							// style={{animationDelay: "0.2s"}}
						/>
						<WhiteArrowLeft
							dark={darkState}
							className={clsx(!darkState ? "burger-animate-out" : "burger-animate-in", "")}
							// style={{animationDelay: "0.4s"}}
						/>
						<WhiteArrowLeft
							dark={darkState}
							className={clsx(!darkState ? "burger-animate-out" : "burger-animate-in", "")}
							// style={{animationDelay: "0.6s"}}
						/>

						{/* X Icon */}
						<WhiteArrowLeft
							dark={darkState}
							className={clsx(darkState ? "burger-x-animate-out" : "burger-x-animate-in", "absolute inset-0 rotate-45")}
							// style={darkState ? {animationDelay: "0.8s"} : {animationDelay: "1.2s"}}
						/>
						<WhiteArrowLeft
							dark={darkState}
							className={clsx(darkState ? "burger-x-animate-out" : "burger-x-animate-in", "absolute inset-0 rotate-135")}
							// style={darkState ? {animationDelay: "0.8s"} : {animationDelay: "1.2s"}}
						/>
					</div>
				</div>
			</div>

			{/* Overlay */}
			<div
				ref={overlayRef}
				className={clsx(
					"burgerMenuOverlayHolder fixed inset-0 -translate-y-full bg-white z-50",
					"overflow-hidden",
					menuToggled ? "pointer-events-auto" : "pointer-events-none",
				)}
			>
				<div className="h-full w-full flex items-center justify-center">
					<div
						ref={linksRef}
						className="burgerMenuLinksHolder text-center"
					>
						{menuLinks.map((link, index) => (
							<Fragment key={index}>
								<Link
									href={link.href}
									className="block py-5 text-2xl font-medium text-black"
									onClick={() => setMenuToggled(false)}
								>
									{link.name}
								</Link>
								{index !== menuLinks.length - 1 && <hr className="border-black" />}
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
