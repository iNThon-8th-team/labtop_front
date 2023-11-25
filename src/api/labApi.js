import instance from "./axios";

const BASE_URL = "http://localhost:4000";
const authApiPrefix = `${BASE_URL}/lab`;

export const postCategoryApi = async (category) => {
  const res = await instance.get(`${authApiPrefix}?category=${category}`);
  return res.data;
};
export const postSearchApi = async (search) => {
  const res = await instance.get(`${authApiPrefix}?search=${search}`);
  return res.data;
};
