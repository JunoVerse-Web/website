"use client";

import { useState, useRef, Fragment, useEffect } from "react";
import { usePathname } from "next/navigation";
import JunoLogo from "@/app/components/icons/juno-logo";
import WhiteArrowLeft from "../../icons/white-arrow-left";
import clsx from "clsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMenuStore, useFormStore } from "@/store";
import CustomLink from "../../shared/custom-link";

// Background images
import CreationsMenuBackground from "../../../../public/menu-bg/creations-bg.webp";
import PhilosophyMenuBackground from "../../../../public/menu-bg/philosophy-bg.webp";
import ServicesMenuBackground from "../../../../public/menu-bg/services-bg.webp";
import WorldMenuBackground from "../../../../public/menu-bg/world-bg.webp";
import FolksMenuBackground from "../../../../public/menu-bg/folks-bg.webp";

gsap.registerPlugin(useGSAP);

const MENU_LINKS = [
	{ name: "Our Philosophy", href: "/our-philosophy", bg: PhilosophyMenuBackground },
	{ name: "Our Services", href: "/our-services", bg: ServicesMenuBackground },
	{ name: "Our Creations", href: "/our-creations", bg: CreationsMenuBackground },
	{ name: "Our World", href: "/our-world", bg: WorldMenuBackground },
	{ name: "Our Folks", href: "/our-folks", bg: FolksMenuBackground },
];

export default function BurgerMenuOverlay({ dark }: { dark: boolean }) {
	const [menuToggled, setMenuToggled] = useState(false);
	const overlayRef = useRef<HTMLDivElement>(null);
	const bg1Ref = useRef<HTMLDivElement>(null);
	const bg2Ref = useRef<HTMLDivElement>(null);
	const linksRef = useRef<HTMLDivElement>(null);

	const isFormOpen = useFormStore((state) => state.isFormOpen);
	const darkState = useMenuStore((state) => state.dark);
	const iconDark = dark && darkState;

	const pathname = usePathname();

	// Smooth background crossfade between the two layered bg divs
	const changeBackground = (newBg: string | null) => {
		if (!bg1Ref.current || !bg2Ref.current) return;

		const bg1 = bg1Ref.current;
		const bg2 = bg2Ref.current;

		if (!newBg) {
			gsap.to([bg1, bg2], { opacity: 0 });
			return;
		}

		const useBg2 = bg1.style.opacity === "1" || bg1.style.opacity === "";
		const activeLayer = useBg2 ? bg2 : bg1;
		const inactiveLayer = useBg2 ? bg1 : bg2;

		activeLayer.style.backgroundImage = `url(${newBg})`;
		gsap.to(activeLayer, { opacity: 1, delay: 0.15, duration: 0.45 });
		gsap.to(inactiveLayer, { opacity: 0, delay: 0.15, duration: 0.45 });
	};

	useGSAP(
		() => {
			const overlay = overlayRef.current;
			const linksContainer = linksRef.current;

			if (!overlay) return;

			if (menuToggled) {
				gsap.to(overlay, { x: "0%", duration: 0.6, ease: "power3.inOut" });

				if (linksContainer) {
					gsap.fromTo(
						linksContainer.children,
						{ opacity: 0, x: 40 },
						{ opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: "power2.out", delay: 0.25 },
					);
				}
			} else {
				gsap.to(overlay, { x: "100%", duration: 0.5, ease: "power3.inOut" });
			}
		},
		{ dependencies: [menuToggled] },
	);

	useEffect(() => {
		useMenuStore.setState({ dark });
	}, [dark, pathname]);

	const toggleMenu = () => {
		setMenuToggled((prev) => !prev);
		useMenuStore.setState((state) => ({ dark: !state.dark }));
	};

	// Close on Escape key while the menu is open
	useEffect(() => {
		if (!menuToggled) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") toggleMenu();
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [menuToggled]);

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
						dark={iconDark}
					/>
				</CustomLink>

				<div className="overflow-hidden">
					<div
						className="burgerMenuIcon relative cursor-pointer flex flex-col items-center justify-center gap-1 w-[2.6vw] h-auto"
						onClick={toggleMenu}
					>
						{/* Burger lines */}
						{[0, 1, 2].map((i) => (
							<WhiteArrowLeft
								key={`line-${i}`}
								dark={iconDark}
								className={menuToggled ? "burger-animate-out" : "burger-animate-in"}
							/>
						))}

						{/* X icon (two crossing bars) */}
						{[45, 135].map((rotation) => (
							<WhiteArrowLeft
								key={`x-${rotation}`}
								dark={iconDark}
								className={clsx(
									!menuToggled ? "burger-x-animate-out" : "burger-x-animate-in",
									"absolute inset-0",
									rotation === 45 ? "rotate-45" : "rotate-135",
								)}
							/>
						))}
					</div>
				</div>
			</div>

			{/* Dim background overlay — click to close */}
			<div
				onClick={() => {
					if (menuToggled) toggleMenu();
				}}
				className={clsx(
					menuToggled ? "opacity-80" : "pointer-events-none opacity-0",
					"fixed bg-black inset-0 m-auto! w-full h-full duration-300",
				)}
			/>

			{/* Menu panel */}
			<div
				ref={overlayRef}
				className={clsx(
					"burgerMenuOverlayHolder fixed inset-0 translate-x-full z-50 overflow-hidden",
					menuToggled ? "pointer-events-auto" : "pointer-events-none",
				)}
			>
				<div
					ref={bg1Ref}
					className="absolute inset-0 bg-cover bg-center bg-no-repeat"
					style={{ backgroundImage: "none", opacity: 0 }}
				/>
				<div
					ref={bg2Ref}
					className="absolute inset-0 bg-cover bg-center bg-no-repeat"
					style={{ backgroundImage: "none", opacity: 0 }}
				/>

				<div className="h-full w-full flex justify-center pt-15 md:pt-[4%] relative z-10">
					<div
						ref={linksRef}
						className="burgerMenuLinksHolder text-center"
					>
						{MENU_LINKS.map((link, index) => (
							<Fragment key={link.href}>
								<div
									className="flex items-center gap-4 py-5 md:pl-[5vw] cursor-pointer group"
									onMouseEnter={() => changeBackground(link.bg.src)}
									onMouseLeave={() => changeBackground(null)}
								>
									<span className="m-0! text-black/60 group-hover:text-white transition-colors duration-300">
										{index + 1 < 10 ? `0${index + 1}` : index + 1}
									</span>
									<CustomLink
										scroll={false}
										href={link.href}
										className="block py-1! text-2xl font-medium text-black group-hover:text-white transition-colors duration-300"
										onClick={toggleMenu}
									>
										{link.name}
									</CustomLink>
								</div>
								<hr className="border-black pointer-events-none" />
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</>
	);
}