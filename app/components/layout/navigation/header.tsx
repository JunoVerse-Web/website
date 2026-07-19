import React from "react";
import Link from "next/link";
// import JunoLogo from "../../../../public/juno-logo.svg";
import Image from "next/image";
import BurgerMenuOverlay from "./burger-menu-overlay";
import JunoLogo from "@/app/components/icons/juno-logo";

export default function Header({dark} : {dark: boolean}) {
	return (
		<nav className="fixed w-full h-fit px-[2vw] top-[2vh] flex items-center justify-between z-999">
			<BurgerMenuOverlay dark={dark} />
		</nav>
	);
}
