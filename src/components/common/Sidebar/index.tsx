import React from "react";
import * as S from "./style";
import SidebarStudent from "src/assets/SidebarStudent.svg";
import SidebarLab from "src/assets/SidebarLab.svg";
import One from "src/assets/1.svg";
import Two from "src/assets/2.svg";
import Three from "src/assets/3.svg";
import Project from "src/assets/Project.svg";
import Lab from "src/assets/Lab.svg";
import { useLocation, useNavigate } from "react-router-dom";
import UseSideBarNavigation from "src/utils/common/sidebarNavigation";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { isClickCategory, handleCategoryClick } = UseSideBarNavigation({ location, navigate });
  return (
    <S.SidebarWrap>
      <S.MenuWrap>
        <S.MenuTitle>
          <img src={SidebarStudent} />
          <span>학생 조회하기</span>
        </S.MenuTitle>
        <S.MenuItem>
          <S.Item
            onClick={() => handleCategoryClick("1학년")}
            $isclicked={isClickCategory === "1학년" ? "true" : "false"}
          >
            <img src={One} />
            <span>1학년</span>
          </S.Item>
          <S.Item
            onClick={() => handleCategoryClick("2학년")}
            $isclicked={isClickCategory === "2학년" ? "true" : "false"}
          >
            <img src={Two} />
            <span>2학년</span>
          </S.Item>
          <S.Item
            onClick={() => handleCategoryClick("3학년")}
            $isclicked={isClickCategory === "3학년" ? "true" : "false"}
          >
            <img src={Three} />
            <span>3학년</span>
          </S.Item>
        </S.MenuItem>
        <S.MenuTitle>
          <img src={SidebarLab} />
          <span>실 조회햐기</span>
        </S.MenuTitle>
        <S.MenuItem style={{ minHeight: "50%" }}>
          <S.Item $isclicked={isClickCategory === "1학년" ? "true" : "false"}>
            <img src={Project} />
            <span>프로젝트 실</span>
          </S.Item>
          <S.Item $isclicked={isClickCategory === "1학년" ? "true" : "false"}>
            <img src={Lab} />
            <span>LAB 실</span>
          </S.Item>
        </S.MenuItem>
      </S.MenuWrap>
    </S.SidebarWrap>
  );
};

export default Sidebar;
