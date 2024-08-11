import styled from "styled-components";

export const CheckClassWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 100px);
`;

export const ContentWrapper = styled.div`
  width: calc(100% - 220px);
  height: 100%;
`;

export const ContentMainWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 60px 6.356%;
  margin-top: 5%;
`;

export const ClassItem = styled.div<{ clicked: boolean }>`
  width: 200px;
  height: 120px;
  background: ${({ clicked }) => (clicked === true ? "#3cb0b8" : "transparent")};
  display: flex;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  &:active {
    background-color: #3cb0b8;
  }
`;

export const ItemContentWrap = styled.div`
  width: 89%;
  height: 75%;
  background-color: #323a45;
  border-radius: 10px;
  box-shadow: inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
