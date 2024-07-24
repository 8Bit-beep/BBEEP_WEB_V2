import React from "react";
import * as S from "./style";
import Header from "src/components/common/Header";
import Sidebar from "src/components/common/Sidebar";
import ClassSidebar from "src/components/common/Sidebar/classSidebar";
import useStudent from "src/hooks/student/useStudent";

const CheckStudent = () => {
  const { ...student } = useStudent();
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
            {/* {student.memberList?.map((item, idx) => (
              <S.StudentLayer key={idx}>
                <span>{item.name}</span>
                <span>{item.num}</span>
                <span>{item.floor}</span>
                <span>{item.roomName}</span>
              </S.StudentLayer>
            ))} */}
            {student.memberList.map((item, idx) => (
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
