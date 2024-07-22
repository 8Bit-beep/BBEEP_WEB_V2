import * as S from "./style";
const SignIn = () => {
  return (
    <div>
      <S.Wrapper>
        <S.SignInWrapper>
          <S.SignInImgWrapper />
          <S.SingInContentWrapper>
            <S.LogoWrapper>
              <S.Logo />
              <S.LoginTitle>삑에 로그인</S.LoginTitle>
            </S.LogoWrapper>
            <S.SiginInputWrapper>
              <S.EmailInput placeholder="이메일을" />
              <S.PwInput placeholder="비밀번호" />
              <S.LoginKeepWrapper>
                <S.LoginKeepBox type="checkbox" />
                <S.LoginKeepText>로그인 유지</S.LoginKeepText>
              </S.LoginKeepWrapper>
            </S.SiginInputWrapper>
            <S.ButtonWrapper>
              <S.SignInButton>로그인</S.SignInButton>
            </S.ButtonWrapper>
          </S.SingInContentWrapper>
        </S.SignInWrapper>
      </S.Wrapper>
    </div>
  );
};

export default SignIn;
