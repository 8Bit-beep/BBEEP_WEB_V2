export interface UploadCsv {
  id: number;
  cause: string;
  room: string;
  timeTable: TimeTable;
  dayOfWeek: DayOfWeek;
  name: string;
  grade: number;
  cls: number;
  num: number;
}

export interface UploadCsvResponse {
  data: UploadCsv[];
}

export type TimeTable = 'EIGHT_NINE' | 'TEN' | 'ELEVEN';
export type DayOfWeek = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY';
