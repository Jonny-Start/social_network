import { useAuthContext } from "../context/AuthContext";
import './ProfilePage.css';

export default function ProfilePage() {
    const { user } = useAuthContext();

    if (!user) return <p>Cargando perfil...</p>;

    return (
        <div id="contentProfile">
            <div id="contentTitleProfile">
                <img src="/src/assets/photo-profile.jpeg" alt="" />
                <span id="contentTextProfile">
                    <h2 className="text-xl font-semibold">{user?.firstName} {user?.lastName}</h2>
                    <p id="textArroba">@{user?.alias}</p>
                    <span id="contentFollowers">
                        <p><strong>45K </strong><br /> Seguidores</p>
                        <p><strong>5K</strong> <br /> Siguiendo</p>
                    </span>
                </span>
            </div>
            <div id="contentBodyProfile">
                <span id="">
                    <h5>Sobre mí</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                        optio vero. Perferendis aspernatur, modi, minima animi eius pariatur
                        consequuntur cumque vero totam alias iusto eum molestias ratione hic
                        doloremque quia!
                    </p>
                </span>
                <span id="">
                    <h5>Información General</h5>
                    <div id="contentGeneralInformation">
                        <span>
                            <p>Nombre Completo:</p>
                            <p>Nacimiento:</p>
                            <p>Ubicación</p>
                            <p>Correo:</p>
                            <p>Celular:</p>
                            <p>Pág web:</p>
                        </span>
                        <span>
                            <p>{user?.firstName} {user?.lastName}</p>
                            <p>{user?.birthDate.split('T')[0]}</p>
                            <p>Bogotá, Colombia</p>
                            <p>{user?.email}</p>
                            <p>3015016284</p>
                            <p><a href="https://www.linkedin.com/in/jonny-alejandro-cano-acosta-b705b91a0" target="_blanck">https://www.linkedin.com/in/jonny-alejandro-cano-acosta-b705b91a0</a></p>
                        </span>
                    </div>
                </span>
            </div>
        </div>
    );

}
