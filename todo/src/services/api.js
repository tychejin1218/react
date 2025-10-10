import axios from 'axios';

const API_BASE_URL = 'http://localhost:9091/api/todos'; // 기본 URL (쿼리 없는 상태)

export const getTodos = async (filters = {}) => {
  try {
    // 쿼리 파라미터 생성
    const { title, completed } = filters;
    const response = await axios.get(API_BASE_URL, {
      params: {
        title,
        completed,
      },
    });

    const { statusCode, data, message } = response.data;

    if (statusCode !== '200') {
      throw new Error(message);
    }

    return data;
  } catch (error) {
    console.error('Error fetching todos:', error.message || error);
    throw error;
  }
};
