import axios from "axios";
import { API_URLS } from "../utils/endpoints";

export const getPosts = async () => {
  try {
    const { data } = await axios.get(API_URLS.getPosts);
    return data;
  } catch (error) {
    console.error("Error loading posts:", error);
    throw error;
  }
};

export const createPost = async ({ message }) => {
  try {
    const payload = { content: message, date: new Date().toISOString() };
    const { data } = await axios.post(API_URLS.createPost, payload);
    return data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

export const likePost = async (postId) => {
  try {
    const { data } = await axios.post(API_URLS.likePost, { postId });    
    return data;
  } catch (error) {
    console.error("Error liking post:", error);
    throw error;
  }
};
