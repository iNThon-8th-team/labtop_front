import instance from "./axios";

const BASE_URL = "http://localhost:4000";
const studyApiPrefix = `${BASE_URL}/study`;

export const getStudyList = async (userId) => {
  const res = await instance.get(`${studyApiPrefix}/list/${userId}`);
  return res.data;
};

export const postStudy = async (title, content, link, publicationId = null) => {
  if (publicationId != null) publicationId = parseInt(publicationId);
  const res = await instance.post(`${studyApiPrefix}`, {
    title,
    content,
    link,
    publicationId,
  });
  return res.data;
};
