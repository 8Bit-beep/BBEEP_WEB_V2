import { create } from "zustand";

interface ClassTitle {
  title: Array<{ key: string; value: string }>;
  setTitle: (title: Array<{ key: string; value: string }>) => void;
}

export const ClassTitleStore = create<ClassTitle>((set) => ({
  title: [],
  setTitle: (title: Array<{ key: string; value: string }>) => set(() => ({ title })),
}));
