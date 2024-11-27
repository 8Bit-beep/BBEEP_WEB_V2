import { useMutation } from 'react-query';
import uploadCsvApi from './api';

export const useUploadCSvMutation = () => {
  const mutation = useMutation((file: FormDataEntryValue) => uploadCsvApi.uploadCsv(file));
  return mutation;
};
