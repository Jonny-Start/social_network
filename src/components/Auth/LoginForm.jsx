import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

export default function LoginForm() {
    const { login } = useAuthContext();
    const [form, setForm] = useState({ username: "", password: "" });
    const [error, setError] = useState(null);

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError(null);
            await login(form);
        } catch (err) {
            setError(err.message || "Error inesperado");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md w-80">
            <h2 className="text-xl mb-4">Inicio de Sesión</h2>
            {error && <p className="text-red-600 mb-2">{error}</p>}
            <input
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Usuario"
                className="w-full p-2 mb-3 border rounded"
            />
            <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Clave"
                className="w-full p-2 mb-4 border rounded"
            />
            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
                Ingresar
            </button>
        </form>
    );
}
