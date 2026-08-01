import { getPage } from "@/lib/content/getPage";
import { HomePage } from "@/types/content";
import { getSeo } from "@/lib/seo/getSeo";
import type { Metadata } from "next";
import PhilosophyInteractive from "@/app/components/pages/philosophy/philosophy-interactive";

export async function generateMetadata(): Promise<Metadata> {
	const page = await getPage("our-philosophy");

	return getSeo(page);
}

export default async function Home() {
	const content: HomePage = await getPage("our-philosophy");

	const { hero } = content;

	return (
		<main className="our-philosophy">
			<section
				data-section="philosophy-hero"
				className="px-[9.38vw] pt-[180px] md:pt-[220px] lg:pt-[12vw] pb-[2vw] h-screen flex flex-col max-md:gap-20 max-md:justify-between"
			>
				<div className="text-center">
					<h1 className="text-white md:mb-[8.33vw]!">{hero.title}</h1>
				</div>

				<PhilosophyInteractive />
			</section>
		</main>
	);
}
