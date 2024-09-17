import { ClassMemberType } from "src/types/student/student.type";
import { create } from "zustand";

interface SidebarMenu {
  menu: string;
  setMenu: (item: string) => void;
}

interface MemberList {
  memberList: ClassMemberType[];
  setMemberList: (memberList: ClassMemberType[]) => void;
}

export const sidebarMenuStore = create<SidebarMenu>((set) => ({
  menu: "",
  setMenu: (menu: string) => set(() => ({ menu })),
}));

export const memberListStroe = create<MemberList>((set) => ({
  memberList: [],
  setMemberList: (memberList: ClassMemberType[]) => set(() => ({ memberList })),
}));
