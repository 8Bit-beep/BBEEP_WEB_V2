import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../QueryKey';
import uploadCsvApi from './api';
import { DayOfWeek } from 'src/types/upload/upload.type';

export const useGetSchedules = (dayOfWeek: DayOfWeek) =>
  useQuery(QUERY_KEYS.schedules, () => uploadCsvApi.getSchedules(dayOfWeek), {
    staleTime: 3600000,
    cacheTime: 3600000,
  });
