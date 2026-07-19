"use client";

import { useState, useRef, Fragment, useEffect } from "react";
import JunoLogo from "@/app/components/icons/juno-logo";
import WhiteArrowLeft from "../../icons/white-arrow-left";
import clsx from "clsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMenuStore, useFormStore } from "@/store";
import CustomLink from "../../shared/custom-link";

export default function BurgerMenuOverlay({dark}: {dark: boolean}) {
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
	];

	const [menuToggled, setMenuToggled] = useState(false);
	const overlayRef = useRef<HTMLDivElement>(null);
	const linksRef = useRef<HTMLDivElement>(null);

	// Use store as single source of truth
	const darkState = useMenuStore((state) => state.dark);
	const setDark = useMenuStore((state) => state.setDark);

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


	// Sync prop → store when parent dark mode changes
	useEffect(() => {
		useMenuStore.setState({ dark });
	}, [dark]);

	const toggleMenu = () => {
		const newToggled = !menuToggled;
		setMenuToggled(newToggled);

		// Toggle dark state in store
		useMenuStore.setState((state) => ({ dark: !state.dark }));
	};

	const isFormOpen = useFormStore((state) => state.isFormOpen);

	return (
		<>
			{/* Top Bar */}
			<div className={clsx("burgerMenuTopHodler duration-300", isFormOpen && "-translate-y-full")}>
				<CustomLink
					scroll={false}
					href="/"
					className="burgermenuLogo"
					onClick={() => {
						if (menuToggled) toggleMenu();
					}}
				>
					<JunoLogo
						className="w-full h-full object-contain"
						dark={dark ? darkState : dark}
					/>
				</CustomLink>
				<div className="overflow-hidden">
					<div
						className="burgerMenuIcon relative cursor-pointer flex flex-col items-center justify-center gap-1 w-[2.6vw] h-auto"
						onClick={toggleMenu}
					>
						{/* Burger */}
						<WhiteArrowLeft
							dark={dark ? darkState : dark}
							className={clsx(menuToggled ? "burger-animate-out" : "burger-animate-in", "")}
							// style={{animationDelay: "0.2s"}}
						/>
						<WhiteArrowLeft
							dark={dark ? darkState : dark}
							className={clsx(menuToggled ? "burger-animate-out" : "burger-animate-in", "")}
							// style={{animationDelay: "0.4s"}}
						/>
						<WhiteArrowLeft
							dark={dark ? darkState : dark}
							className={clsx(menuToggled ? "burger-animate-out" : "burger-animate-in", "")}
							// style={{animationDelay: "0.6s"}}
						/>

						{/* X Icon */}
						<WhiteArrowLeft
							dark={dark ? darkState : dark}
							className={clsx(!menuToggled ? "burger-x-animate-out" : "burger-x-animate-in", "absolute inset-0 rotate-45")}
							// style={darkState ? {animationDelay: "0.8s"} : {animationDelay: "1.2s"}}
						/>
						<WhiteArrowLeft
							dark={dark ? darkState : dark}
							className={clsx(!menuToggled ? "burger-x-animate-out" : "burger-x-animate-in", "absolute inset-0 rotate-135")}
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
				{/* <div className="h-full w-full flex items-center justify-center"> */}
				<div className="h-full w-full flex justify-center pt-[60px] md:pt-[4%]">
					<div
						ref={linksRef}
						className="burgerMenuLinksHolder text-center"
					>
						{menuLinks.map((link, index) => (
							<Fragment key={index}>
								<div
									key={index}
									className="flex items-center gap-4 py-5 md:pl-[33vw]"
								>
									<span className="m-0!">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
									<CustomLink
										scroll={false}
										href={link.href}
										className="block py-1! text-2xl font-medium text-black"
										onClick={toggleMenu}
									>
										{link.name}
									</CustomLink>
								</div>
								{/* {index !== menuLinks.length - 1 && <hr className="border-black" />} */}
								<hr className="border-black" />
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
