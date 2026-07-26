import BurgerMenuOverlay from "./burger-menu-overlay";

export default function Header({dark} : {dark: boolean}) {
	return (
		<nav className="fixed w-full h-fit px-[2vw] top-[2vh] flex items-center justify-between z-999">
			<BurgerMenuOverlay dark={dark} />
		</nav>
	);
}
