export interface SeoTypes {
	title: string;
	description: string;
}

export interface Link {
	name: string;
	url: string;
}

export type CardsType = {
	link: string;
	title: string;
	video: string;
};

export type SlideCardsType = {
	frontImage: string;
	backImage: string;
};

export type CreationsCardType = {
	link: string;
};

export type FlyingCard = {
	title: string;
	text: string[];
	cardData: CardData;
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
};

export type CardData = {
	id: string;
	formTitle?: string;
	title: string;
	description: string;
	checkboxFields: CheckboxFieldType[];
	radioFields: RadioFieldType[];
};




// Form
export type FormData = {
	formTitle: string;
	title: string;
	description: string;
	name: string;
	email: string;
	phoneNumber: string;
	radioFields: RadioFieldType[];
	selectedRadioboxes: SelectedRadioBox[];
	pdpa: boolean;
};

export type CheckboxFieldType = {
	label: string;
	checkboxes: {
		value: string;
	}[];
};

export type RadioFieldType = {
	label: string;
	radioBoxes: {
		value: string;
	}[];
};

// Tracks which question (`label`) a selected option (`value`) answers.
export type SelectedRadioBox = RadioFieldType["radioBoxes"][number] & {
	label: string;
};