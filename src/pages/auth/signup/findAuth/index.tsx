import { useState } from "react";
import FindAuth1 from "./findAuth1";
import FindAuth2 from "./findAuth2";

const FindAuth = () => {
  const [next, setNext] = useState<boolean>(false);

  return <div>{next === false ? <FindAuth1 setNext={setNext} /> : <FindAuth2 setNext={setNext}/>}</div>;
};

export default FindAuth;
