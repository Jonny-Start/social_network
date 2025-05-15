import { useAuthContext } from "../context/AuthContext";
import './ProfilePage.css';

export default function ProfilePage() {
    const { user } = useAuthContext();

    // if (!user) return <p>Cargando perfil...</p>;

    // return (
    //     <div className="p-4">
    //         <h2 className="text-xl font-semibold">Perfil</h2>
    //         <p><strong>Nombre:</strong> {user?.name || 'nam'} {user.lastname}</p>
    //         <p><strong>Alias:</strong> {user?.alias || 'ali'}</p>
    //         <p><strong>Nacimiento:</strong> {user?.birthdate || 'date'}</p>
    //     </div>
    // );
    if (!user) return (
        <div id="contentProfile">
            <div id="contentTitleProfile">
                <img src="/src/assets/photo-profile.jpg" alt="" />
                <span id="contentTextProfile">
                    <h2 className="text-xl font-semibold">Alejo Cano</h2>
                    <p id="textArroba">@AlejoCano09</p>
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
                            <p> Jonny Alejandro Cano Acosta</p>
                            <p>09/10/2001</p>
                            <p> Bogotá, Colombia</p>
                            <p>alejocano@gmail.com</p>
                            <p>3015016284</p>
                            <p> www.linkedin.com/jonnycano</p>
                        </span>
                    </div>
                </span>
            </div>
        </div>
    );
}
