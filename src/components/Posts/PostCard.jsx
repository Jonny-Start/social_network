export default function PostCard({ post, onLike }) {
    return (
        <div className="contentTargetPost">
            <p>{post.content}</p>
            <div className="contentDatePost">
                <span className="textData">{post.createdAt.split('T')[0]}</span>
                <button onClick={() => onLike(post.id)} className="text-red-500 buttonLike">
                    ❤️ {post.likesCount}
                </button>
            </div>
        </div>
    );
}
