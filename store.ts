import { create } from "zustand";
import { CardData } from "./types/global-types";

type MenuStore = {
	dark: boolean;
	setDark: (dark: boolean) => void;
};

type PopupFormStore = {
	open: boolean;
	setOpen: (open: boolean) => void;
};

export const useMenuStore = create<MenuStore>((set) => ({
	dark: true,
	setDark: (dark: boolean) => set({ dark: !dark }),
}));

export const usePopupFormStore = create<PopupFormStore>((set) => ({
	open: false,
	setOpen: (open: boolean) => set({ open: !open }),
}));

// Form Store
// Form Data
type FormData = {
	title: string;
	description: string;
	name: string;
	email: string;
	phoneNumber: string;
	pdpa: boolean;
};

type FormStore = {
	isFormOpen: boolean;
	formDetails: FormData;

	openForm: (card: CardData) => void;
	closeForm: () => void;
	// Optional: Update individual fields (useful for form inputs)
	updateFormField: <K extends keyof FormData>(key: K, value: FormData[K]) => void;
	resetForm: () => void;
};

export const useFormStore = create<FormStore>((set, get) => ({
	isFormOpen: false,
	formDetails: {
		title: "",
		description: "",
		name: "",
		email: "",
		phoneNumber: "",
		pdpa: false,
	},

	openForm: (card) =>
		set({
			isFormOpen: true,
			formDetails: {
				title: card.title,
				description: card.description,
				name: "",
				email: "",
				phoneNumber: "",
				pdpa: false,
			},
		}),

	closeForm: () =>
		set({
			isFormOpen: false,
			formDetails: {
				title: "",
				description: "",
				name: "",
				email: "",
				phoneNumber: "",
				pdpa: false,
			},
		}),

	updateFormField: (key, value) =>
		set((state) => ({
			formDetails: {
				...state.formDetails,
				[key]: value,
			},
		})),

	resetForm: () =>
		set({
			formDetails: {
				title: "",
				description: "",
				name: "",
				email: "",
				phoneNumber: "",
				pdpa: false,
			},
		}),
}));
