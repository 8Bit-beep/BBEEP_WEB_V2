import { create } from "zustand";

interface SignUpStoreType {
  email: string | undefined;
  name: string | undefined;
  department: string | undefined;
  setEmail: (email: string | undefined) => void;
  setName: (name: string | undefined) => void;
  setDepartMent: (department: string | undefined) => void;
}

export const SignUpStore = create<SignUpStoreType>((set) => ({
  email: "",
  name: "",
  department: "",
  setEmail: (email: string | undefined) => set(() => ({ email })),
  setName: (name: string | undefined) => set(() => ({ name })),
  setDepartMent: (department: string | undefined) => set(() => ({ department })),
}));
