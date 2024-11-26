import { useState } from 'react';
import token from 'src/libs/token/token';
import { ACCESS_TOKEN_KEY } from 'src/constants/token.constants';
import { bbeepAxios } from 'src/libs/axios/customAxios';
import { ClassManagement, ClassManagementResponse } from 'src/types/management/studentManagement.type';
import { ClubEnumType } from 'src/types/management/clubEnumType';
import { UploadStore } from 'src/stores/upload/upload.store';

const useManagement = () => {
  const [memberList, setMemberList] = useState<ClassManagement[]>([]);
  const uploadMember = UploadStore((state) => state.uploadMember);
  const handleManagement = async (club: ClubEnumType) => {
    bbeepAxios
      .get<ClassManagementResponse>(`/student/study-list?club=${club}`, {
        headers: {
          Authorization: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
        },
      })
      .then((res) => {
        const filteredList = res.data.data.filter((member) =>
          uploadMember.data.some((uploaded) => uploaded.name !== member.name)
        );
        setMemberList(filteredList);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return {
    memberList,
    handleManagement,
  };
};

export default useManagement;
