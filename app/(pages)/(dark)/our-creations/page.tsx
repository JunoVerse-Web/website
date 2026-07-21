import { getPage } from "@/lib/content/getPage";
import { CreationsPage } from "@/types/content";
import { getSeo } from "@/lib/seo/getSeo";
import type { Metadata } from "next";
import HeroSection from "@/app/components/pages/creations/hero-section";

export async function generateMetadata(): Promise<Metadata> {
	const page = await getPage("creations");

	return getSeo(page);
}

export default async function Home() {
	const content: CreationsPage = await getPage("creations");

	return (
		<main className="creations-page">
			<HeroSection
				title={content.hero.title}
				description={content.hero.description}
				cards={content.hero.cards}
			/>
		</main>
	);
}
