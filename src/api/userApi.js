import instance from "./axios";

const BASE_URL = "http://localhost:4000";
const userApiPrefix = `${BASE_URL}/user`;

export const getUserById = async (userId) => {
  const res = await instance.get(`${userApiPrefix}/${userId}`);
  return res.data;
};
