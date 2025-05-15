// src/context/PostContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { createPost as apiCreatePost, likePost as apiLikePost } from "../api/posts.api";
import axios from "axios";
import { API_URLS } from "../utils/endpoints";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const { data } = await axios.get(API_URLS.getPosts);
            console.log("fetchPosts →", data);
            setPosts(data);
        } catch (err) {
            console.error(err);
        }
    };

    const addPost = async (message) => {
        try {
            const newPost = await apiCreatePost({ message });
            setPosts(prev => [newPost, ...prev]);
        } catch (err) {
            console.error("Error al crear post:", err);
            throw err;
        }
    };

    const like = async (postId) => {
        try {
            const updated = await apiLikePost(postId);
            setPosts(prev =>
                prev.map(p => p.id === postId ? { ...p, likes: updated.likes } : p)
            );
        } catch (err) {
            console.error("Error al dar like:", err);
            throw err;
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <PostContext.Provider value={{ posts, fetchPosts, addPost, like }}>
            {children}
        </PostContext.Provider>
    );
};

export const usePostContext = () => useContext(PostContext);
