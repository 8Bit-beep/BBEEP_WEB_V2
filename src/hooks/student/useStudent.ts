import { useState, useCallback, useRef } from "react";
import { ClassMemberType } from "src/types/student/student.type";
import { useLocation } from "react-router-dom";
import { converUrlToGrade } from "src/utils/transform/urlTransform";
import token from "src/libs/token/token";
import { ACCESS_TOKEN_KEY } from "src/constants/token.constants";
import { bbeepAxios } from "src/libs/axios/customAxios";
import { memberListStroe } from "src/stores/common/student.store";

const useStudent = () => {
  const [item, setItem] = useState<number>(1);
  const [memberList, setMemberList] = useState<ClassMemberType[]>([]);
  const { pathname } = useLocation();
  const setMemberListStore = memberListStroe((state) => state.setMemberList);

  const handleClass = async (item: number) => {
    setItem(item);

    const grade = Number(converUrlToGrade(pathname));
    await bbeepAxios
      .get(`/student/member-list?grade=${grade}&cls=${item}`, {
        headers: {
          Authorization: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
        },
      })
      .then((res) => {
        setMemberList(res.data.data);
      });
  };
  setMemberListStore(memberList);
            
          });
      } catch (error) {}
    },
    [setItem]
  );
  return {
    item,
    memberList,
    handleClass,
  };
};

export default useStudent;
