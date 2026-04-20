import axios from "axios";

const API = axios.create({ baseURL: "/api/auth" });

// Attach token to every request if present
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const registerUser = (data) => API.post("/register", data);
export const loginUser = (data) => API.post("/login", data);
export const logoutUser = () => API.post("/logout");
export const getMe = () => API.get("/me");
