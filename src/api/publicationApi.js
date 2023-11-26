import instance from "./axios";

const BASE_URL = "http://localhost:4000";
const publicationApiPrefix = `${BASE_URL}/publication`;

export const getPublicationById = async (publicationId) => {
  const res = await instance.get(`${publicationApiPrefix}/${publicationId}`);
  return res.data;
};

export const postPublication = async (title, content, link) => {
  const res = await instance.post(`${publicationApiPrefix}`, {
    title,
    content,
    link,
  });
  return res.data;
};
