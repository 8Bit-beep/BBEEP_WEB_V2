import { BaseResponse } from "../util/response.type";

export interface ClassMemberType {
  name: string;
  num: number;
  currentRoom: number;
  floor: number;
  modifiedData: Date;
}

export interface ClassMemberParams {
  grade: number;
  cls: number;
}
