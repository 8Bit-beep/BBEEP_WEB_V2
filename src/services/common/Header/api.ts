import { bbeepAxios } from "src/libs/axios/customAxios";
import { ProfileType } from "src/types/common/Header/header.type";
import axios from "axios";
import CONFIG from "src/config/config.json";

class ProfileApi {
  public async getProfile(): Promise<ProfileType> {
    const { data } = await bbeepAxios.get("/teacher/info");
    return data;
  }
}

export default new ProfileApi();
