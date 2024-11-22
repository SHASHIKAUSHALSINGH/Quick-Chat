import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "https://quick-chat-1-4iq0.onrender.com/api",
  withCredentials: true,
});
