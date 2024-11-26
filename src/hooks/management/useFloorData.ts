import { CsvDataType, FloorDataType } from 'src/types/management/csvDataType';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { bbeepAxios } from 'src/libs/axios/customAxios';
import { sortCsvData } from 'src/utils/sort/sortCsvData';

const UseFloorData = () => {
  const [floorData, setFloorData] = useState<FloorDataType[]>([]);
  const [allFloorData, setAllFloorData] = useState<FloorDataType[]>([]);
  const [floor, setFloor] = useState<string>('');
  const [csvData, setCsvData] = useState<CsvDataType[]>([]); // 타입 변경

  useEffect(() => {
    CsvFloorData();
  }, [floor]);

  const CsvFloorData = async () => {
    if (floor === 'all' || floor === 'none') {
      setAllFloorData([]);
      try {
        const response1 = await bbeepAxios.get(`student/${2}/study-list`);
        const response2 = await bbeepAxios.get(`student/${3}/study-list`);
        setAllFloorData([...response1.data.data, ...response2.data.data]);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const response = await bbeepAxios.get(`student/${floor}/study-list`);
        setFloorData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    setFloorData(allFloorData);
  }, [allFloorData]);

  useEffect(() => {
    const csvArray: CsvDataType[] = [];

    floorData.forEach((item) => {
      const lastLogs = item.todayLastLogs || [];
      const Attendance =
        lastLogs.length > 0 && lastLogs[0].lastUpdated
          ? dayjs(lastLogs[0].lastUpdated.toString()).format('hh:mm:ss')
          : '';

      const csvEntry: CsvDataType = {
        이름: item.name || '',
        실: item.currentRoom || '',
        동아리: item.club || '',
        학번: `${item.grade}학년${item.cls}반${item.num}번`,
        '8교시 출석': Attendance || '',
        '9교시 출석': Attendance || '',
        '10교시 출석': Attendance || '',
        '11교시 출석': Attendance || '',
      };
      csvArray.push(csvEntry);
    });

    console.log('CSV Array: ', csvArray); // 디버깅 로그

    const sortedCsvData = sortCsvData(csvArray);
    setCsvData(sortedCsvData);
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
