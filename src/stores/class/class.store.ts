import create from 'zustand';

interface ClassState {
  codeValueArray: Array<{ key: string; value: string }>;
  setCodeValueArray: (newArray: Array<{ key: string; value: string }>) => void;
}

export const useClassStore = create<ClassState>((set) => ({
  codeValueArray: [],
  setCodeValueArray: (newArray) => set({ codeValueArray: newArray }),
}));
