import { FloorResponseType } from "src/types/class/class.type";
import { useEffect, useState } from "react";
import CONFIG from "src/config/config.json";
import { ACCESS_TOKEN_KEY } from "src/constants/token.constants";
import { bbeepAxios } from "src/libs/axios/customAxios";
import token from "src/libs/token/token";

const UseCheckFloor = () => {
  const [floor, setFloor] = useState<string>("");
  const [classData, setClassData] = useState<FloorResponseType[]>([]);

  const GetFloorData = async () => {
    try {

      const res = await bbeepAxios.get(`${CONFIG.serverUrl}/room/${floor}`, {
        headers: {
          Authorization: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
        },
      });

      if (res.status === 200) {
        console.log(res.data.data);
        setClassData(res.data.data);
      }

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (floor) {
      GetFloorData();
    }
  }, [floor]);

  return { GetFloorData, setFloor, floor, classData };
};
export default UseCheckFloor;
