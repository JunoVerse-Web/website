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

const MENU_LINKS = [
	{ name: "Our Philosophy", href: "/our-philosophy", bg: PhilosophyMenuBackground },
	{ name: "Our Services", href: "/our-services", bg: ServicesMenuBackground },
	{ name: "Our Creations", href: "/our-creations", bg: CreationsMenuBackground },
	{ name: "Our World", href: "/our-world", bg: WorldMenuBackground },
	{ name: "Our Folks", href: "/our-folks", bg: FolksMenuBackground },
];

// Tuning knobs for the hide-on-scroll behavior
const SCROLL_HIDE_THRESHOLD = 10; // px of movement before we act — avoids flicker on tiny/jittery scroll events
const SCROLL_TOP_REVEAL_ZONE = 80; // always show the bar near the very top of the page
const SCROLL_STOP_DELAY = 200; // ms of no scroll events before we treat it as "stopped" and reveal

export default function BurgerMenuOverlay({ dark }: { dark: boolean }) {
	const [menuToggled, setMenuToggled] = useState(false);
	const [topBarHidden, setTopBarHidden] = useState(false);
	const overlayRef = useRef<HTMLDivElement>(null);
	const bg1Ref = useRef<HTMLDivElement>(null);
	const bg2Ref = useRef<HTMLDivElement>(null);
	const linksRef = useRef<HTMLDivElement>(null);

	// Tracks which layer is currently the "front" (visible) one — a fact we
	// control explicitly, rather than inferring it from an inline opacity
	// style that GSAP is actively animating (which caused the glitch).
	const activeLayerIsBg1 = useRef(false);

	const isFormOpen = useFormStore((state) => state.isFormOpen);
	const darkState = useMenuStore((state) => state.dark);
	const iconDark = dark && darkState;

	const pathname = usePathname();

	// Smooth background crossfade between the two layered bg divs
	const changeBackground = (newBg: string | null) => {
		if (!bg1Ref.current || !bg2Ref.current) return;

		const bg1 = bg1Ref.current;
		const bg2 = bg2Ref.current;

		// Kill any in-flight tweens on both layers first — without this,
		// hovering quickly between links starts a new tween on top of one
		// still running, which is what caused the flicker.
		gsap.killTweensOf([bg1, bg2]);

		if (!newBg) {
			gsap.to([bg1, bg2], { opacity: 0, duration: 0.3 });
			return;
		}

		const nextLayer = activeLayerIsBg1.current ? bg2 : bg1;
		const prevLayer = activeLayerIsBg1.current ? bg1 : bg2;

		nextLayer.style.backgroundImage = `url(${newBg})`;
		gsap.to(nextLayer, { opacity: 1, delay: 0.15, duration: 0.45 });
		gsap.to(prevLayer, { opacity: 0, delay: 0.15, duration: 0.45 });

		activeLayerIsBg1.current = !activeLayerIsBg1.current;
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

	// Hide the top bar on scroll-down, reveal on scroll-up or once scrolling
	// stops. Suspended entirely while the menu overlay is open — the bar
	// should stay put and visible in that state regardless of scroll.
	useEffect(() => {
		if (menuToggled) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setTopBarHidden(false);
			return;
		}

		let lastScrollY = window.scrollY;
		let ticking = false;
		let stopTimer: ReturnType<typeof setTimeout>;

		const evaluate = () => {
			const currentY = window.scrollY;
			const delta = currentY - lastScrollY;

			if (currentY <= SCROLL_TOP_REVEAL_ZONE) {
				setTopBarHidden(false);
			} else if (delta > SCROLL_HIDE_THRESHOLD) {
				setTopBarHidden(true);
			} else if (delta < -SCROLL_HIDE_THRESHOLD) {
				setTopBarHidden(false);
			}

			lastScrollY = currentY;

			// "Stopped scrolling" — reveal after a short quiet period with no events
			clearTimeout(stopTimer);
			stopTimer = setTimeout(() => setTopBarHidden(false), SCROLL_STOP_DELAY);

			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(evaluate);
				ticking = true;
			}
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", onScroll);
			clearTimeout(stopTimer);
		};
	}, [menuToggled]);

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
			<div
				className={clsx(
					"burgerMenuTopHodler duration-300 relative z-[60]",
					(isFormOpen || topBarHidden) && "-translate-y-full",
				)}
			>
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
						className="burgerMenuIcon relative cursor-pointer flex flex-col items-center justify-center gap-1 min-w-8 w-[2.6vw] h-auto"
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
					"fixed bg-black inset-0 m-auto! w-full h-full duration-300 z-30",
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

				<div className="h-full w-full flex justify-center pt-20 md:pt-[4%] relative z-10">
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