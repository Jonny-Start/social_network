import { useState } from "react";
import { usePostContext } from "../../context/PostContext";

export default function NewPostForm() {
    const { addPost } = usePostContext();
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
        <form onSubmit={handleSubmit} className="p-4 border rounded mb-6">
            {error && <p className="text-red-600 mb-2">{error}</p>}
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="¿Qué estás pensando?"
                className="w-full p-2 mb-2 border rounded resize-none"
                rows={3}
            />
            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
                Publicar
            </button>
        </form>
    );
}
