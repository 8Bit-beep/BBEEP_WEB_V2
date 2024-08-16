import styled from "styled-components";
import backGround from "src/assets/BbeepBackGround.svg";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backGround});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SignUpWrapper = styled.div`
  width: 35%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f7f9;
  box-shadow: 0px 4px 250px 0px rgba(0, 0, 0, 0.25);
`;

export const SignUpMainWrapper = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2%;
  margin-bottom: 15%;
`;

export const BbeepLogo = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10%;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const InputTitleSpan = styled.span`
  font-size: 1.2rem;
  margin-bottom: 10%;
`;

export const StyleInput = styled.input`
  width: 93%;
  height: 65px;
  margin-bottom: 5%;
  background-color: red;
  border-radius: 8px;
  background-color: #dddee0;
  padding-left: 7%;
`;

export const PwInput = styled.input`
  width: 93%;
  height: 65px;
  margin-bottom: 5%;
  background-color: red;
  border-radius: 8px;
  background-color: #dddee0;
  padding-left: 7%;
`;

export const PwCheckInput = styled.input`
  width: 93%;
  height: 65px;
  margin-bottom: 5%;
  background-color: red;
  border-radius: 8px;
  background-color: #dddee0;
  padding-left: 7%;
`;

export const NameInput = styled.input`
  width: 93%;
  height: 65px;
  margin-bottom: 5%;
  background-color: red;
  border-radius: 8px;
  background-color: #dddee0;
  padding-left: 7%;
`;

export const EmailInput = styled.input`
  width: 93%;
  height: 65px;
  margin-bottom: 5%;
  background-color: red;
  border-radius: 8px;
  background-color: #dddee0;
  padding-left: 7%;
`;

export const SignUpButton = styled.button`
  width: 100%;
  height: 65px;
  background-color: #303a46;
  border-radius: 8px;
  margin-top: 20px;
  color: #fff;
  font-size: 1.2rem;
  border: none;
`;

export const BackButton = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 10%;
`;
