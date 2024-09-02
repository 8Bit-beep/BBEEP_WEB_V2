import useSignIn from "src/hooks/auth/useSignIn";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const { userHandle, SignInButton, user } = useSignIn();

  const navigate = useNavigate();

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
              <S.IdInput placeholder="아이디" name="id" value={user.id} onChange={userHandle} />
              <S.PwInput
                placeholder="비밀번호"
                name="password"
                type="password"
                value={user.password}
                onChange={userHandle}
              />
              <S.LoginKeepWrapper>
                <S.LoginKeepBox type="checkbox" />
                <S.LoginKeepText>로그인 유지</S.LoginKeepText>
              </S.LoginKeepWrapper>
            </S.SiginInputWrapper>
            <S.ButtonWrapper>
              <S.SignInButton onClick={SignInButton}>로그인</S.SignInButton>
              <S.NavigateWrapper>
                <S.StyleSpan onClick={() => navigate("/sign-up")}>계정이 없으신가요?</S.StyleSpan>
                <S.StyleSpan onClick={() => navigate("/find")}>비밀번호를 잊어버렸나요?</S.StyleSpan>
              </S.NavigateWrapper>
            </S.ButtonWrapper>
          </S.SingInContentWrapper>
        </S.SignInWrapper>
      </S.Wrapper>
    </div>
  );
};

export default SignIn;
