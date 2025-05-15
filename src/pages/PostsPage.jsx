import { useEffect } from "react";
import { usePosts } from "../hooks/usePosts";
import Loader from "../components/Shared/Loader";
import PostCard from "../components/Posts/PostCard";
import NewPostForm from "../components/Posts/NewPostForm";

export default function PostsPage() {
    const { posts, fetchPosts, like } = usePosts();

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    // 1) Si posts === null → Loader
    if (posts === null) return <Loader />;

    // 2) Si posts es un array vacío → mensaje
    if (Array.isArray(posts) && posts.length === 0) {
        return <p className="text-center text-gray-600">No hay publicaciones aún.</p>;
    }

    // 3) Ahora posts es un array → map sin errores
    return (
        <div className="contentPostsPage">
            <NewPostForm />
            <div id="contentTargetsPost">
                <h5>Lo más reciente <span className="text-gray-400">{posts.currentPage}/{posts.totalPages}</span></h5>
                {posts?.posts.map((post) => (
                    <PostCard key={post.id} post={post} onLike={like} />
                ))}
                <p className="text-gray-500">Total: {posts.totalItems}</p>
            </div>
        </div>
    );
}

