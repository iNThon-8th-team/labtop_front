import { useEffect } from "react";
import instance from "./axios";

const BASE_URL = "http://localhost:4000";
const boardApiPrefix = `${BASE_URL}/board`;

export const fetchBoardData = async (labId) => {
  try {
    const response = await instance.get(`${boardApiPrefix}/${labId}`, {
      // 필요한 경우, 여기에 헤더나 기타 설정을 추가합니다.
    });
    return response.data; // 응답 데이터를 반환합니다.
  } catch (error) {
    console.error("데이터를 불러오는 데 실패했습니다.", error);
    // 에러 처리를 여기에 추가할 수 있습니다.
    throw error; // 에러를 재발생시켜 필요한 경우 상위 컴포넌트에서 처리할 수 있게 합니다.
  }
};
