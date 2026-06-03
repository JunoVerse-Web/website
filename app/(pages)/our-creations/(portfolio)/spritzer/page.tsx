import DescriptionSection from "@/app/components/portfolio/description-section";
import HeroBannerTitle from "@/app/components/portfolio/hero-banner-title";
import MultiImageSection from "@/app/components/portfolio/multi-image-section";
import { getPortfolio } from "@/lib/content/getPage";
import { getSeo } from "@/lib/seo/getSeo";
import { PortfolioPage } from "@/types/content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	const page = await getPortfolio("spritzer");

	return getSeo(page);
}

export default async function SpritzerPortfolioPage() {
	const content: PortfolioPage = await getPortfolio("spritzer");

	return (
		<>
			<HeroBannerTitle content={content.hero} />
			<DescriptionSection content={content.descriptionSection} />
			<MultiImageSection
				images={content.galleryImages}
				layout="1-1-1"
				divider={true}
        dividerPosition="bottom"
			/>
		</>
	);
}
