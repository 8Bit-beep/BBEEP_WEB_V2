import { AxiosError } from 'axios';
import React, { useRef } from 'react';
import { useUploadCSvMutation } from 'src/services/upload/mutation';

const useUpload = () => {
  const fileRef = useRef<HTMLInputElement>(null);

  const formData = new FormData();
  const handleFileChange = () => {
    fileRef.current?.click();
  };

  const uploadMutation = useUploadCSvMutation();
  const upload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (file) {
      formData.append('file', file[0]);

      try {
        uploadMutation.mutate(formData.get('file')!, {
          onSuccess: () => {
            alert('파일 업로드 성공!');
          },
          onError: (error) => {
            alert((error as AxiosError).message);
          },
        });
      } catch (error) {}
    } else {
      alert('파일을 선택해주세요');
    }
  };

  return {
    handleFileChange,
    upload,
    fileRef,
  };
};

export default useUpload;
