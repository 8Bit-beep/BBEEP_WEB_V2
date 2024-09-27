import { useCallback, useEffect, useState } from "react";
import CONFIG from "src/config/config.json";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SignUpvalidation } from "src/utils/auth/signUpvalidation";
import { SignUpStore } from "src/stores/auth/signup/signup.store";

interface Type {
  email: string | undefined;
  password: string | undefined;
  name: string | undefined;
  department: string | undefined;
}

const UseSignUp = () => {
  const [signup, setSignUp] = useState<Type>({ email: "", password: "", name: "", department: "" });

  const { pwreg } = SignUpvalidation();

  const navigate = useNavigate();
  const EmailStore = SignUpStore((state) => state.email);
  const NameStore = SignUpStore((state) => state.name);
  const DepartMentStore = SignUpStore((state) => state.department);

  const SignUpHandle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { value, name } = e.target;
      setSignUp((prev) => ({ ...prev, [name]: value }));
    },
    [setSignUp],
  );

  const SignUpButton = async () => {
    const password = document.getElementById("password") as HTMLInputElement;
    const pwcheck = document.getElementById("check") as HTMLInputElement;
    const pwValue = password?.value;
    const checkValue = pwcheck?.value;

    if (signup.password === "") {
      alert("비밀번호를 입력해주세요");
    } else if (pwValue !== checkValue) {
      alert("비밀번호를 확인해주세요");
    } else if (pwValue.match(pwreg) === null) {
      alert("영문,숫자, 특수문자 조합으로 이루어진 8~15자의 비밀번호를 정해주세요");
    } else {
      try {
        const res = await axios.post(`${CONFIG.serverUrl}/auth/sign-up`, {
          email: EmailStore,
          password: signup.password,
          name: NameStore,
          authority: "TEACHER",
        });
        if (res.status === 200) {
          alert("회원가입 성공");
          navigate("/sign-in");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return {
    SignUpHandle,
    signup,
    SignUpButton,
  };
};

export default UseSignUp;
