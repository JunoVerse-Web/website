import { getPage } from "@/lib/content/getPage";
import { HomePage } from "@/types/content";
import HeroSection from "../../components/pages/homepage/hero-section";
import { getSeo } from "@/lib/seo/getSeo";
import type { Metadata } from "next";
import CardFeedsSection from "../../components/pages/homepage/card-feeds-section";
import DecisionSection from "../../components/pages/homepage/decision-section";
import ContactForm from "../../components/pages/homepage/contact-form";

export async function generateMetadata(): Promise<Metadata> {
	const page = await getPage("home");

	return getSeo(page);
}

export default async function Home() {
	const content: HomePage = await getPage("home");

	return (
		<main className="homepage">
			<HeroSection
				title={content.hero.title}
				description={content.hero.description}
				bottomDescription={content.hero.bottomDescription}
				cards={content.hero.cards}
			/>
			<CardFeedsSection content={content.cardFeedsSection} />
			<DecisionSection content={content} />
			<ContactForm />
		</main>
	);
}
