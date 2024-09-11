import axios from "axios";
import CONFIG from "src/config/config.json";
import { Code } from "src/pages/class/data";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ClassResponse, ClassResponseType } from "src/types/class/class.type";

const useCheckClass = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [style, setStyle] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [cls, setCls] = useState<ClassResponseType[]>([]);

  const ItemClick = (item: string) => {
    setModal((prevModal) => !prevModal);
    setStyle(item);
    setCode(item);
  };

  const ClassList = async () => {
    try {
      const res = await axios.get<ClassResponse>(`${CONFIG.serverUrl}/student/attend-list?code=${code}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setCls(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (code) {
      ClassList();
    }
  }, [code]);

  return {
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
