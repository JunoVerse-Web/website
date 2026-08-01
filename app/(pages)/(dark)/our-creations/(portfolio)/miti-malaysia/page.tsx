import DescriptionSection from "@/app/components/portfolio/description-section";
import HeroBannerTitle from "@/app/components/portfolio/hero-banner-title";
import MultiImageSection from "@/app/components/portfolio/multi-image-section";
import SingleImageSection from "@/app/components/portfolio/single-image-section";
import SmallDescriptionSection from "@/app/components/portfolio/small-description-section";
import { getPortfolio } from "@/lib/content/getPage";
import { getSeo } from "@/lib/seo/getSeo";
import { PortfolioPage } from "@/types/content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	const page = await getPortfolio("miti-malaysia");

	return getSeo(page);
}

export default async function TiktokShopPortfolioPage() {
	const content: PortfolioPage = await getPortfolio("miti-malaysia");

	return (
		<>
			<HeroBannerTitle content={content.hero} />
			<DescriptionSection content={content.descriptionSection} />
			<SingleImageSection content={content.singleImage1} className="mb-4 md:mb-8 lg:mb-[2.34vw]"/>
			<SingleImageSection content={content.singleImage2} className="mb-4 md:mb-8 lg:mb-[2.34vw]"/>
			
			<SmallDescriptionSection
				className="pb-6 pt-10 min-[766px]:py-[2.34vw]"
				content={content.smallDescriptionSection}
			/>
			<MultiImageSection
				images={content.galleryImages1}
				layout="1-2"
				divider={false}
				className="pb-25"
			/>
		</>
	);
}
