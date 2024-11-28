import React from 'react';
import * as S from './style';
import Header from 'src/components/common/Header';
import Sidebar from 'src/components/common/Sidebar/defaultSideBar';
import useUpload from 'src/hooks/upload/useUpload';
import { UPLOAD_STUDENT_HEADER_ITEMS } from './constants';
import { useGetSchedules } from 'src/services/upload/query';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { DayOfWeek } from 'src/types/upload/upload.type';
import { dayTransform } from 'src/utils/transform/dayTransform';
import { timeTableTransform } from 'src/utils/transform/timeTableTransform';
import { UploadStore } from 'src/stores/upload/upload.store';
import cookie from '@src/libs/cookie/cookie';

const UploadCsv = () => {
  const { handleFileChange, upload, fileRef, download, file } = useUpload();
  const { data: memberList } = useGetSchedules(dayjs().format('dddd').toUpperCase() as DayOfWeek);
  localStorage.setItem('memberList', JSON.stringify(memberList));
  console.log(localStorage.getItem('memberList'));
  console.log(file);

  return (
    <S.UploadCsvWrapper>
      <Header />
      <S.MainWrapper>
        <Sidebar />
        <S.ContentWrapper>
          <S.Layer>
            {UPLOAD_STUDENT_HEADER_ITEMS.map((item, idx) => (
              <span key={idx}>{item}</span>
            ))}
          </S.Layer>
          <div
            style={{
              width: '100%',
              height: 900,
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'scroll',
            }}
          >
            {memberList?.data.map((item, idx) => (
              <S.LayerList key={idx}>
                <span style={{ flex: 1 }}>{item.grade}학년</span>
                <span style={{ flex: 1 }}>{item.cls}반</span>
                <span style={{ flex: 1 }}>{item.num}번</span>
                <span style={{ flex: 1 }}>{item.name}</span>
                <span style={{ flex: 1 }}>{item.cause}</span>
                <span style={{ flex: 1 }}>{item.room}</span>
                <span style={{ flex: 1 }}>{dayTransform(item.dayOfWeek)}</span>
                <span style={{ flex: 1 }}>{timeTableTransform(item.timeTable)}</span>
              </S.LayerList>
            ))}
          </div>
          <input type="file" style={{ display: 'none' }} accept=".csv, .xlsx" onChange={upload} ref={fileRef} />

          <S.UploadCsvButton onClick={handleFileChange}>파일 업로드 / 수정</S.UploadCsvButton>
          <S.UploadCsvButton style={{ top: '87%' }} onClick={download}>
            파일 다운로드
          </S.UploadCsvButton>
        </S.ContentWrapper>
      </S.MainWrapper>
    </S.UploadCsvWrapper>
  );
};

export default UploadCsv;
