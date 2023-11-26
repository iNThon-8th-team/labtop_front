import instance from "./axios";

const BASE_URL = "http://localhost:4000";
const authApiPrefix = `${BASE_URL}/auth`;

const authApiEndPoints = {
  POST_LOGIN: `${authApiPrefix}/signIn`,
  POST_REGISTER: `${authApiPrefix}/signUp`,
};

export const postLoginApiAuth = async (email, password) => {
  const res = await instance.post(authApiEndPoints.POST_LOGIN, {
    email,
    password,
  });
  return res.data;
};

export const postRegisterApiAuth = async (
  email,
  password,
  username,
  isProfessor
) => {
  const res = await instance.post(authApiEndPoints.POST_REGISTER, {
    email,
    password,
    username,
    isProfessor,
  });
  console.log(res);

  return res.data;
};

export const postImageUser = async (data) => {
  const res = await instance.post(`${BASE_URL}/image/user`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const putUpdateUser = async (introduction, username) => {
  const res = await instance.put(`${BASE_URL}/user`, {
    introduction,
    username,
  });
  console.log(res);

  return res.data;
};

export const fetchUserData = async () => {
  try {
    const res = await instance.get(`${BASE_URL}/user`);
    return res.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
