import CONFIG from "src/config/config.json";
import { ACCESS_TOKEN_KEY } from "src/constants/token.constants";
import { bbeepAxios } from "src/libs/axios/customAxios";
import { useEffect, useState } from "react";
import { ClassResponse, ClassResponseType } from "src/types/class/class.type";
import token from "src/libs/token/token";


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
      const res = await bbeepAxios.get<ClassResponse>(`${CONFIG.serverUrl}/student/attend-list?code=${code}`, {
        headers: {
          Authorization: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
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
