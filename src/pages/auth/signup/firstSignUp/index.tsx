import * as S from "../style";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "src/assets/auth/signup/BbeepLogo.svg";
import Back from "src/assets/auth/signup/BackButton.svg";
import DropDown from "../dropDown";

interface Props {
  next: boolean | (() => void);
  setNext: Dispatch<SetStateAction<boolean>>;
}

const FirstSignUp = ({ next, setNext }: Props) => {
  const naviagate = useNavigate();

  const NextRender = () => {
    setNext(false);
  };

  const BackButton = () => {
    naviagate("/sign-in");
  };

  return (
    <S.SignUpWrapper>
      <S.SignUpMainWrapper>
        <S.BackButton src={Back} onClick={BackButton} />
        <S.ContentWrapper>
          <S.BbeepLogo src={Logo} />
          <S.InputWrapper>
            <S.InputTitleSpan>개인정보 입력</S.InputTitleSpan>
            <S.NameInput placeholder="이름을 입력하세요" />
            <S.EmailInput placeholder="이메일을 입력하세요" />
            <DropDown />
            <S.SignUpButton onClick={NextRender}>다음</S.SignUpButton>
          </S.InputWrapper>
        </S.ContentWrapper>
      </S.SignUpMainWrapper>
    </S.SignUpWrapper>
  );
};

export default FirstSignUp;
