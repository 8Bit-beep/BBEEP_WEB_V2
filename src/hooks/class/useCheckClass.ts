import axios from "axios";
import CONFIG from "src/config/config.json";
import { Code } from "src/pages/class/data";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ClassResponse, ClassResponseType } from "@src/types/class/class.type";
const useCheckClass = () => {
  const codeValue = Object.values(Code);
  const location = useLocation();
  const CodeValueArray = [];
  const codeKey = Object.keys(Code);

  const [modal, setModal] = useState<boolean>(false);
  const [style, setStyle] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [cls, setCls] = useState<ClassResponseType[]>([]);

  const ItemClick = (item: string) => {
    setModal(!modal);
    setStyle(item);
    setCode(item);
  };

  useEffect(() => {
    if (code) {
      ClassList();
    }
  }, [code]);

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



  console.log(code);

  const ClassList = async () => {
    try {
      const res = await axios.get<ClassResponse>(`${CONFIG.serverUrl}/student/attend-list?code=${code}`);
      setCls(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    CodeValueArray,
    ItemClick,
    modal,
    style,
    code,
    setCode,
    codeKey,
    ClassList,
    cls,

  };
};

export default useCheckClass;
