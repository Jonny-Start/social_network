// src/context/AuthContext.jsx
import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { loginUser } from "../api/auth.api";
import { getProfile } from "../api/profile.api";
import { saveToken, getToken, removeToken } from "../utils/storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // On mount, intenta restaurar sesión
    useEffect(() => {
        const token = getToken();
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            getProfile()
                .then(setUser)
                .catch(() => removeToken())
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, []);

    const login = async ({ username, password }) => {
        // 1) Llamada login
        const response = await loginUser({ username, password });
        // 2) Valida que venga token
        if (!response.token) {
            // fuerza un error si no hay token
            throw new Error("No se recibió un token. Credenciales inválidas.");
        }
        // 3) Guarda y configura axios
        saveToken(response.token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${response.token}`;
        // 4) Trae perfil
        const profile = await getProfile();
        setUser(profile);
    };

    const logout = () => {
        removeToken();
        delete axios.defaults.headers.common["Authorization"];
        setUser(null);
    };

    if (loading) return <p>Cargando...</p>;

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
