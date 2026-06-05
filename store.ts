import { create } from "zustand";

type MenuStore = {
	dark: boolean;
    setDark: (dark: boolean) => void;
};

type PopupFormStore = {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export const useMenuStore = create<MenuStore>((set) => ({
	dark: true,
    setDark: (dark: boolean) => set({ dark: !dark }),
}));

export const usePopupFormStore = create<PopupFormStore>((set) => ({
    open: false,
    setOpen: (open: boolean) => set({ open: !open }),
}))




// Form Store
type CardData = {
  id: string;
  title: string;
};

type FormStore = {
  isFormOpen: boolean;
  selectedCard: CardData | null;
  openForm: (card: CardData) => void;
  closeForm: () => void;
};

export const useFormStore = create<FormStore>((set) => ({
  isFormOpen: false,
  selectedCard: null,

  openForm: (card) =>
    set({
      isFormOpen: true,
      selectedCard: card,
    }),

  closeForm: () =>
    set({
      isFormOpen: false,
      selectedCard: null,
    }),
}));