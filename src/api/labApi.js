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
export const postLabApi = async (name, introduction, category) => {
  const res = await instance.post(`${authApiPrefix}`, {
    name,
    introduction,
    category,
  });
  return res.data;
};
export const putLabApi = async (id, name, introduction, category) => {
  const res = await instance.put(`${authApiPrefix}`, {
    name,
    introduction,
    category,
    id,
  });
  return res.data;
};
