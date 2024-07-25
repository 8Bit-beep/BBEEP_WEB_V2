import React from "react";
import * as S from "./style";
import useStudent from "src/hooks/student/useStudent";
const ClassSidebar = () => {
  const { item, setItem } = useStudent();
  return (
    <S.ClassSidebar>
      <S.ClassSidebarItemWrap>
        <S.ClassSidebarItem onClick={() => setItem(1)} $isclicked={item === 1 ? "true" : "false"}>
          <span>1반</span>
        </S.ClassSidebarItem>
        <S.ClassSidebarItem onClick={() => setItem(2)} $isclicked={item === 2 ? "true" : "false"}>
          <span>2반</span>
        </S.ClassSidebarItem>
        <S.ClassSidebarItem onClick={() => setItem(3)} $isclicked={item === 3 ? "true" : "false"}>
          <span>3반</span>
        </S.ClassSidebarItem>
        <S.ClassSidebarItem onClick={() => setItem(4)} $isclicked={item === 4 ? "true" : "false"}>
          <span>4반</span>
        </S.ClassSidebarItem>
      </S.ClassSidebarItemWrap>
    </S.ClassSidebar>
  );
};

export default ClassSidebar;
