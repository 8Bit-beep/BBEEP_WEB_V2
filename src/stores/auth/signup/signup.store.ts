import { create } from "zustand";

interface SignUpStoreType {
  email: string;
  name: string;
  department: string;
  setEmail: (email: string) => void;
  setName: (name: string) => void;
  setDepartMent: (department: string) => void;
}

export const SignUpStore = create<SignUpStoreType>((set) => ({
  email: "",
  name: "",
  department: "",
  setEmail: (email: string) => set(() => ({ email })),
  setName: (name: string) => set(() => ({ name })),
  setDepartMent: (department: string) => set(() => ({ department })),
}));

