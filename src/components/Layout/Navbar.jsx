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
                <span className="">¡Hola, {user?.alias}!</span>
            </div>
            <div className="contentIconsLink">
                <Link to="/posts" className="linkPage">
                    <span className="optionMenu">
                        <img src="/src/assets/home.svg" alt="" title="Home" />
                        <p>Home</p>
                    </span>
                </Link>
                <Link to="/profile" className="linkPage">
                    <span className="optionMenu">
                        <img src="/src/assets/profile.svg" alt="" title="Perfil" />
                        <p>Perfil</p>
                    </span>
                </Link>
            </div>
            <div className="contentButtonLog">
                <button onClick={handleLogout} className="buttonLogOut" title="Cerrar Sesión">
                    <span>
                        <img src="/src/assets/log-out.svg" alt="" title="Cerrar sesión" />
                    </span>
                    <p>Cerrar sesión</p>
                </button>

            </div>
        </nav>
    );
}