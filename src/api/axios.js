import axios from "axios";
import { useNavigate } from "react-router-dom";
import useUserStore from "../stores/LoginUser";
import { postReissueApiAuth } from "./authApi";

const BASE_URL = "http://localhost:4000";

export const AUTH_TOKEN_NAME = "Authorization";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { "Content-Type": "application/json; charset=utf-8" },
  withCredentials: true,
});

export const AxiosInterceptor = () => {
  const { logoutUser, refreshToken } = useUserStore();
  const navigate = useNavigate();

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
      if (error?.response?.status === 401) {
        console.log("토큰 만료");
        postReissueApiAuth(refreshToken)
          .then((res) => {
            localStorage.setItem(AUTH_TOKEN_NAME, res.token);
          })
          .catch(() => {
            localStorage.removeItem(AUTH_TOKEN_NAME);
            logoutUser();
            navigate("/");
          });
      }
      return await Promise.reject(error);
    }
  );

  return null;
};

export default instance;
