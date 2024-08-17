import { BaseResponse } from "src/types/util/response.type";

export interface ProfileType extends BaseResponse {
  data: {
    email: string;
    name: string;
    department: string;
  };
}
