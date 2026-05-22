import { Link } from "./global-types";

export interface HomePage {
	seo: SeoTypes;

	hero: {
		title: string;
		description: string[];
		bottomDescription: string;
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
		},
		cards: FlyingCard[];
	}
}

interface FlyingCard {
	title: string;
	text: string[];
}

export interface CardFeeds {
	topTitle: string;
	mainTitle: string;
	description: string;
	link: Link;
}

interface SeoTypes {
	title: string;
	description: string;
}
