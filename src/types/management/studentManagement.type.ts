import { BaseResponse } from "../util/response.type";

export interface ClassManagement {
  
  roomName: string;
  name?: string;
  grade?: number;
  cls?: number;
  num?: number;
  club?: string | null;
  isExist?: boolean;
  modifiedDate?: Date | null;
}
export interface ClassManagementResponse {
  data: ClassManagement[];
}

// export interface ClassMemberParams {
//     grade: number;
//     cls: number;
// }
