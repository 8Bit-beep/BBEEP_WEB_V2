import { ProfileType } from "@src/types/common/Header/header.type";
import axios from "axios";
import CONFIG from "src/config/config.json";

class ProfileApi {
  public async getProfile(): Promise<ProfileType> {
    const { data } = await axios.get(`${CONFIG.serverUrl}/teachers/info`, {
      headers: {
        Authorization: `Bearer eyJKV1QiOiJBQ0NFU1MiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZWFjaGVyQGdtYWlsLmNvbSIsImF1dGhvcml0eSI6IlRFQUNIRVIiLCJpYXQiOjE3MjE1Nzk5NTgsImV4cCI6MTcyMTY2NjM1OH0.3qzyt961PF_hUw14tSzaLn3V8B8kIQirjh3abYcq4zk`,
      },
    });
    return data;
  }
}

export default new ProfileApi();
