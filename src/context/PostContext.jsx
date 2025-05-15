// src/context/PostContext.jsx
import { createContext, useContext, useCallback, useState } from "react";
import { createPost as apiCreatePost, likePost as apiLikePost } from "../api/posts.api";
import axios from "axios";
import { API_URLS } from "../utils/endpoints";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchPosts = useCallback(async () => {
        if (!isLoading) return;
        try {
            const { data } = await axios.get(API_URLS.getPosts);
            console.log("Posts: ", data);
            setPosts(data);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, [isLoading]);

    const addPost = useCallback(async (message) => {
        try {
            const response = await apiCreatePost({ message });
            console.log("Posts: ", response);
            setPosts(prev => ({
                ...prev,
                posts: [{ ...response.post }, ...prev.posts]
            }));
        } catch (err) {
            console.error("Error al crear post:", err);
            throw err;
        }
    }, []);

    const like = useCallback(async (postId) => {
        try {
            const updated = await apiLikePost(postId);
            setPosts(prev =>
                prev.map(p => p.id === postId ? { ...p, likes: updated.likes } : p)
            );
        } catch (err) {
            console.error("Error al dar like:", err);
            throw err;
        }
    }, []);

    return (
        <PostContext.Provider value={{ posts, isLoading, fetchPosts, addPost, like }}>
            {children}
        </PostContext.Provider>
    );
};

export const usePostContext = () => useContext(PostContext);
