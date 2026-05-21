export interface HomePage {
	seo: SeoTypes;

	hero: {
		title: string;
		description: string[];
		bottomDescription: string;
	};

	ourThinking: {
		title: string;
	};

	decisionSection: {
		title: string;
		description: string;
		ctaDescription: string;
		ctaLink: {
			name: string;
			link: string;
		}
	}
}

interface SeoTypes {
	title: string;
	description: string;
}
