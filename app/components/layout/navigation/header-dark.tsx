import React from "react";
import Link from "next/link";
import JunoLogo from "../../../../public/juno-white-logo.svg";
import Image from "next/image";
import BurgerMenuOverlay from "./burger-menu-overlay";
import WhiteArrowLeft from "../../icons/white-arrow-left";

export default function Header() {
	return (
		<nav className="fixed w-full h-fit px-[2vw] top-[2vh] flex items-center justify-between z-999">
			{/* <div>
				<Link href="/">
					<Image
						loading="eager"
						src={JunoLogo}
						alt="Juno Logo"
						width={100}
						height={100}
						className="h-auto w-[9.11vw] min-w-25 object-contain aspect-175/51"
					/>
				</Link>
			</div> */}
			<BurgerMenuOverlay />
		</nav>
	);
}
