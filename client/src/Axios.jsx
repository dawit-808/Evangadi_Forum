import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    `${import.meta.env.VITE_BASE_URL}/api` || "http://localhost:5500/api",
});

export default axiosInstance;
