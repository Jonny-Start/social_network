// src/hooks/useAuth.js
import { useAuthContext } from "../context/AuthContext";

export function useAuth() {
  const { user, login, logout } = useAuthContext();
  return { user, login, logout };
}
