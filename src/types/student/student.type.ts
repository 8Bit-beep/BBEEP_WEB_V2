import { BaseResponse } from "../util/response.type";

export interface ClassMemberType {
  name: string;
  num: number;
  roomName: number;
  floor: number;
  modifiedData: Date;
}

export interface ClassMemberParams {
  grade: number;
  cls: number;
}
