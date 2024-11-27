import { UploadCsvResponse } from 'src/types/upload/upload.type';
import { create } from 'zustand';

interface Upload {
  uploadMember: UploadCsvResponse;
  setUploadMember: (uploadMember: UploadCsvResponse) => void;
}

export const UploadStore = create<Upload>((set) => ({
  uploadMember: { data: [] },
  setUploadMember: (uploadMember: UploadCsvResponse) => set(() => ({ uploadMember })),
}));
