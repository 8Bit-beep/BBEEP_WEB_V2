import { useState } from "react";
import token from "src/libs/token/token";
import { ACCESS_TOKEN_KEY } from "src/constants/token.constants";
import { bbeepAxios } from "src/libs/axios/customAxios";
import { ClassManagement } from "src/types/management/studentManagement.type";
import { ClubEnumType } from "src/types/management/clubEnumType";

const useManagement = () => {
  const [memberList, setMemberList] = useState<ClassManagement[]>([]);

  const handleManagement = async (club: ClubEnumType) => {
    bbeepAxios
      .get(`/student/study-list?club=${club}`, {
        headers: {
          Authorization: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
        },
      })
      .then((res) => {
        setMemberList(res.data.data);
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
