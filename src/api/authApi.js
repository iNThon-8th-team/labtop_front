import instance from "./axios";

const BASE_URL = "http://localhost:8080";
const authApiPrefix = `${BASE_URL}/auth`;

const authApiEndPoints = {
  POST_LOGIN: `${authApiPrefix}/login`,
  POST_LOGOUT: `${authApiPrefix}/logout`,
  POST_REGISTER: `${authApiPrefix}/register`,
  POST_REISSUE: `${authApiPrefix}/reissue`,
};

export const postLoginApiAuth = async (email, password) => {
  const res = await instance.post(authApiEndPoints.POST_LOGIN, {
    email,
    password,
  });

  return res.data;
};

export const postLogoutApiAuth = async () => {
  const res = await instance.post(authApiEndPoints.POST_LOGOUT, {});
  return res.data;
};

export const postRegisterApiAuth = async (email, password, usename) => {
  const res = await instance.post(authApiEndPoints.POST_REGISTER, {
    email,
    password,
    usename,
  });
  return res.data;
};

export const postReissueApiAuth = async (refresh_token) => {
  const res = await instance.post(authApiEndPoints.POST_REISSUE, {
    refresh_token,
  });
  return res.data;
};
