import styled from "styled-components";
import BackgroundImg from "src/assets/BbeepBackGround.svg";
import LoginImg from "src/assets/LoginImg.svg";
import BbeepLogo from "src/assets/BbeepLoginLogo.svg";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
`;

export const SignInWrapper = styled.div`
  width: 70%;
  height: 79%;
  background-color: white;
  display: flex;
  box-shadow: 0px 4px 250px 0px rgba(0, 0, 0, 0.25);
`;

export const SignInImgWrapper = styled.div`
  width: 50%;
  height: 100%;
  background-image: url(${LoginImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SingInContentWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.div`
  width: 100%;
  height: 70%;
  min-width: 100%;
  min-height: 70%;
  background-image: url(${BbeepLogo});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 20%;
  margin-top: 5%;
  justify-content: space-between;
`;

export const LoginTitle = styled.span`
  font-size: 1.5rem;
  color: #2e3742;
`;

export const SiginInputWrapper = styled.div`
  width: 80%;
  height: 30%;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const EmailInput = styled.input`
  width: 90%;
  height: 30%;
  padding-left: 10%;
  background-color: #dddee0;
  border-radius: 0.5rem;
  font-size: 1.2rem;
`;

export const PwInput = styled.input`
  width: 90%;
  height: 30%;
  padding-left: 10%;
  background-color: #dddee0;
  border-radius: 0.5rem;
  font-size: 1.2rem;
`;

export const LoginKeepWrapper = styled.div`
  display: flex;
  width: 30%;
  height: 20%;
  justify-content: center;
  align-items: center;
`;

export const LoginKeepBox = styled.input`
  width: 35%;
  height: 60%;
  background-color: yellow;
`;

export const LoginKeepText = styled.span`
  font-size: 1.2rem;
  color: #6f7071;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 14%;
  margin-top: 5%;
  justify-content: space-between;
`;

export const SignInButton = styled.button`
  width: 100%;
  height: 65%;
  background-color: red;
  background-color: #303a46;
  border-radius: 0.5rem;
  color: white;
  font-size: 1.2rem;
`;

export const ForgotPw = styled.span`
  font-size: 1rem;
  color: #acadae;
  margin-left: 65%;
`;
