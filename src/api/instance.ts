// ------------- import external dependencies -------------
import axios from "axios";

const url = "http://165.232.67.136/api";

/**
 * base url configuration
 */
export const instance = axios.create({
  baseURL: url,
});

/**
 * Interceptor request for secured calls
 */
instance.interceptors.request.use(
  function (config: any) {
    const token: string = localStorage.getItem("accessToken") as "";
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
