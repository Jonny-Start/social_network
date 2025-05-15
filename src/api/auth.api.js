import axios from "axios";
import { API_URLS } from "../utils/endpoints";

export const loginUser = async ({ username, password }) => {
  const { data } = await axios.get(API_URLS.login, {
    auth: { username, password },
  });
  return data;
};
