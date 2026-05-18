import FlipCards from "../../animations/FlipCards";
import Image from "next/image";
import logo from "../../../../public/juno-logo.svg";
import clsx from "clsx";

export default function CardsContainer() {
	const cardsClass = "w-full h-full aspect-385/520 flex items-center justify-center";

	return (
		<section className="px-[7vw] pt-[2vw] pb-[3vw]">
			<div className="grid grid-cols-3 gap-(--spacing-2)">
				<FlipCards
					front={
						<div className={clsx(cardsClass, "bg-white object-cover")}>
							<Image
								src={logo}
								alt="Juno Logo"
							/>
						</div>
					}
					back={
						<div className={clsx(cardsClass)}>
							<h1>hello</h1>
						</div>
					}
				/>
				<FlipCards
					repeat={true}
					front={
						<div className={cardsClass}>
							<Image
								src={logo}
								alt="Juno Logo"
								fill
							/>
						</div>
					}
					back={
						<div className={cardsClass}>
							<Image
								src={logo}
								alt="Juno Logo"
								fill
							/>
						</div>
					}
				/>
				<FlipCards
					repeat={true}
					front={
						<div className={cardsClass}>
							<Image
								src={logo}
								alt="Juno Logo"
								fill
							/>
						</div>
					}
					back={
						<div className={cardsClass}>
							<Image
								src={logo}
								alt="Juno Logo"
								fill
							/>
						</div>
					}
				/>
				<FlipCards
					repeat={true}
					front={
						<div className={cardsClass}>
							<Image
								src={logo}
								alt="Juno Logo"
								fill
							/>
						</div>
					}
					back={
						<div className={cardsClass}>
							<Image
								src={logo}
								alt="Juno Logo"
								fill
							/>
						</div>
					}
				/>
				<FlipCards
					repeat={true}
					front={
						<div className={cardsClass}>
							<Image
								src={logo}
								alt="Juno Logo"
								fill
							/>
						</div>
					}
					back={
						<div className={cardsClass}>
							<Image
								src={logo}
								alt="Juno Logo"
								fill
							/>
						</div>
					}
				/>
				<FlipCards
					repeat={true}
					front={
						<div className={cardsClass}>
							<Image
								src={logo}
								alt="Juno Logo"
								fill
							/>
						</div>
					}
					back={
						<div className={cardsClass}>
							<Image
								src={logo}
								alt="Juno Logo"
								fill
							/>
						</div>
					}
				/>
			</div>
		</section>
	);
}
