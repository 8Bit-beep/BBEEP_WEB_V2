import { bbeepAxios } from "src/libs/axios/customAxios";
import { useCallback, useState } from "react";
import CONFIG from "src/config/config.json";

interface Type {
  email: string | undefined;
  password: string | undefined;
  name: string | undefined;
  department: string | undefined;
}

const UseSignUp = () => {
  const [signup, setSignUp] = useState<Type>({ email: "", password: "", name: "", department: "" });

  const SignUpHandle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { value, name } = e.target;
      setSignUp((prev) => ({ ...prev, [name]: value }));
    },
    [setSignUp]
  );

  const useCheckSignUp = async () => {
    
    try {
      const res = await bbeepAxios.post(`${CONFIG.serverUrl}/auth/sign-up/teacher`, {
        email: signup.email,
        password: signup.password,
        name: signup.name,
        department: signup.department,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    SignUpHandle,
    signup,
  };
};

export default UseSignUp;
