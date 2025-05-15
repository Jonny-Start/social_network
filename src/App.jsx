import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { PostProvider } from "./context/PostContext";
import AppRouter from "./routes/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <PostProvider>
                    <AppRouter />
                </PostProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
