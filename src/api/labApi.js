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
export const fetchLabData = async (labId) => {
  console.log(`${authApiPrefix}/${labId}`);
  try {
    const response = await instance.get(`${authApiPrefix}/${labId}`, {
      // 필요한 경우, 여기에 헤더나 기타 설정을 추가합니다.
    });
    return response.data; // 응답 데이터를 반환합니다.
  } catch (error) {
    console.error("데이터를 불러오는 데 실패했습니다.", error);
    // 에러 처리를 여기에 추가할 수 있습니다.
    throw error; // 에러를 재발생시켜 필요한 경우 상위 컴포넌트에서 처리할 수 있게 합니다.
  }
};

export const fetchMyLab = async (userId) => {
  const res = await instance.get(`${authApiPrefix}/my/${userId}`);
  return res.data[0];
};
