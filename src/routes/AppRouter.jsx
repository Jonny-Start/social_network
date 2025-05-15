// src/routes/AppRouter.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Navbar from "../components/Layout/Navbar";

import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import PostsPage from "../pages/PostsPage";

function PrivateLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className="">{children}</main>
        </>
    );
}

export default function AppRouter() {
    const { user } = useAuthContext();

    return (
        <Routes>
            <Route
                path="/login"
                element={user ? <Navigate to="/posts" /> : <LoginPage />}
            />
            <Route
                path="/posts"
                element={
                    // user ? (
                        <PrivateLayout>
                            <PostsPage />
                        </PrivateLayout>
                    // ) : (
                    //     <Navigate to="/login" />
                    // )
                }
            />
            <Route
                path="/profile"
                element={
                    // user ? (
                        <PrivateLayout>
                            <ProfilePage />
                        </PrivateLayout>
                    // ) : (
                    //     <Navigate to="/login" />
                    // )
                }
            />
            <Route path="*" element={<Navigate to={user ? "/posts" : "/login"} />} />
        </Routes>
    );
}
