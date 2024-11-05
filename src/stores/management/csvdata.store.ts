import { CsvDataType } from "@src/types/management/csvDataType";
import { create } from "zustand";

interface CsvData {
  Csv: CsvDataType[];
  setCsv: (Csv: CsvDataType[]) => void;
}

export const CsvDataStore = create<CsvData>((set) => ({
  Csv: [],
  setCsv: (Csv: CsvDataType[]) => set(() => ({ Csv })),
}));
