import { ClassMemberParams, ClassMemberType } from "src/types/student/student.type";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { QUERY_KEYS } from "../QueryKey";
import classApi from "./api";

export const useGetClassMember = (params: ClassMemberParams) => {
  return useQuery<ClassMemberType[], AxiosError<ClassMemberType[]>>({
    queryKey: [QUERY_KEYS.student.getMember],
    queryFn: () => classApi.getClassMember(params),
    staleTime: 3600000,
    refetchInterval: 3600000,
  });
};


