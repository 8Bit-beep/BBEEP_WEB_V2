import * as S from "../style";
import { SetStateAction, Dispatch } from "react";
import Logo from "src/assets/auth/signup/BbeepLogo.svg";
import UseSignUp from "src/hooks/auth/useSignUp";
import Back from "src/assets/auth/signup/BackButton.svg";

interface Props {
  setNext: React.Dispatch<React.SetStateAction<boolean>>;
}

const SecondSignUp = ({ setNext }: Props) => {
  const { SignUpHandle, signup, SignUpButton } = UseSignUp();

  return (
    <S.SignUpWrapper>
      <S.SignUpMainWrapper>
        <S.BackButton src={Back} onClick={() => setNext(true)} />
        <S.ContentWrapper>
          <S.BbeepLogo src={Logo} />
          <S.InputWrapper>
            <S.InputTitleSpan>비밀번호 설정</S.InputTitleSpan>
            <S.PwInput
              placeholder="비밀번호를 입력하세요"
              onChange={SignUpHandle}
              name="password"
              id="password"
              value={signup.password}
            />
            <S.PwCheckInput placeholder="비밀번호를 확인해주세요" id="check" name="check" />
            <S.SignUpButton onClick={SignUpButton}>회원가입</S.SignUpButton>
          </S.InputWrapper>
        </S.ContentWrapper>
      </S.SignUpMainWrapper>
    </S.SignUpWrapper>
  );
};

export default SecondSignUp;
