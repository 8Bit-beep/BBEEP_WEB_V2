import { BaseResponse } from "../util/response.type";

export interface ClassMemberResponse extends BaseResponse {
  data: ClassMemberType[];
}

export interface ClassMemberType {
  name: string;
  num: number;
  roomName: string;
  room: string;
}

export interface ClassMemberParams {
  grade: number;
  cls: number;
}
