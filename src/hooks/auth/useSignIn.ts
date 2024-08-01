import CONFIG from "src/config/config.json";
import axios from "axios";
import { useCallback, useState } from "react";
import cookie from "src/libs/cookie/cookie";
import { ACCESS_TOKEN_KEY } from "src/constants/token.constants";

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
    [setUser]
  );

  const SignInButton = async () => {
    if (user.id && user.password !== "") {
      await axios
        .post(`${CONFIG.serverUrl}/auth/sign-in`, {
          id: user.id,
          password: user.password,
        })
        .then((res) => {
          alert("로그인 성공");
          cookie.setCookie(ACCESS_TOKEN_KEY, res.data.accessToken);
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
