import { AxiosError } from 'axios';
import dayjs from 'dayjs';
import React, { useRef, useState } from 'react';
import { useDownlodCsvMutation, useUploadCSvMutation } from 'src/services/upload/mutation';

const useUpload = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

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

  const downlodCsvMutation = useDownlodCsvMutation();
  const download = () => {
    downlodCsvMutation.mutate(undefined, {
      onSuccess: (res) => {
        const url = URL.createObjectURL(new Blob([res]));
        const a = document.createElement('a');
        a.href = url;
        a.download = dayjs().format('YYYY-MM-DD') + '방과후 학생 명단.xlsx';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return {
    handleFileChange,
    upload,
    fileRef,
    download,
    file,
  };
};

export default useUpload;
