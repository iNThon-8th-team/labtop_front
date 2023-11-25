import axios from "axios";
const BASE_URL = "http://localhost:4000";

export const AUTH_TOKEN_NAME = "Authorization";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { "Content-Type": "application/json; charset=utf-8" },
  withCredentials: true,
});

export const AxiosInterceptor = () => {
  instance.interceptors.request.use((req) => {
    req.headers = {
      ...instance.headers,
      Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN_NAME)}`,
    };
    return req;
  });

  instance.interceptors.response.use(
    (res) => res,
    async (error) => {
      return await Promise.reject(error);
    }
  );

  return null;
};

export default instance;
