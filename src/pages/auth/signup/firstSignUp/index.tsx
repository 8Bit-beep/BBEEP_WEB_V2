import * as S from "../style";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "src/assets/auth/signup/BbeepLogo.svg";
import Back from "src/assets/auth/signup/BackButton.svg";
import UseSignUp from "src/hooks/auth/useSignUp";
import { SignUpvalidation } from "src/utils/auth/signUpvalidation";
import { SignUpStore } from "src/stores/auth/signup/signup.store";

interface Props {
  next: boolean | (() => void);
  setNext: Dispatch<SetStateAction<boolean>>;
}

const FirstSignUp = ({ setNext }: Props) => {
  const { emailreg } = SignUpvalidation();
  const naviagate = useNavigate();
  const { signup, SignUpHandle } = UseSignUp();
  const Email = document.getElementById("email") as HTMLInputElement;
  const emailValue = Email?.value;
  const setEmailStore = SignUpStore((state) => state.setEmail);
  const setNameStore = SignUpStore((state) => state.setName);
  const setDepartMentStore = SignUpStore((state) => state.setDepartMent);
  setEmailStore(signup.email);
  setNameStore(signup.name);
  setDepartMentStore(signup.department);

  const Check = () => {
    if (!signup.name || !signup.email || !signup.department) {
      alert("이메일, 이름 또는 부서를 입력해주세요");
    } else if (emailValue.match(emailreg) === null) {
      alert("이메일 형식에 맞춰서 작성 해주세요");
    } else {
      setNext(false);
    }
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
            <S.NameInput
              placeholder="이름을 입력하세요"
              value={signup.name}
              onChange={SignUpHandle}
              name="name"
              id="name"
            />
            <S.EmailInput
              placeholder="이메일을 입력하세요"
              onChange={SignUpHandle}
              name="email"
              value={signup.email}
              id="email"
            />
            <S.DepartmentInput
              placeholder="부서를 입력하세요"
              onChange={SignUpHandle}
              name="department"
              value={signup.department}
              id="department"
            />
            <S.SignUpButton onClick={Check}>다음</S.SignUpButton>
          </S.InputWrapper>
        </S.ContentWrapper>
      </S.SignUpMainWrapper>
    </S.SignUpWrapper>
  );
};

export default FirstSignUp;
