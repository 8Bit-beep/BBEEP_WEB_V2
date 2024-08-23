import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: rgba(0, 0, 0, 0.34);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 65%;
  height: 80%;
  display: flex;
  background: #f8f5f5;
  border-radius: 20px;
  box-shadow: 4px 4px 16px 4px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

export const ModalMainWrapper = styled.div`
  width: 92%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;

export const ModalTitleWrapper = styled.div`
  width: 22%;
  height: 60%;
  background-color: #3cb0b8;
  display: flex;
  margin: 0 auto;
  border-radius: 10px;
  align-self: center;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: white;
`;

export const HeaderLineWrapper = styled.div`
  width: 100%;
  height: 18%;
  display: flex;
  margin-bottom: 2%;
`;

export const ModalListWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 5.95%;
  align-self: center;
  overflow-y: scroll;
`;

export const ListItem = styled.div`
  display: flex;
  width: 300px;
  height: 80px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 1px 1px 12px 1px rgba(0, 0, 0, 0.1);
  justify-content: space-evenly;
  align-items: center;
`;
