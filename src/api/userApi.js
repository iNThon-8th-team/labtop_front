import instance from "./axios";

const BASE_URL = "http://localhost:4000";
const userApiPrefix = `${BASE_URL}/user`;

export const getUserById = async (userId) => {
  const res = await instance.get(`${userApiPrefix}/${userId}`);
  return res.data;
};

export const getUserPortfolio = async (userId) => {
  const res = await instance.get(`${userApiPrefix}/portfolio/${userId}`);
  return res.data;
};

export const putUserPortfolio = async (
  department,
  year,
  semester,
  credit,
  certificate,
  award,
  link,
  additional
) => {
  const res = await instance.put(`${userApiPrefix}/portfolio`, {
    department,
    year,
    semester,
    credit,
    certificate,
    award,
    link,
    additional,
  });
  return res.data;
};
