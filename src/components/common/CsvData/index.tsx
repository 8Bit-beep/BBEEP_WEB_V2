import { CSVLink } from "react-csv";
import styled from "styled-components";

interface CsvDataProps {
  csvData: object[];
  fileName: string;
}

const CsvData = ({ csvData, fileName }: CsvDataProps) => {
  return (
    <CsvLinkButton data={csvData} filename={fileName}>
      <p style={{ alignSelf: "center", color: "#fff" }}>다운로드</p>
    </CsvLinkButton>
  );
};

export default CsvData;

export const CsvLinkButton = styled(CSVLink)`
  background-color: #3cb0b8;
  width: 120px;
  height: 35px;
  border: 1px solid #fff;
  position: absolute;
  border-radius: 5px;
  text-align: center;
  padding-top: 15px;
  bottom: 100px;
  right: 100px;
`;
