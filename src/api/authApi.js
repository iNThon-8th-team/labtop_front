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
  console.log(res.data);
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
