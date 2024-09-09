import axios from "axios";
import CONFIG from "src/config/config.json";
import { Code } from "src/pages/class/data";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ClassResponse, ClassResponseType } from "src/types/class/class.type";

const useCheckClass = () => {
  const location = useLocation();

  const [modal, setModal] = useState<boolean>(false);
  const [style, setStyle] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [cls, setCls] = useState<ClassResponseType[]>([]);

  useEffect(() => {
    if (code) {
      ClassList();
    }
  }, [code]);

  const ItemClick = (item: string) => {
    setModal((prevModal) => !prevModal);
    setStyle(item);
    setCode(item);
  };

  const ClassList = async () => {
    try {
      const res = await axios.get<ClassResponse>(`${CONFIG.serverUrl}/student/attend-list?code=${code}`);
      setCls(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const codeEntries = Object.entries(Code);

  const CodeValueArray: Array<{ key: string; value: string }> = [];

  if (location.pathname.substring(13, 18) === "first") {
    const FirstFilterCode = codeEntries.filter(([key, value]) => value.startsWith("1"));
    CodeValueArray.push(...FirstFilterCode.map(([key, value]) => ({ key, value })));
  } else if (location.pathname.substring(13, 19) === "second") {
    const SecondFilterCode = codeEntries.filter(([key, value]) => value.startsWith("2"));
    CodeValueArray.push(...SecondFilterCode.map(([key, value]) => ({ key, value })));
  } else if (location.pathname.substring(13, 18) === "third") {
    const ThirdFilterCode = codeEntries.filter(([key, value]) => value.startsWith("3"));
    CodeValueArray.push(...ThirdFilterCode.map(([key, value]) => ({ key, value })));
  }

  return {
    CodeValueArray,
    ItemClick,
    modal,
    style,
    code,
    setCode,
    ClassList,

    cls,
  };
};

export default useCheckClass;
