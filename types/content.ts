import { CardFeeds, FlyingCard, CardsType, SeoTypes, ServicesCardType, CreationsCardType, SlideCardsType } from "./global-types";

export interface HomePage {
	seo: SeoTypes;

	hero: {
		title: string;
		description: string[];
		bottomDescription: string;
		cards: CardsType[];
	};

	cardFeedsSection: {
		title: string;
		cards: CardFeeds[];
	};

	decisionSection: {
		title: string;
		description: string;
		ctaDescription: string;
		ctaLink: {
			name: string;
			link: string;
		};
		cards: FlyingCard[];
	};
}

export interface OurWorldPage {
	seo: SeoTypes;

	box2: {
		image1: string;
		image2: string;
		image3: string;
		image4: string;
		image5: string;
		image6: string;
	};

	box3: {
		image1: string;
		image2: string;
		image3: string;
		image4: string;
		image5: string;
		image6: string;
	};

}

export interface PrivacyPolicyPage {
	seo: SeoTypes;

}

export interface OurFolksPage {
	seo: SeoTypes;

	hero: {
		title: string;
		description: string[];
		cards: SlideCardsType[];
	};
}

export interface ServicesPage {
	seo: SeoTypes;

	hero: {
		title: string;
		mainDescription: string;
		secondDescription: string;
		cards: ServicesCardType[];
	};
}

export interface CreationsPage {
	seo: SeoTypes;

	hero: {
		title: string;
		description: string;
		cards: CreationsCardType[];
	};
}

// Portfolio Pages Type
export interface PortfolioPage {
	seo: SeoTypes;

	hero: {
		title: string;
		imageUrl: string;
	};

	descriptionSection: {
		title: string;
		points: {
			title: string;
			description: string;
		}[];
	};

	galleryImagesType: string[];
	galleryImages1: string[];
	galleryImages2: string[];
	galleryImages3: string[];

	singleImageType: string;
	singleImage1: string;
	singleImage2: string;
	singleImage3: string;

	smallDescriptionSection: {
		title: string;
		description: string;
	}
}
