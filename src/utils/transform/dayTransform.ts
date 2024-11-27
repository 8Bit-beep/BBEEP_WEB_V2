import { DayOfWeek } from 'src/types/upload/upload.type';

export const dayTransform = (day: DayOfWeek) => {
  switch (day) {
    case 'MONDAY':
      return '월요일';
    case 'TUESDAY':
      return '화요일';
    case 'WEDNESDAY':
      return '수요일';
    case 'THURSDAY':
      return '목요일';
    case 'FRIDAY':
      return '금요일';
    default:
      return '';
  }
};
