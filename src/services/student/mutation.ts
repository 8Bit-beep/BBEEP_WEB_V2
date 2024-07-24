import { useMutation } from "react-query";
import classApi from "./api";
import { ClassMemberParams } from "src/types/student/student.type";
export const useGetClassMemberMutation = () => {
  const mutation = useMutation((params: ClassMemberParams) => classApi.getClassMember(params));
  return mutation;
};
