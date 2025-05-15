// src/utils/storage.js
const TOKEN_KEY = "social_app_token";

export const saveToken = (token) => {
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  }
};

export const getToken = () => {
  // Si no existe, getItem devuelve null
  const t = localStorage.getItem(TOKEN_KEY);
  return t === "undefined" || t === null ? null : t;
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
