import { create } from "zustand";

interface SidebarMenu {
  menu: string;
  setMenu: (item: string) => void;
}

export const sidebarMenuStore = create<SidebarMenu>((set) => ({
  menu: "",
  setMenu: (menu: string) => set(() => ({ menu })),
}));
