import { useGetClassMember } from "src/services/student/queries";
import { useState, useCallback } from "react";
import { sidebarMenuStore } from "src/stores/common/student.store";
import { ClassMemberType } from "@src/types/student/student.type";
import { useGetClassMemberMutation } from "src/services/student/mutation";
import { useLocation } from "react-router-dom";
import { converUrlToGrade } from "src/utils/transform/urlTransform";

const useStudent = () => {
  const [item, setItem] = useState<number>(0);
  const [memberList, setMemberList] = useState<ClassMemberType[]>([]);
  const { pathname } = useLocation();
  const grade = Number(converUrlToGrade(pathname));

  return {
    item,
    memberList,

    setItem,
  };
};

export default useStudent;
