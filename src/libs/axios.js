import configs from "@/configs";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: configs.apiUrl,
});

export default axiosInstance;
