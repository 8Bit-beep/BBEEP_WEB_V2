import { ClassMemberType } from "src/types/student/student.type";
import { create } from "zustand";

interface MemberList {
    memberList: ClassMemberType[];
}


export const managementStore = create<MemberList>(() => ({
    memberList: [],
}));



