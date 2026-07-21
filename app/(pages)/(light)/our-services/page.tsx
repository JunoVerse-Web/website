import { getPage } from "@/lib/content/getPage";
import { ServicesPage } from "@/types/content";
import { getSeo } from "@/lib/seo/getSeo";
import type { Metadata } from "next";
import HeroSection from "@/app/components/pages/services/hero-section";

export async function generateMetadata(): Promise<Metadata> {
	const page = await getPage("services");

	return getSeo(page);
}

export default async function Home() {
	const content: ServicesPage = await getPage("services");

	return (
		<main className="services-page">
			<HeroSection
				title={content.hero.title}
				mainDescription={content.hero.mainDescription}
				secondDescription={content.hero.secondDescription}
				cards={content.hero.cards}
			/>
		</main>
	);
}
