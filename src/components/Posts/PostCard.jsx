export default function PostCard({ post, onLike }) {
    return (
        <div className="border p-4 rounded shadow mb-4">
            <p>{post.message}</p>
            <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-600">{post.date}</span>
                <button onClick={() => onLike(post.id)} className="text-red-500">
                    ❤️ {post.likes}
                </button>
            </div>
        </div>
    );
}