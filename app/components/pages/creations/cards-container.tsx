import clsx from "clsx";
import Image from "next/image";
import { CreationsCardType } from "@/types/global-types";

import TiltingCards from "../../animations/TiltingCards";
import JunoDefaultCard from "../../shared/juno-default-card";
import SqritzerLogo from "../../../../public/logo/spritzer-logo.svg";
import BCGLogo from "../../../../public/logo/bcg-logo.svg";
import TiktokLogo from "../../../../public/logo/tiktok-logo.svg";
import MitiLogo from "../../../../public/logo/miti-logo.svg"; 

export default function CardsContainer({ content }: { content: CreationsCardType[] }) {
	const cardsClass = "relative w-full h-full aspect-397/595 object-cover";
	const logoSharedClass = "absolute inset-0 m-auto w-[60%] h-auto object-contain aspect-210/120";

	return (
		<div className="relative px-[16.93vw] pt-[2vw] pb-[3vw]">
			<div className="grid grid-cols-3 gap-(--spacing-2)">
				<TiltingCards
					url={"/our-creations/spritzer"}
					content={
						<div className={clsx(cardsClass)}>
							{/* Background Image */}
							<JunoDefaultCard
								background="#19d3c5"
								outline="#095540"
							/>

							{/* Logo */}
							<Image src={SqritzerLogo} alt="Sqritzer Logo" className={logoSharedClass} />
						</div>
					}
				/>
				<TiltingCards
					url={"/our-creations/big-caring-group"}
					content={
						<div className={clsx(cardsClass)}>
							{/* Background Image */}
							<JunoDefaultCard
								background="#011460"
								outline="#ffffff"
							/>

							{/* Logo */}
							<Image src={BCGLogo} alt="Sqritzer Logo" className={logoSharedClass} />
						</div>
					}
				/>
				<TiltingCards
					url={"#"}
					content={
						<div className={clsx(cardsClass)}>
							{/* Background Image */}
							<JunoDefaultCard
								background="#000000"
								outline="#cd3749"
							/>

							{/* Logo */}
							<Image src={TiktokLogo} alt="Sqritzer Logo" className={logoSharedClass} />
						</div>
					}
				/>
				<TiltingCards
					url={"#"}
					content={
						<div className={clsx(cardsClass)}>
							{/* Background Image */}
							<JunoDefaultCard
								background="#e7e4d5"
								outline="#1b2353"
							/>

							{/* Logo */}
							<Image src={MitiLogo} alt="Sqritzer Logo" className={logoSharedClass} />
						</div>
					}
				/>
			</div>
		</div>
	);
}
