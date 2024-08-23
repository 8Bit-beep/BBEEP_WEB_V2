import CONFIG from "src/config/config.json";
import axios from "axios";
import { useCallback, useState } from "react";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "src/constants/token.constants";
import token from "src/libs/token/token";

interface User {
  id: string | undefined;
  password: string | undefined;
}
const useSignIn = () => {
  const [user, setUser] = useState<User>({ id: "", password: "" });

  const userHandle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { value, name } = e.target;
      setUser((prev) => ({ ...prev, [name]: value }));
    },
    [setUser],
  );

  const SignInButton = async () => {
    if (user.id && user.password !== "") {
      await axios
        .post(`${CONFIG.serverUrl}/auth/sign-in`, {
          email: user.id,
          password: user.password,
          authority: "TEACHER",
        })
        .then((res) => {  
          alert("로그인 성공");
          token.setToken(ACCESS_TOKEN_KEY, res.data.data.accessToken);
          token.setToken(REFRESH_TOKEN_KEY, res.data.data.refreshToken);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("아이디와 비밀번호를 입력해주세요");
    }
  };

  return {
    userHandle,
    SignInButton,
    user,
  };
};

export default useSignIn;
