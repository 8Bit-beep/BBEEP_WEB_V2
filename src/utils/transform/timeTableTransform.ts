export const timeTableTransform = (timeTable: string) => {
  switch (timeTable) {
    case 'EIGHT_NINE':
      return '8교시';
    case 'EIGHT_NINE':
      return '9교시';
    case 'TEN':
      return '10교시';
    case 'ELEVEN':
      return '11교시';
    default:
      return '';
  }
};
