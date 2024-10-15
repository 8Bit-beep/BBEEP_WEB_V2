import { CSVLink } from "react-csv";
import styled from "styled-components";

interface CsvDataProps {
  csvData: object[];
  fileName: string;
}

const CsvData = ({ csvData, fileName }: CsvDataProps) => {
  return (
    <CsvLinkButton data={csvData} filename={fileName}>
      <p>다운로드</p>
    </CsvLinkButton>
  );
};

export default CsvData;

export const CsvLinkButton = styled(CSVLink)`
  width: 100px;
  height: 100px;
  background-color: black;
  border-radius: 5px;
  color: #fff;
  position: absolute;
`;
