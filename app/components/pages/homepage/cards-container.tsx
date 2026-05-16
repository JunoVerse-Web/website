import FlipCards from "../../animations/FlipCards";
import Image from "next/image";
import logo from "../../../../public/juno-logo.svg";

export default function CardsContainer() {
	const cardsClass = "bg-white w-full h-full flex items-center justify-center";

	return (
		<section className="px-[7vw] pt-[2vw] pb-[3vw]">
			<div className="grid grid-cols-3 gap-(--spacing-2)">
				<FlipCards>
					<div className={cardsClass}>
						<Image
							src={logo}
							alt="Juno Logo"
							width={100}
							height={100}
							className="h-10 w-auto object-contain"
						/>
					</div>
				</FlipCards>
				<FlipCards>
					<div className={cardsClass}>
						<Image
							src={logo}
							alt="Juno Logo"
							width={100}
							height={100}
							className="h-10 w-auto object-contain"
						/>
					</div>
				</FlipCards>
				<FlipCards>
					<div className={cardsClass}>
						<Image
							src={logo}
							alt="Juno Logo"
							width={100}
							height={100}
							className="h-10 w-auto object-contain"
						/>
					</div>
				</FlipCards>
				<FlipCards>
					<div className={cardsClass}>
						<Image
							src={logo}
							alt="Juno Logo"
							width={100}
							height={100}
							className="h-10 w-auto object-contain"
						/>
					</div>
				</FlipCards>
				<FlipCards>
					<div className={cardsClass}>
						<Image
							src={logo}
							alt="Juno Logo"
							width={100}
							height={100}
							className="h-10 w-auto object-contain"
						/>
					</div>
				</FlipCards>
				<FlipCards>
					<div className={cardsClass}>
						<Image
							src={logo}
							alt="Juno Logo"
							width={100}
							height={100}
							className="h-10 w-auto object-contain"
						/>
					</div>
				</FlipCards>
			</div>
		</section>
	);
}
