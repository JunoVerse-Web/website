import { create } from "zustand";

type MenuStore = {
	dark: boolean;
    setDark: (dark: boolean) => void;
};

export const useMenuStore = create<MenuStore>((set) => ({
	dark: true,
    setDark: (dark: boolean) => set({ dark: !dark }),
}));
