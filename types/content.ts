import { CardFeeds, FlyingCard, CardsType, SeoTypes, ServicesCardType, CreationsCardType } from "./global-types";

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

export interface PrivacyPolicyPage {
	seo: SeoTypes;

}

export interface OurFolksPage {
	seo: SeoTypes;

	hero: {
		title: string;
		description: string[];
		cards: CardsType[];
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
