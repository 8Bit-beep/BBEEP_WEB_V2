import React, { useEffect } from "react";
import * as S from "./style";
import Header from "src/components/common/Header/index.tsx";
import Sidebar from "src/components/common/Sidebar/index.tsx";
import ClassSidebar from "src/components/common/Sidebar/classSidebar/index.tsx";
import useStudent from "src/hooks/student/useStudent.ts";
import { memberListStroe } from "src/stores/common/student.store";

const CheckStudent = () => {
  // const { ...student } = useStudent();
  // const { memberList } = useStudent();
  const memberList = memberListStroe((state) => state.memberList);
  return (
    <S.CheckStudentWrap>
      <Header />
      <S.Main>
        <Sidebar />
        <S.MainView>
          <ClassSidebar />
          <S.ViewStudentWrap>
            <S.StudentLayer>
              <span>이름</span>
              <span>학번</span>
              <span>층</span>
              <span>실</span>
            </S.StudentLayer>
            {memberList?.map((item, idx) => (
              <S.StudentLayer key={idx}>
                <span>{item.name}</span>
                <span>{item.num}</span>
                <span>{item.floor}</span>
                <span>{item.roomName}</span>
              </S.StudentLayer>
            ))}
          </S.ViewStudentWrap>
        </S.MainView>
      </S.Main>
    </S.CheckStudentWrap>
  );
};

export default CheckStudent;
