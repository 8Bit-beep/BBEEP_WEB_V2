import axios from "axios";
import CONFIG from "src/config/config.json";
import { Code } from "src/pages/class/data";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const useCheckClass = () => {
  const codeValue = Object.values(Code);
  const location = useLocation();
  const CodeValueArray = [];

  const [modal, setModal] = useState<boolean>(false);
  const [style, setStyle] = useState<string>("");

  const ItemClick = (item: string) => {
    setModal(!modal);
    setStyle(item);
  };

  if (location.pathname.substring(13, 18) === "first") {
    const FirstFilterCode = codeValue.filter((item) => item.startsWith("1"));
    CodeValueArray.push(FirstFilterCode);
  } else if (location.pathname.substring(13, 19) === "second") {
    const SecondFilterCode = codeValue.filter((item) => item.startsWith("2"));
    CodeValueArray.push(SecondFilterCode);
  } else if (location.pathname.substring(13, 18) === "third") {
    const ThirdFilterCode = codeValue.filter((item) => item.startsWith("3"));
    CodeValueArray.push(ThirdFilterCode);
  }

  const ClassList = async () => {
    const res = await axios.get(`${CONFIG.serverUrl}/student/attend-list=`);
  };

  return {
    CodeValueArray,
    ItemClick,
    modal,
    style,
  };
};

export default useCheckClass;
