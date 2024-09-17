import * as S from "../../style";
import Back from "src/assets/auth/signup/BackButton.svg";
import { useNavigate } from "react-router-dom";

interface Props {
  setNext: React.Dispatch<React.SetStateAction<boolean>>;
}

const FindAuth1 = ({ setNext }: Props) => {
  const naviagate = useNavigate();
  const BackButton = () => {
    naviagate("/sign-in");
  };
  return (
    <S.Wrapper>
      <S.SignUpWrapper>
        <S.SignUpMainWrapper>
          <S.BackButton src={Back} onClick={BackButton} />
          <S.ContentWrapper>
            <S.TitleSpan>비밀번호 찾기</S.TitleSpan>
            <S.EmailWrap>
              <S.EmailCheckInput placeholder="이메일을 입력하세요" />
              <S.EmailCheckButton>확인</S.EmailCheckButton>
            </S.EmailWrap>
            <S.CheckNumInput placeholder="인증번호 입력 해주세요" />

            <S.FindCheckButton onClick={() => setNext(true)}>확인</S.FindCheckButton>
          </S.ContentWrapper>
        </S.SignUpMainWrapper>
      </S.SignUpWrapper>
    </S.Wrapper>
  );
};

export default FindAuth1;
