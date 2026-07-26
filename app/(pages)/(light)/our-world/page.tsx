import HeroSection from "@/app/components/shared/hero-section";
import { Metadata } from "next";
import { getSeo } from "@/lib/seo/getSeo";
import { getPage } from "@/lib/content/getPage";
import type { OurWorldPage } from "@/types/content";
import CharacterSequence from "@/app/components/pages/our-world/character-sequence";
import ContentSection from "@/app/components/pages/our-world/content-section";

export async function generateMetadata(): Promise<Metadata> {
	const page = await getPage("our-world");

	return getSeo(page);
}

export default async function OurWorldPage() {
	const content: OurWorldPage = await getPage("our-world");

	const { box2, box3 } = content;

	return (
		<main className="our-world-page">
			<HeroSection
				title={"Passion Powered Projects"}
				description={["We don't just create magic - we build where it comes from."]}
			/>

			{/* Hoodle Content Sections */}
			<ContentSection box2={box2} box3={box3} />

		</main>
	);
}
