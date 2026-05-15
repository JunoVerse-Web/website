import React from "react";
import Link from "next/link";
import JunoLogo from "../../../../public/juno-logo.svg";
import Image from "next/image";
import BurgerMenuOverlay from "./burger-menu-overlay";

export default function Header() {
	return (
		<nav className="fixed w-full h-fit px-[2vw] top-[2vh] flex items-center justify-between z-50">
			<Link href="/">
				<Image
					loading="eager"
					src={JunoLogo}
					alt="Juno Logo"
					width={100}
					height={100}
					className="h-10 w-auto object-contain"
				/>
			</Link>
			<BurgerMenuOverlay />
		</nav>
	);
}
