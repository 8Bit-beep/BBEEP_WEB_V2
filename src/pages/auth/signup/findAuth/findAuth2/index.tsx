import * as S from "../../style";
import Back from "src/assets/auth/signup/BackButton.svg";

interface Props {
  setNext: React.Dispatch<React.SetStateAction<boolean>>;
}

const FindAuth2 = ({ setNext }: Props) => {
  return (
    <S.Wrapper>
      <S.SignUpWrapper>
        <S.SignUpMainWrapper>
          <S.BackButton src={Back} onClick={() => setNext(false)} />
          <S.ContentWrapper>
            <S.TitleSpan>비밀번호 찾기</S.TitleSpan>
            <S.PwInput placeholder="원래 비밀번호를 입력해주세요" />
            <S.PwCheckInput placeholder="비밀번호를 재입력해주세요" />

            <S.FindCheckButton>비밀번호 설정</S.FindCheckButton>
          </S.ContentWrapper>
        </S.SignUpMainWrapper>
      </S.SignUpWrapper>
    </S.Wrapper>
  );
};

export default FindAuth2;
