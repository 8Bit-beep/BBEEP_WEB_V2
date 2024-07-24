import styled from "styled-components";

export const CheckStudentWrap = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  width: 100%;
  height: calc(100% - 100px);

  display: flex;
`;

export const MainView = styled.div`
  width: calc(100% - 220px);
  height: 100%;

  display: flex;
`;

export const ViewStudentWrap = styled.div`
  width: 86%;
  height: calc(100vh - 100px);
  min-height: calc(100vh - 100px);

  display: flex;
  flex-direction: column;

  gap: 10px;

  overflow: scroll;

  background: #f1f1f1;
`;

export const StudentLayer = styled.div`
  width: 100%;
  height: 8%;

  background: #fff;

  display: flex;
  align-items: center;
  justify-content: space-around;

  span {
    font-size: 18px;
    font-weight: 800;
  }
`;
