import React from "react";
import * as S from "./style";
import SidebarStudent from "src/assets/SidebarStudent.svg";
import SidebarLab from "src/assets/SidebarLab.svg";
import One from "src/assets/1.svg";
import Two from "src/assets/2.svg";
import Three from "src/assets/3.svg";
import { useLocation, useNavigate } from "react-router-dom";
import UseSideBarNavigation from "src/utils/common/sidebarNavigation";

const ClassSidebar = () => {
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
        <S.MenuItem style={{ minHeight: "75%" }}>
          <S.Item
          onClick={() => handleCategoryClick("1층")} 
          $isclicked={isClickCategory === "1층" ? "true" : "false"}>
            <img src={One} />
            <span>1층</span>
          </S.Item>
          <S.Item
          onClick={() => handleCategoryClick("2층")}  
          $isclicked={isClickCategory === "2층" ? "true" : "false"}>
            <img src={Two} />
            <span>2층</span>
          </S.Item>
          <S.Item
          onClick={() => handleCategoryClick("3층")}  
          $isclicked={isClickCategory === "3층" ? "true" : "false"}>
            <img src={Three} />
            <span>3층</span>
          </S.Item>
        </S.MenuItem>
      </S.MenuWrap>
    </S.SidebarWrap>
  );
};

export default ClassSidebar;
