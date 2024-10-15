export interface CsvDataType {
  동아리: string | undefined;
  실: string | undefined;
  이름: string | undefined;
  학번: string;
  첫번째출석: string | undefined;
  두번째출석: string | undefined;
  세번째출석: string | undefined;
}

export interface FloorDataType {
  name: string;
  grade: number;
  cls: number;
  num: number;
  currentRoom: string;
  lastUpdated: string;
  fixedRoom: string;
  isExist: boolean;
  club: string;
}
