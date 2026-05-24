export interface SeoTypes {
    title: string;
    description: string;
}

export interface Link {
    name: string;
    url: string;
}

export type HomeHeroCardsType = {
	title: string;
	link: string;
};

export type FlyingCard = {
	title: string;
	text: string[];
};

export interface CardFeeds {
	topTitle: string;
	mainTitle: string;
	description: string;
	link: Link;
}

export type ServicesCardType = {
    title: string;
    description: string;
}
