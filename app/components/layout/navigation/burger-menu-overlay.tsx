"use client";

export default function BurgerMenuOverlay() {
	return (
		<>
			<div className="w-10 h-auto aspect-square">
				<span className="relative block h-0.5 w-full bg-black">
                    <span className="absolute block left-0 top-0 bottom-0 my-auto w-[15%] h-auto aspect-square rounded-full outline-1"></span>
                </span>
			</div>
		</>
	);
}
