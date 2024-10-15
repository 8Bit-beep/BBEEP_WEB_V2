import { CsvDataType, FloorDataType } from "src/types/management/csvDataType";
import axios from "axios";
import { useEffect, useState } from "react";

import { bbeepAxios } from "src/libs/axios/customAxios";

interface Props {
  floor: string;
}

const UseFloorData = () => {
  const [floorData, setFloorData] = useState<FloorDataType[]>([]);
  const [floor, setFloor] = useState<string>("");
  const [csvData, setCsvData] = useState<CsvDataType[]>([
    {
      동아리: "",
      실: "",
      이름: "",
      학번: "",
      첫번째출석: "",
      두번째출석: "",
      세번째출석: "",
    },
  ]);

  const CsvFloorData = async () => {
    await bbeepAxios
      .get(`student/${floor}/study-list`)
      .then((res) => {
        setFloorData(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const FloorUserCsvData = floorData.map((item) => ({
      이름: item.name,
      실: item.currentRoom,
      동아리: item.club,
      학번: `${item.grade}학년${item.cls}반${item.num}번`,
      첫번째출석: item.lastUpdated,
      두번째출석: item.lastUpdated,
      세번째출석: item.lastUpdated,
    }));
    setCsvData(FloorUserCsvData);
  }, [floorData]);

  return {
    setFloor,
    floor,
    CsvFloorData,
    floorData,
    csvData,
  };
};

export default UseFloorData;
