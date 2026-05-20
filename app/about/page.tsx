import { getPage } from "@/lib/content/getPage";
import { HomePage } from "@/types/content";
import HeroSection from "../components/pages/homepage/hero-section";
import { getSeo } from "@/lib/seo/getSeo";
import type { Metadata } from "next";
import OurThinkingSection from "../components/pages/homepage/our-thinking-section";

export async function generateMetadata(): Promise<Metadata> {
	const page = await getPage("home");

	return getSeo(page);
}

export default async function AboutPage() {
	const content: HomePage = await getPage("home");

	return (
		<main className="homepage">
			<HeroSection
				title={content.hero.title}
				description={content.hero.description}
				bottomDescription={content.hero.bottomDescription}
			/>
			{/* <OurThinkingSection title={content.ourThinking.title} /> */}
		</main>
	);
}
