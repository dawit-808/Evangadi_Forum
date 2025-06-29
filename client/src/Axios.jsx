import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://evangadi-forum-rkc2.onrender.com/api",
});

export default axiosInstance;
