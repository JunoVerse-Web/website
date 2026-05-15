export interface HomePage {
	seo: SeoTypes;

	hero: {
		title: string;
		description: string[];
        bottomDescription: string;
	};

	services: {
		title: string;
		description: string;
	}[];
}

interface SeoTypes {
	title: string;
	description: string;
}
