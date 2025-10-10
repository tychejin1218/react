import axios from 'axios';

const API_BASE_URL = 'http://localhost:9091/api/todos'; // 기본 URL (쿼리 없는 상태)

export const getTodos = async (filters = {}) => {
  try {
    // 쿼리 파라미터 생성
    const { title, description, completed } = filters;
    const response = await axios.get(API_BASE_URL, {
      params: {
        title, // title 필터 추가
        description, // description 필터 추가
        completed, // completed 필터 추가 (true/false)
      },
    });

    const { statusCode, data, message } = response.data;

    // API에서 오류 코드 처리
    if (statusCode !== '200') {
      throw new Error(message); // 상태 코드가 200이 아니면 에러 발생
    }

    console.log(data);
    return data; // 데이터 반환
  } catch (error) {
    console.error('Error fetching todos:', error.message || error);
    throw error; // 에러를 호출자에게 던짐
  }
};
