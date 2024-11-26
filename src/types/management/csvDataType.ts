export interface CsvDataType {
  [key: string]: any;
  동아리: string | undefined;
  실: string | undefined;
  이름: string | undefined;
  학번: string;
  '8교시 출석': string | undefined;
  '9교시 출석': string | undefined;
  '10교시 출석': string | undefined;
  '11교시 출석': string | undefined;
}

export interface FloorDataType {
  name: string;
  grade: number;
  cls: number;
  num: number;
  todayLastLogs: [
    {
      timeTable: string;
      roomName: string;
      lastUpdated: string | undefined;
    }
  ];
  currentRoom: string;
  lastUpdated: string;
  fixedRoom: string;
  isExist: boolean;
  club: string;
}
