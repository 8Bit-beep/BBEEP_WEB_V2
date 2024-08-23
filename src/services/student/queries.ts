import { ClassMemberParams, ClassMemberResponse, ClassMemberType } from "src/types/student/student.type";
import { useQueries, useQuery } from "react-query";
import { QUERY_KEYS } from "../QueryKey";
import classApi from "./api";
import { AxiosError } from "axios";

export const useGetClassMembers = (params: ClassMemberParams) => {
  return useQuery<ClassMemberResponse, AxiosError<ClassMemberResponse>>({
    queryKey: [QUERY_KEYS.student.getMember],
    queryFn: async () => classApi.getClassMember(params),
    suspense: true,
  });
};
