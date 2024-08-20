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
  background-color: #fff;
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

export const TitleSpan = styled.span`
  font-size: 1.8rem;
  margin-bottom: 10%;
`;

export const StyleInput = styled.input`
  width: 93%;
  height: 65px;
  margin-bottom: 5%;
  border-radius: 8px;
  background-color: #dddee0;
  padding-left: 7%;
`;

export const EmailWrap = styled.div`
  width: 100%;
  height: 65px;
  margin-bottom: 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EmailCheckInput = styled.input`
  width: 69%;
  height: 100%;
  border: 2px solid #979797;
  border-radius: 8px;
  padding-left: 6%;
  outline: none;
`;

export const EmailCheckButton = styled.button`
  width: 20%;
  height: 100%;
  background-color: #434f5e;
  font-size: 1rem;
  color: white;
  border-radius: 8px;
`;

export const CheckNumInput = styled.input`
  width: 92%;
  height: 65px;
  margin-bottom: 5%;
  border-radius: 8px;
  border: 2px solid #979797;
  padding-left: 7%;
  outline: none;
`;

export const PassWordInput = styled.input`
  width: 92%;
  height: 65px;
  margin-bottom: 5%;
  border-radius: 8px;
  border: 2px solid #979797;
  padding-left: 7%;
  outline: none;
`;

export const CheckPwInput = styled.input`
  width: 92%;
  height: 65px;
  margin-bottom: 5%;
  border-radius: 8px;
  border: 2px solid #979797;
  padding-left: 7%;
  outline: none;
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

export const DepartmentInput = styled.input`
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

export const FindCheckButton = styled.button`
  width: 80%;
  height: 65px;
  background-color: #303a46;
  border-radius: 8px;
  margin-top: 5%;
  color: #fff;
  font-size: 1.2rem;
  border: none;
`;

export const BackButton = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 10%;
`;

export const DropDownWrap = styled.div`
  width: 100%;
  height: 65px;
  border-radius: 8px;
  display: flex;
  border: 1px solid #c8c8c8;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

export const DropDownListWrap = styled.ul`
  width: 24.5%;
  height: 20%;
  position: absolute;
  z-index: 5;
  overflow-y: scroll;
`;

export const DropDownList = styled.li`
  width: 100%;
  height: 50px;
  border: 1px solid #c8c8c8;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  &:hover {
    background-color: #aeaeae;
  }
`;
