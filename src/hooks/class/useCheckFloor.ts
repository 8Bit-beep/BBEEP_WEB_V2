import { FloorResponseType } from "src/types/class/class.type";
import axios from "axios";
import { useEffect, useState } from "react";
import CONFIG from "src/config/config.json";

const UseCheckFloor = () => {
  const [floor, setFloor] = useState<string>("");
  const [classData, setClassData] = useState<FloorResponseType[]>([]);



  const GetFloorData = async () => {
    try {
      const res = await axios.get(`${CONFIG.serverUrl}/room?floor=${floor}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (res.status === 200) {
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
