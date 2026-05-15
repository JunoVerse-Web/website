import { getPage } from "@/lib/content/getPage";
import { HomePage } from "@/types/content";
import HeroSection from "./components/pages/homepage/hero-section";
import CardsSection from "./components/pages/homepage/cards-section";
import { getSeo } from "@/lib/seo/getSeo";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	const page = await getPage("home");

	return getSeo(page);
}

export default async function Home() {
	const content: HomePage = await getPage("home");

	return (
		<>
			<HeroSection
				title={content.hero.title}
				description={content.hero.description}
				bottomDescription={content.hero.bottomDescription}
			/>
			<CardsSection />
			<div className="min-h-screen w-screen bg-gray"></div>
		</>
	);
}
