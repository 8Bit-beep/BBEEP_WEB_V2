export interface ClassManagement {
  roomName: string;
  todayLastLogs:
  [
    {
      timeTable: string;
      roomName: string;
      lastUpdated: Date | null | undefined;
    }
  ];
  currentRoom: string;
  currentPeriod: string;
  name: string;
  grade: number;
  cls: number;
  num: number;
  isExist: boolean;
  modifiedDate: Date | null;
}

export interface ClassManagementResponse {
  data: ClassManagement[];
}
