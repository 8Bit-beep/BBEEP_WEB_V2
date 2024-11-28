import { ACCESS_TOKEN_KEY, REQUEST_TOKEN_KEY } from 'src/constants/token.constants';
import token from 'src/libs/token/token';
import axios from 'axios';
import { bbeepAxios } from 'src/libs/axios/customAxios';
import { DayOfWeek, UploadCsvResponse } from 'src/types/upload/upload.type';
import CONFIG from 'src/config/config.json';

class UploadCsvApi {
  public async uploadCsv(file: FormDataEntryValue): Promise<void> {
    const { data } = await axios.post(
      `${CONFIG.serverUrl}/schedules`,
      { file: file },
      {
        headers: {
          [REQUEST_TOKEN_KEY]: token.getToken(ACCESS_TOKEN_KEY),
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return data;
  }

  public async getSchedules(dayOfWeek: DayOfWeek): Promise<UploadCsvResponse> {
    const { data } = await bbeepAxios.get(`/schedules?dayOfWeek=${dayOfWeek}`);
    return data;
  }

  public async downlodCsv(): Promise<File> {
    const { data } = await bbeepAxios.get('/schedules/excel', {
      responseType: 'blob',
    });
    return data;
  }
}

const uploadCsvApi = new UploadCsvApi();
export default uploadCsvApi;
