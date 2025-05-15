// src/hooks/usePosts.js
import { usePostContext } from "../context/PostContext";

export function usePosts() {
  // Ahora sí existirán posts, fetchPosts, addPost y like
  const { posts, fetchPosts, addPost, like } = usePostContext();
  return { posts, fetchPosts, addPost, like };
}
