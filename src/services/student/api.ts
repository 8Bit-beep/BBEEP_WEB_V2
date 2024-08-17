import { ClassMemberParams, ClassMemberResponse } from "src/types/student/student.type";
import { bbeepAxios } from "src/libs/axios/customAxios";

class StudentApi {
  public async getClassMember(params: ClassMemberParams): Promise<ClassMemberResponse> {
    const { grade, cls } = params;
    const { data } = await bbeepAxios.get(`/student/member-list?grade=${grade}&cls=${cls}`);
    return data;
  }
}

export default new StudentApi();
