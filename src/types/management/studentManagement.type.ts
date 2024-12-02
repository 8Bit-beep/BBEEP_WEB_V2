export interface ClassManagement {
  cls: number;
  grade: number;
  name: string;
  num: number;
  roomName: string;
  schedule: boolean;
  todayLastLogs: {
    isCurrent:boolean;
    isExist:boolean;
    lastUpdated:Date | null;
    roomName:string;
    timeTable:string;
  }[]
}

export interface ClassManagementResponse {
  data: ClassManagement[];
}
