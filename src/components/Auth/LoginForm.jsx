import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import './LoginForm.css';


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
            setError( err.response?.data?.message || err.message || "Error inesperado");
        }
    };

    return (
        <div id="contentLogin">
            <form onSubmit={handleSubmit} className="">
                <span id="contentTitle">
                    <h2 className="">Bienvenido a Social</h2>
                    <p>¡Nos encanta tenerte de nuevo aquí!</p>
                </span>
                {error && <p className="text-red-600 mb-2">{error}</p>}
                <span>
                    <input
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        placeholder="Usuario"
                        className="inputPrimary"
                    />
                    <input
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Clave"
                        className="inputPrimary"
                    />
                </span>
                <div className="contentCheck">
                    <label htmlFor="rememberMe" className="">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            className="form-checkbox"
                        />
                        <i></i>
                        Recuérdame
                    </label>
                    <a href="">¿Olvidaste tú contraseña?</a>
                </div>                
                <button type="submit" className="buttonPrimary">
                    Ingresar
                </button>
                <p id="textRegister">¿Aún no te haz registrado? <a href="">Regístrate aquí</a></p>
            </form>
        </div>
    );
}
