import { ReactElement, useState } from "react";
import * as S from "./style";
import Logo from "src/assets/auth/signup/BbeepLogo.svg";
import Back from "src/assets/auth/signup/BackButton.svg";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [check, setCheck] = useState<boolean>(false);
  const [next, setNext] = useState<boolean>(true);

  const naviagate = useNavigate();

  const PwCheckRender = (e: any) => {
    if (e.key === "Enter") {
      setCheck(true);
    }
  };

  const NextRender = () => {
    setNext(false);
  };

  const BackButton = () => {
    naviagate("/sign-in");
  };

  return (
    <S.Wrapper>
      {next === true ? (
        <S.SignUpWrapper>
          <S.SignUpMainWrapper>
            <S.BackButton src={Back} onClick={BackButton} />
            <S.ContentWrapper>
              <S.BbeepLogo src={Logo} />
              <S.InputWrapper>
                <S.InputTitleSpan>개인정보 입력</S.InputTitleSpan>
                <S.NameInput placeholder="이름을 입력하세요" />
                <S.EmailInput placeholder="이메일을 입력하세요" />
                <S.StyleInput />
                <S.SignUpButton onClick={NextRender}>다음</S.SignUpButton>
              </S.InputWrapper>
            </S.ContentWrapper>
          </S.SignUpMainWrapper>
        </S.SignUpWrapper>
      ) : (
        <S.SignUpWrapper>
          <S.SignUpMainWrapper>
            <S.BackButton src={Back} onClick={() => setNext(true)} />
            <S.ContentWrapper>
              <S.BbeepLogo src={Logo} />
              <S.InputWrapper>
                <S.InputTitleSpan>비밀번호 설정</S.InputTitleSpan>
                <S.PwInput placeholder="비밀번호를 입력하세요" onKeyDown={PwCheckRender} />
                {check === true && <S.PwCheckInput placeholder="비밀번호를 확인해주세요" />}
                <S.SignUpButton>회원가입</S.SignUpButton>
              </S.InputWrapper>
            </S.ContentWrapper>
          </S.SignUpMainWrapper>
        </S.SignUpWrapper>
      )}
    </S.Wrapper>
  );
};
export default SignUp;
