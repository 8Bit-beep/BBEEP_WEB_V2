import styled from "styled-components";

export const SidebarWrap = styled.div`
  width: 220px;
  min-width: 220px;
  height: calc(100vh - 100px);

  background: #434f5e;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
`;

export const MenuWrap = styled.div`
  width: 100%;
  height: 210px;

  display: flex;
  flex-direction: column;
  
`;

export const MenuTitle = styled.div`
  width: 100%;
  height: 25%;
  min-height: 25%;

  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;

  padding: 10px;
  padding-left: 0;

  img {
    width: 20px;
    height: 25px;
  }

  span {
    font-size: 20px;
    font-weight: 800;
    color: #fff;
  }
`;

export const MenuItem = styled.div`
  width: 90%;
  height: 75%;
  min-height: 75%;
  background: #496c94;

  display: flex;
  flex-direction: column;
  align-self: flex-end;
  justify-content: space-evenly;

  img {
    width: 15px;
    height: 20px;
  }

  span {
    font-size: 20px;
    font-weight: 800;
    color: #fff;
  }
`;

export const Item = styled.div<{ $isclicked: string }>`
  width: 85%;
  height: 30%;

  display: flex;

  align-items: center;
  justify-content: flex-start;

  padding-left: 15%;
  gap: 30px;

  cursor: pointer;
`;
