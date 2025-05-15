import axios from "axios";
import { API_URLS } from "../utils/endpoints";

export const getProfile = async () => {
  try {
    const { data } = await axios.get(API_URLS.getProfile);    
    return data;
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw error;
  }
};
