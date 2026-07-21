import Image from "next/image";
import { PortfolioPage } from '@/types/content';
import Divider from "../shared/divider";

export default function HeroBannerTitle({ content }: { content: PortfolioPage['hero'] }) {
	return (
		<section>
			<div className="relative w-full aspect-1920/660 overflow-hidden bg-black flex items-center justify-center">
				<Image
					src={content.imageUrl}
					alt="Hero Banner Image"
					width={1200}
					height={600}
					className="w-full h-auto object-cover object-center"
					loading="lazy"
				/>
			</div>
			<div>
				<h1 className="uppercase text-center leading-[2.2]! m-0! lg:text-[5.21vw]!">{content.title}</h1>
				<Divider />
			</div>
		</section>
	);
}
