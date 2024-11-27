import { CsvDataType } from 'src/types/management/csvDataType';

export const sortCsvData = (csvData: CsvDataType[]): CsvDataType[] => {
  // 로컬스토리지에서 데이터를 가져오고 파싱합니다.
  const localStorageData = JSON.parse(localStorage.getItem('memberList') || '{}');
  const storedMemberList = localStorageData.data || [];

  // CSV 데이터 필터링: 로컬스토리지에 있는 학생을 제외합니다.
  const filteredCsvData = csvData.filter((csvItem) => {
    return !storedMemberList.some((storedItem: { name: string }) => storedItem.name === csvItem.이름);
  });

  const patternNumber = /[0-9]/;
  const patternAlphabet = /[a-zA-Z]/;
  const patternKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  const orderLevelDesc = [patternNumber, patternAlphabet, patternKorean];

  const getLevel = (s: string) => {
    const index = orderLevelDesc.findIndex((pattern) => pattern.test(s));
    return index;
  };

  // 필터링된 CSV 데이터 정렬
  filteredCsvData.sort((a, b) => {
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

  return filteredCsvData;
};
