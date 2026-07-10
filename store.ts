import { create } from "zustand";
import { CardData, FormData, CheckboxFieldType, RadioFieldType } from "./types/global-types";

// ======================================================
// 						Menu Store
// ======================================================

type MenuStore = {
	dark: boolean;
	setDark: (dark: boolean) => void;
};

export const useMenuStore = create<MenuStore>((set) => ({
	dark: true,
	setDark: (dark: boolean) => set({ dark: !dark }),
}));

// ======================================================
// 						Popup Store
// ======================================================
type PopupFormStore = {
	open: boolean;
	setOpen: (open: boolean) => void;
};

export const usePopupFormStore = create<PopupFormStore>((set) => ({
	open: false,
	setOpen: (open: boolean) => set({ open: !open }),
}));

// ======================================================
// 						Form Store
// ======================================================
type FormStore = {
	isFormOpen: boolean;
	formDetails: FormData;

	openForm: (card: CardData) => void;
	closeForm: () => void;
	// Optional: Update individual fields (useful for form inputs)
	updateFormField: <K extends keyof FormData>(key: K, value: FormData[K]) => void;
	resetForm: () => void;
};
const emptyForm = {
	title: "",
	description: "",
	radioFields: [],
	selectedRadioboxes: [],
	name: "",
	email: "",
	phoneNumber: "",
	pdpa: false,
};

export const useFormStore = create<FormStore>((set, get) => ({
	isFormOpen: false,
	formDetails: emptyForm,

	openForm: (card) => {
		set({
			isFormOpen: true,
			formDetails: {
				title: card.title,
				description: card.description,
				radioFields: card.radioFields,
				selectedRadioboxes: [] as RadioFieldType["radioBoxes"][number][],
				name: "",
				email: "",
				phoneNumber: "",
				pdpa: false,
			},
		});
	},

	closeForm: () =>
		set({
			isFormOpen: false,
			formDetails: emptyForm,
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
			formDetails: emptyForm,
		}),
}));
