import { useState } from "react";
import * as S from "./style";
import FirstSignUp from "./firstSignUp";
import SecondSignUp from "./SecondSignUp";

const SignUp = () => {
  const [check, setCheck] = useState<boolean>(false);
  const [next, setNext] = useState<boolean>(true);
  return <S.Wrapper>{next === true ? <FirstSignUp next={next} setNext={setNext} /> : <SecondSignUp check={check} setCheck={setCheck} setNext={setNext} />}</S.Wrapper>;
};
export default SignUp;
