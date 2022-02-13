import axios from "axios";
import { getSession } from "../storage/user_session";
import { ApiConnection } from "./api_connection_data";

const { HOST_NAME, PORT } = ApiConnection;

const instance = axios.create({
  baseURL: `http://${HOST_NAME}:${PORT}/api`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 40000, // 40sec
});

// instance.interceptors.request.use(async (config) => {
//   const { token } = await getSession();
//   if (token !== "") {
//     return (config.headers.Authorization = `Bearer ${token}`);
//   }
//   return config;
// });

export default instance;
