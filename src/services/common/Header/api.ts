import { ProfileType } from "@src/types/common/Header/header.type";
import axios from "axios";
import CONFIG from "src/config/config.json";

class ProfileApi {
  public async getProfile(): Promise<ProfileType> {
    const { data } = await axios.get(`${CONFIG.serverUrl}/teachers/info`, {
      headers: {
        Authorization: `Bearer eyJKV1QiOiJBQ0NFU1MiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZWFjaGVyQGdtYWlsLmNvbSIsImF1dGhvcml0eSI6IlRFQUNIRVIiLCJpYXQiOjE3MjE1NTg0MjgsImV4cCI6MTcyMTY0NDgyOH0.8YWlnx4yokcJ1s1qk-3bIO-KUSl8x9lvszlZvYnrozo`,
      },
    });
    return data;
  }
}

export default new ProfileApi();
