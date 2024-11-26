import { CsvDataType } from 'src/types/management/csvDataType';

export const sortCsvData = (csvData: CsvDataType[]): CsvDataType[] => {
  const patternNumber = /[0-9]/;
  const patternAlphabet = /[a-zA-Z]/;
  const patternKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  const orderLevelDesc = [patternNumber, patternAlphabet, patternKorean];

  const getLevel = (s: string) => {
    const index = orderLevelDesc.findIndex((pattern) => pattern.test(s));
    return index;
  };

  csvData.sort((a, b) => {
    const aClub = a.동아리 || '';
    const bClub = b.동아리 || '';

    if (aClub === bClub) {
      const aFirstChar = a.이름?.charAt(0) || '';
      const bFirstChar = b.이름?.charAt(0) || '';
      const aLevel = getLevel(aFirstChar);
      const bLevel = getLevel(bFirstChar);

      if (aLevel === bLevel) {
        return aFirstChar.charCodeAt(0) - bFirstChar.charCodeAt(0);
      }
      return bLevel - aLevel;
    }

    return aClub.localeCompare(bClub);
  });

  return csvData;
};
