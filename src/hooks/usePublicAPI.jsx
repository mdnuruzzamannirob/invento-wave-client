import axios from "axios";

const axiosAPI = axios.create({
  // baseURL: "http://localhost:6001",
  baseURL: "https://invento-wave-server.vercel.app",
});
const usePublicAPI = () => {
  return axiosAPI;
};

export default usePublicAPI;
