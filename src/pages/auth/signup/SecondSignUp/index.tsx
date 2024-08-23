import * as S from "../style";
import { SetStateAction, useState, Dispatch } from "react";
import Logo from "src/assets/auth/signup/BbeepLogo.svg";
import Back from "src/assets/auth/signup/BackButton.svg";
import UseSignUp from "src/hooks/auth/useSignUp";

interface Props {
  check: boolean | (() => void);
  setCheck: Dispatch<SetStateAction<boolean>>;
  setNext: Dispatch<SetStateAction<boolean>>;
}

const SecondSignUp = ({ check, setCheck, setNext }: Props) => {
  const { SignUpHandle, signup, SignUpButton } = UseSignUp();

  const PwCheckRender = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      setCheck(true);
    }
  };

  const OnBack = () => {
    setCheck(false);
    setNext(true);
  };
  return (
    <S.SignUpWrapper>
      <S.SignUpMainWrapper>
        <S.BackButton src={Back} onClick={OnBack} />
        <S.ContentWrapper>
          <S.BbeepLogo src={Logo} />
          <S.InputWrapper>
            <S.InputTitleSpan>비밀번호 설정</S.InputTitleSpan>
            <S.PwInput
              placeholder="비밀번호를 입력하세요"
              onChange={SignUpHandle}
              onKeyDown={PwCheckRender}
              name="password"
              id="password"
              value={signup.password}
            />
            {check === true && <S.PwCheckInput placeholder="비밀번호를 확인해주세요" id="check" name="check" />}
            <S.SignUpButton onClick={SignUpButton}>회원가입</S.SignUpButton>
          </S.InputWrapper>
        </S.ContentWrapper>
      </S.SignUpMainWrapper>
    </S.SignUpWrapper>
  );
};

export default SecondSignUp;
