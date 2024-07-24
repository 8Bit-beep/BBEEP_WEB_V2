import styled from "styled-components";

export const ClassSidebar = styled.div`
  width: 14%;
  height: 100%;

  background: #b2bdc6;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ClassSidebarItemWrap = styled.div`
  width: 100%;
  height: 38%;
`;

export const ClassSidebarItem = styled.div<{ $isclicked: string }>`
  width: 100%;
  height: 25%;

  background: ${({ $isclicked }) => ($isclicked === "true" ? "#3cb0b8" : "transparent")};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  span {
    font-size: 24px;
    font-weight: 800;
    color: #fff;
  }
`;
