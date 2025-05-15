import { useState } from "react";
import { usePostContext } from "../../context/PostContext";
import { useAuthContext } from "../../context/AuthContext";
import './NewPostForm.css';

export default function NewPostForm() {
    const { addPost } = usePostContext();
    const { user } = useAuthContext();
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message.trim()) {
            setError("El mensaje no puede estar vacío");
            return;
        }
        try {
            setError(null);
            await addPost(message);
            setMessage("");
        } catch (error) {
            console.error("Error creating post:", error);
            setError("No se pudo crear la publicación");
        }
    };

    return (
        <div id="contentCardNewPost">
            <h5>Crea una publicación</h5>
            <form onSubmit={handleSubmit} className="">
                {error && <p className="text-red-600 mb-2">{error}</p>}
                <span id="contentDataProfile">
                    <img src="/src/assets/photo-profile.jpeg" alt="" />
                    <h5>{user?.alias}</h5>
                </span>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="¿Qué estás pensando Alejo?"
                    className="w-full p-2 mb-2 border rounded resize-none"
                    rows={3}
                />
                <button type="submit" className="sharePost">
                    Publicar
                </button>
            </form>
        </div>
    );
}