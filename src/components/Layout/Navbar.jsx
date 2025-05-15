// src/components/Layout/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import './Navbar.css';


export default function Navbar() {
    const { logout, user } = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav className="bg-white shadow p-4 flex justify-between items-center">
            <div id="contentIconName">
                <img id="icon" src="/src/assets/s.png" alt="" />
                <span className="">¡Hola, {user?.alias || 'no alias'}!</span>
            </div>
            <div className="contentIconsLink">
                <Link to="/posts" className="hover:underline">
                    <img src="/src/assets/home.svg" alt="" title="Home" />
                </Link>
                <Link to="/profile" className="hover:underline">
                    <img src="/src/assets/profile.svg" alt="" title="Perfil" />
                </Link>
                   <Link to="/profile" className="hover:underline">
                    <img src="/src/assets/settings.svg" alt="" title="Configuración" />
                </Link>
            </div>
            <div className="flex items-center space-x-4">
                {/* <button title="Perfil"> <img src="/src/assets/profile.svg" alt="" /> </button> */}
                <button onClick={handleLogout} className="text-red-500 hover:underline" title="Cerrar Sesión">
                    <img src="/src/assets/log-out.svg" alt="" title="Perfil" />
                </button>
            </div>
        </nav>
    );
}
