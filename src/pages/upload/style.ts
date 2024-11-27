import styled from 'styled-components';

export const UploadCsvWrapper = styled.div`
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
  width: calc(100% - 228px);
  height: 100%;
`;

export const UploadCsvButton = styled.label`
  width: 160px;
  height: 60px;

  position: absolute;
  left: 85%;
  top: 80%;

  background-color: #3cb0b8;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  border-radius: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const Layer = styled.div`
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

export const LayerList = styled.div`
  width: 100%;
  height: 8%; // 고정 높이 조정
  background: #fff;
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: rgba(60, 176, 184, 0.7);

  span {
    height: 62px;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 18px;
    font-weight: 800;
    flex-grow: 1; // 열들이 동일 크기로 자리 잡기
  }
`;
