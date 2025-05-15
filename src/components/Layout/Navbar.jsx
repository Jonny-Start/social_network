// src/components/Layout/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

export default function Navbar() {
    const { logout, user } = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav className="bg-white shadow p-4 flex justify-between items-center">
            <div className="flex space-x-4">
                <Link to="/posts" className="hover:underline">
                    Publicaciones
                </Link>
                <Link to="/profile" className="hover:underline">
                    Perfil
                </Link>
            </div>
            <div className="flex items-center space-x-4">
                <span className="font-medium">¡Hola, {user.alias}!</span>
                <button onClick={handleLogout} className="text-red-500 hover:underline">
                    Cerrar sesión
                </button>
            </div>
        </nav>
    );
}
