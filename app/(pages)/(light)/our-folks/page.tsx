import { getPage } from "@/lib/content/getPage";
import { OurFolksPage } from "@/types/content";
import { getSeo } from "@/lib/seo/getSeo";
import type { Metadata } from "next";
import HeroSection from "@/app/components/pages/our-folks/hero-section";

export async function generateMetadata(): Promise<Metadata> {
	const page = await getPage("our-folks");

	return getSeo(page);
}

export default async function Home() {
	const content: OurFolksPage = await getPage("our-folks");

	return (
		<main className="our-folks">
			<HeroSection
				title={content.hero.title}
				description={content.hero.description}
				cards={content.hero.cards}
			/>
		</main>
	);
}
