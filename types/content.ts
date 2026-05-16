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
}

interface SeoTypes {
	title: string;
	description: string;
}
