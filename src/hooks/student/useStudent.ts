import { useGetClassMembers } from "src/services/student/queries";
import { useState, useCallback } from "react";
import { sidebarMenuStore } from "src/stores/common/student.store";
import { ClassMemberResponse } from "src/types/student/student.type";
import { useLocation } from "react-router-dom";
import { converUrlToGrade } from "src/utils/transform/urlTransform";
import axios from "axios";
import CONFIG from "src/config/config.json";
import token from "src/libs/token/token";
import { ACCESS_TOKEN_KEY } from "src/constants/token.constants";

const useStudent = () => {
  const [item, setItem] = useState<number>(1);
  const [memberList, setMemberList] = useState<ClassMemberResponse>();
  const { pathname } = useLocation();

  const handleClass = useCallback(
    async (item: number) => {
      setItem(item);
      const grade = Number(converUrlToGrade(pathname));
      try {
        await axios
          .get(`${CONFIG.serverUrl}/student/member-list?grade=${grade}&cls=${item}`, {
            headers: {
              Authorization: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
            },
          })
          .then((res) => {
            console.log(res.data);

            setMemberList(res.data);
          });
      } catch (error) {}
    },
    [setItem],
  );
  return {
    item,
    memberList,
    handleClass,
  };
};

export default useStudent;
