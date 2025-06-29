import axios from "axios";

const base = import.meta.env.VITE_BASE_URL
  ? `${import.meta.env.VITE_BASE_URL}/api`
  : "http://localhost:5500/api";

const axiosInstance = axios.create({
  baseURL: base,
});

export default axiosInstance;
