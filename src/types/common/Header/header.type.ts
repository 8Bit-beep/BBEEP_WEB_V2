import { BaseResponse } from "@src/types/util/response.type";

export interface ProfileType extends BaseResponse {
  name: string;
  email: string;
  department: string;
  job: string;
}
