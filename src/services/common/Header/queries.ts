import { QUERY_KEYS } from "src/services/QueryKey";
import { ProfileType } from "src/types/common/Header/header.type";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import profileApi from "src/services/common/Header/api";

export const useGetProfile = () => {
  return useQuery<ProfileType, AxiosError<ProfileType>>({
    queryKey: [QUERY_KEYS.profile.getProfile],
    queryFn: async () => profileApi.getProfile(),
    staleTime: 3600000,
    refetchInterval: 3600000,
  });
};
