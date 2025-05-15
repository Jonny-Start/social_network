export default function PostCard({ post, onLike }) {
    return (
        <div className="border p-4 rounded shadow mb-4">
            <p>{post.content}</p>
            <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-600">{post.createdAt.split('T')[0]}</span>
                <button onClick={() => onLike(post.id)} className="text-red-500">
                    ❤️ {post.likesCount}
                </button>
            </div>
        </div>
    );
}