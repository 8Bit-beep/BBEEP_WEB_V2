import { BaseResponse } from "../util/response.type";

export interface ClassManagement {
    name?: string,
    grade?: number,
    cls?: number,
    num?: number,
    club?: string | null,
    isExist?: boolean,
    modifiedDate?: Date | null,
}

// export interface ClassMemberParams {
//     grade: number;
//     cls: number;
// }
