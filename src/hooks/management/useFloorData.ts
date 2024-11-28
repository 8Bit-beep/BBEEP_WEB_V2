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

      // 기본 출석 정보 설정
      const attendance = {
        '8교시 출석': '4:30~5:20 / 결석',
        '9교시 출석': '5:30~6:20 / 결석',
        '10교시 출석': '7:10~8:00 /결석',
        '11교시 출석': '8:10~9:00 / 결석',
      };

      lastLogs.forEach((log) => {
        const timeTable = log.timeTable;
        const lastUpdated = log.lastUpdated;

        if (lastUpdated) {
          const formattedTime = dayjs(lastUpdated.toString()).format('hh:mm:ss');

          if (timeTable === 'EIGHT') {
            attendance['8교시 출석'] = `4:30~5:20 / ${formattedTime}`;
          } else if (timeTable === 'NINE') {
            attendance['9교시 출석'] = `5:30~6:20 / ${formattedTime}`;
          } else if (timeTable === 'TEN') {
            attendance['10교시 출석'] = `7:10~8:00 / ${formattedTime}`;
          } else if (timeTable === 'ELEVEN') {
            attendance['11교시 출석'] = `8:10~9:00 / ${formattedTime}`;
          }
        }
      });

      const csvEntry: CsvDataType = {
        이름: item.name || '',
        실: item.currentRoom || '',
        동아리: item.club || '',
        학번: `${item.grade}학년${item.cls}반${item.num}번`,
        ...attendance, // 출석 정보 추가
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
