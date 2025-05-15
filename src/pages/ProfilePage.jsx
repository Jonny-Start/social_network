import { useAuthContext } from "../context/AuthContext";

export default function ProfilePage() {
    const { user } = useAuthContext();

    if (!user) return <p>Cargando perfil...</p>;

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold">Perfil</h2>
            <p><strong>Nombre:</strong> {user.name} {user.lastname}</p>
            <p><strong>Alias:</strong> {user.alias}</p>
            <p><strong>Nacimiento:</strong> {user.birthdate}</p>
        </div>
    );
}
